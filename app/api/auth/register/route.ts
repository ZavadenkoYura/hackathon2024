import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { RegisterSchemaType } from "@/lib/authZod";

export async function POST(req: Request) {
  const data: RegisterSchemaType = await req.json();
  const { email, username, password } = data;

  const user = await prisma.account.findFirst({
    where: { email },
  });

  if (user) {
    return NextResponse.json(
      {
        message: `User ${user.email} already exists`,
      },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userCreated = await prisma.account.create({
    data: {
      username: username,
      email: email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    {
      message: `User ${userCreated.email} was created`,
    },
    { status: 201 }
  );
}
