import { getServerAuthSessions } from "@/actions/auth";
import { getFeedbackByInterviewId, getInterviewById } from "@/actions/db";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const session = await getServerAuthSessions();
  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: session?.user?.id ?? "",
  });
  return (
    <div>
      <section className="section-feedback">
        <div className="flex flex-row justify-center">
          <h1 className="font-semibold text-4xl">
            Feedback on the Interview -{" "}
            <span className="capitalize">{interview.role} Interview</span>
          </h1>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-5">
            {/* Impression */}
            <div className="flex flex-row gap-2 items-center">
              <Image src={"/star.svg"} width={22} height={22} alt="star" />
              <p>
                Overall Impression:{" "}
                <span className="font-bold text-primary-200">
                  {feedback?.totalScore}
                </span>
              </p>
            </div>
            {/* Date */}
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={"/calendar.svg"}
                width={22}
                height={22}
                alt="calendar"
              />
              <p>
                {feedback?.createdAt
                  ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                  : "NयA"}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p>{feedback?.finalAssessment}</p>

        <div className="flex flex-col gap-4">
          <h2>Breakdown of the Interview:</h2>
          {feedback?.categoryScores?.map((category, index) => (
            <div key={index}>
              <p className="font-bold">
                {index + 1}. {category.name} ({category.score}/100)
              </p>
              <p>{category.comment}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3>Strengths</h3>
          <ul>
            {feedback?.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3>Areas for Improvement</h3>
          <ul>
            {feedback?.areasForImprovement.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="buttons">
          <Button className="btn-secondary flex-1">
            <Link href={"/"} className="flex w-full justify-center">
              <p className="text-sm font-semibold text-primary-200 text-center">
                Back to Dashboard
              </p>
            </Link>
          </Button>
          <Button className="btn-primary flex-1">
            <Link
              href={`/interview/${id}`}
              className="flex w-full justify-center"
            >
              <p className="text-sm font-semibold text-black text-center">
                Retake Interview
              </p>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
