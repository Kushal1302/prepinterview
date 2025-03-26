import { getServerAuthSessions } from "@/actions/auth";
import Agent from "@/components/Agent";
import React from "react";

const Page = async () => {
  const session = await getServerAuthSessions();
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
