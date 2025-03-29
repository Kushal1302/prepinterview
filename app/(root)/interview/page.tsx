import { getServerAuthSessions } from "@/actions/auth";
import Agent from "@/components/Agent";
import { subscriptionLimit } from "@/constants";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await getServerAuthSessions();
  const plan = session?.user.subscription?.plan as "free" | "premium";
  const userSubscription = session?.user.subscription;

  console.log(session);

  const limitCheck = {
    free: () =>
      Number(userSubscription?.interviewsCreated) >=
      subscriptionLimit.free.interviewCreated,
    premium: () =>
      Number(userSubscription?.interviewsCreated) >=
      subscriptionLimit.premium.interviewCreated,
  };

  if (plan && limitCheck[plan]()) {
    return redirect("/upgrade-plan");
  }
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent
        userName={session?.user.name ?? ""}
        userId={session?.user.id}
        type="generate"
      />
    </>
  );
};

export default Page;
