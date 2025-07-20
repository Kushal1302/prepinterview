"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col card py-14 px-10 gap-6 items-center text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={"/robot.png"} width={38} height={32} alt="logo" />
          <h2 className="text-primary-100 text-2xl font-semibold">IntervueIQ</h2>
        </div>

        {/* Header */}
        <h3 className="text-lg font-medium">
          {isSignIn ? "Sign in to continue" : "Create your free account"}
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm">
          {isSignIn
            ? "Practice interviews, get feedback and land your dream job."
            : "Join thousands using AI to prepare smarter and get hired faster."}
        </p>

        {/* Google Sign In Button */}
        <Button
          onClick={() => signIn("google")}
          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            height={20}
            width={20}
            alt="google"
          />
          {isSignIn ? "Sign in with Google" : "Sign up with Google"}
        </Button>

        {/* Switch between Sign In / Sign Up */}
        <p className="text-sm text-muted-foreground mt-6">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="font-medium text-user-primary"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
