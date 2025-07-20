import { getServerAuthSessions } from "@/actions/auth";
import { getInterviewsByUserId, getLatestInterviews } from "@/actions/db";
import Chatbot from "@/components/Chatbot";
import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import PublicHomePage from "@/components/ui/PublicHomePage";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IntervueIQ – AI Mock Interviews for Developers & Designers",
  description:
    "Practice real-time mock interviews for coding, system design, and behavioral rounds with AI-driven feedback and analytics. Ace your next interview with IntervueIQ.",
  openGraph: {
    title: "IntervueIQ – AI Mock Interviews for Developers & Designers",
    description:
      "Master interviews with AI-powered mock sessions. Get instant feedback, analytics, and improve confidence across tech interviews.",
    url: "https://prepinterview-c86r.vercel.app",
    siteName: "IntervueIQ",
    type: "website",
    images: [
      {
        url: "https://prepinterview-c86r.vercel.app/robot.png", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "IntervueIQ – Practice AI Mock Interviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntervueIQ – AI Mock Interviews for Developers & Designers",
    description:
      "Get real-time feedback with AI-powered mock interviews for software roles. Practice coding, system design, and more.",
    images: ["https://prepinterview-c86r.vercel.app/robot.png"], // match with Open Graph
  },
  metadataBase: new URL("https://prepinterview-c86r.vercel.app"), // base URL of your app
  alternates: {
    canonical: "https://prepinterview-c86r.vercel.app",
  },
};


export default async function Home() {
  const session = await getServerAuthSessions();
  if (!session) return <PublicHomePage />;

  const [latestInterviews = [], userInterviews = []] = await Promise.all([
    getLatestInterviews({ userId: session?.user.id ?? "" }),
    getInterviewsByUserId(session?.user.id ?? ""),
  ]);

  const hasPastInterviews = userInterviews ? userInterviews?.length > 0 : false;
  const hasLatestInterviews = latestInterviews
    ? latestInterviews?.length > 0
    : false;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
          <p>Practice on real interview questions and get instant feedback</p>
          <div className="flex flex-row gap-3">
            <Button asChild className="max-sm:w-full btn-primary">
              <Link href={"/interview"}>Start an interview</Link>
            </Button>
            {/* <Button asChild className="max-sm:w-full btn-primary">
              <Link href={"/interview"}>Check your resume score</Link>
            </Button> */}
          </div>
        </div>
        <Image
          src={"/robot.png"}
          alt="robo"
          height={400}
          width={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                interviewId={interview.id}
                {...interview}
                key={interview.id}
                userId={session?.user.id ?? ""}
                feedback={
                  interview?.Feedback?.find(
                    (feed) => feed?.userId === session?.user.id
                  )?.userId == session?.user.id
                }
              />
            ))
          ) : (
            <p>You have not taken any interview yet</p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasLatestInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard
                interviewId={interview.id}
                {...interview}
                key={interview.id}
                userId={session?.user.id ?? ""}
                feedback={
                  interview?.Feedback?.find(
                    (feed) => feed?.userId === session?.user.id
                  )?.userId == session?.user.id
                }
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
      <Chatbot /> {/* ← Floating chatbot always available */}
    </>
  );
}
