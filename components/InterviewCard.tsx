import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";
import { getRandomInterviewCover } from "@/lib/utils";

interface InterViewProps {
  interviewId: string;
  userId: string;
  role: string;
  techstack: string[];
  type: string;
  createdAt: string;
}

const InterviewCard = ({
  interviewId,
  userId,
  role,
  techstack,
  type,
  createdAt,
}: InterViewProps) => {
  console.log(userId);
  const formattedDate = dayjs(createdAt || Date.now()).format("MMM D, YYYY");
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{type}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            height={90}
            className="rounded-full object-fit size-[90px]"
            width={90}
          />
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image src={"/calendar.svg"} alt="cal" height={22} width={22} />
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src={"/star.svg"} alt="Star" height={22} width={22} />
              <p>---/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
            You {"haven't"} taken the interview yet. Take it now to improve your
            skills
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />
          <Button className="btn-primary">
            <Link href={`/interview/${interviewId}/feedback`}>
              Check Feedback
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
