import { getServerAuthSessions } from "@/actions/auth";
import { getInterviewsByUserId, getLatestInterviews } from "@/actions/db";
import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSessions();

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
          <Button asChild className="max-sm:w-full btn-primary">
            <Link href={"/interview"}>Start an interview</Link>
          </Button>
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
                feedback={interview?.Feedback?.find(
                  (feed) => feed?.userId === session?.user.id
                )?.userId == session?.user.id}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}
