import { getServerAuthSessions } from "@/actions/auth";
import { getInterviewById } from "@/actions/db";
import Agent from "@/components/Agent";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await getInterviewById(id);
  if (!interview) redirect("/");
  const session = await getServerAuthSessions();
  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4">
            <Image
              src={interview.coverImage}
              alt="cover-image"
              height={40}
              width={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>
        <p className="bg-dark-200 capitalize px-4 py-2 rounded-lg h-fit ">
          {interview.type}
        </p>
      </div>
      <Agent
        userName={session?.user.name ?? ""}
        userId={session?.user.id ?? ""}
        userImage={session?.user.image ?? ""}
        type="interview"
        interviewId={interview.id}
        questions={interview.questions}
      />
    </>
  );
};

export default Page;
