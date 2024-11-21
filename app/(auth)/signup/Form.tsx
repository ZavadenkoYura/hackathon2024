"use client";

import { RegisterSchemaType, registerSchema } from "@/lib/authZod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export function Form({}: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      await axios.post("/api/auth/register", data);
      router.push("/login");
    } catch (e) {
      setError("email", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Sign up</h2>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="qwerty"
            {...register("username")}
          />
          <span className="text-red-600">{errors.username?.message}</span>
        </div>
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
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center text-gray-600">
        Already have an account?
        <Link href="/login" className="text-blue-600">
          {" "}
          Sign In
        </Link>
      </p>
    </div>
  );
}
