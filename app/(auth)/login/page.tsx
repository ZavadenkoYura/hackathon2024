import { redirect } from "next/navigation";
import { Form } from "./Form";
import { getServerSessionAuth } from "@/app/api/auth/[...nextauth]/route";

type Props = {
  title: string;
};

export default async function Login({}: Props) {
  const session = await getServerSessionAuth();

  if (session?.user) redirect("/services");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form />
    </div>
  );
}
