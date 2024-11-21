"use client";

import { LoginSchemaType, loginSchema } from "@/lib/authZod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";

type Props = {};

export function Form({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/services",
      });
    } catch (e) {
      console.log("[ERROR WHILE TRYING TO LOG IN]");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Sign in</h2>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="example@example.com"
            {...register("email")}
          />
          <span className="text-red-600">{errors.email?.message}</span>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="••••••••"
            {...register("password")}
          />
          <span className="text-red-600">{errors.password?.message}</span>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm text-center text-gray-600">
        Don't have an account yet?
        <Link href="/signup" className="text-blue-600">
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
}
