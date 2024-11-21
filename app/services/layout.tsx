import { ReactNode } from "react";
import { ToolBar } from "../components/ToolBar";
import { Header } from "../components/Header";
import { Session } from "next-auth";
import { getServerSessionAuth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: Session | null = await getServerSessionAuth();

  if (!session) redirect("/login");

  return (
    <div className="w-full flex">
      <ToolBar />
      <div className="w-full flex justify-start">
        <div className="w-full flex justify-end">
          <Header />
          <div className="w-[85%] flex justify-center pt-24 pb-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
