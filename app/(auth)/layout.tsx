import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  console.log(session);
  if (session) redirect("/");
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
