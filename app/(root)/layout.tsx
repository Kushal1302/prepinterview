import { getServerAuthSessions } from "@/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { LogOut } from "lucide-react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerAuthSessions();
  if (!session) redirect("/sign-in");
  return (
    <div className="root-layout" suppressHydrationWarning>
      <nav className="flex  items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="Logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepInterView</h2>
        </Link>
        <Link title="logout" href={"/api/auth/signout"}>
          <LogOut/>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
