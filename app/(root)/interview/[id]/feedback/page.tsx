import { getServerAuthSessions } from "@/actions/auth";
import { getFeedbackByInterviewId, getInterviewById } from "@/actions/db";
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
      Total Score: {feedback?.totalScore}
      <p className="text-center">Under Development</p>
    </div>
  );
};

export default Page;
