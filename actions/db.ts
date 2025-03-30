"use server";
import { feedbackSchema } from "@/constants";
import { sendUpgradeEmail } from "@/lib/email";
import { google } from "@ai-sdk/google";
import { PrismaClient } from "@prisma/client";
import { generateObject } from "ai";

const prisma = new PrismaClient();

export const getInterviewsByUserId = async (
  userId: string
): Promise<Interview[] | null> => {
  const interviews = await prisma.interviews.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Feedback: {
        select: {
          userId: true,
        },
      },
    },
  });
  return interviews;
};

export const getLatestInterviews = async (
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> => {
  const { userId, limit = 20 } = params;
  const interviews = await prisma.interviews.findMany({
    where: {
      NOT: {
        userId,
      },
      finalized: true,
    },
    take: limit,
    include: {
      Feedback: {
        select: {
          userId: true,
        },
      },
    },
  });
  return interviews;
};

export const getInterviewById = async (
  id: string
): Promise<Interview | null> => {
  const interview = await prisma.interviews.findUnique({
    where: {
      id,
    },
  });
  return interview;
};

export const createFeedback = async (params: CreateFeedbackParams) => {
  const { interviewId, userId, transcript } = params;
  try {
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system: "You are a professional interviewer.",
    });

    const [feedback] = await prisma.$transaction([
      prisma.feedback.create({
        data: {
          userId,
          interviewId,
          categoryScores: object.categoryScores,
          areasForImprovement: object.areasForImprovement,
          totalScore: object.totalScore,
          finalAssessment: object.finalAssessment,
        },
      }),
      prisma.subscription.update({
        where: {
          userId,
        },
        data: {
          interviewsTaken: {
            increment: 1,
          },
        },
      }),
    ]);

    return {
      success: true,
      feedbackId: feedback.id,
    };
  } catch (error) {
    console.log("Error :", error);
    return {
      success: false,
    };
  }
};

export const getFeedbackByInterviewId = async (
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> => {
  const { interviewId, userId } = params;

  const feedback = await prisma.feedback.findFirst({
    where: {
      userId,
      interviewId,
    },
  });
  return feedback
    ? {
        ...feedback,
        categoryScores: feedback.categoryScores as {
          name: string;
          score: number;
          comment: string;
        }[],
      }
    : null;
};

export const upgradePlan = async ({ userId }: { userId: string }) => {
  try {
    const upgradedPlan = await prisma.subscription.update({
      where: {
        userId,
      },
      data: {
        plan: "premium",
      },
      include: {
        user: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
    await sendUpgradeEmail(upgradedPlan.user.email!, upgradedPlan.user.name!);

    return {
      success: true,
      upgradedPlan,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
