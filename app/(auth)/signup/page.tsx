import { getServerSessionAuth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Form } from "./Form";

type Props = {
  title: string;
};

export default async function Signup({}: Props) {
  const session = await getServerSessionAuth();

  if (session?.user) redirect("/services");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form />
    </div>
  );
}
