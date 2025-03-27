"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type FormType = "sign-in" | "sign-up";

const authFormSchema = ({ type }: { type: FormType }) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForn = ({ type }: { type: FormType }) => {
  const isSignIn = type === "sign-in";
  const { push } = useRouter();

  const formSchema = authFormSchema({ type });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-in") {
        toast.success("Sign in success");
        console.log(values);
        push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error ${error}`);
    }
  }
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col card py-14 px-10 gap-6">
        <div className="flex flex-row justify-center gap-2">
          <Image src={"/logo.svg"} width={38} height={32} alt="logo" />
          <h2 className="text-primary-100">PrepInterView</h2>
        </div>
        <h3>Practise job interview with AI.</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 -6 mt-4 form w-full"
          >
            {!isSignIn && (
              <FormField
                name="name"
                control={form.control}
                label="Name"
                placeholder="John doe."
              />
            )}
            <FormField
              name="email"
              control={form.control}
              label="Email"
              placeholder="Enter your email."
              type="email"
            />
            <FormField
              name="password"
              control={form.control}
              label="Password"
              placeholder="Enter your password."
              type="password"
            />
            <Button type="submit" className="btn">
              {isSignIn ? "Sign in" : "Create an account"}
            </Button>
            <p className="text-center">
              {isSignIn ? "No account yet?" : "Already have and account?"}
              <Link
                className="font-bold text-user-primary ml-1"
                href={!isSignIn ? "/sign-in" : "/sign-up"}
              >
                {" "}
                {isSignIn ? "Sign up" : "Sign in"}
              </Link>
            </p>
          </form>
        </Form>
        <Button onClick={() => signIn("google")} className="btn-primary w-full">
          {isSignIn ? "Sign in with google" : "Sign up with google"}
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            height={20}
            width={20}
            alt="google"
          />
        </Button>
      </div>
    </div>
  );
};

export default AuthForn;
