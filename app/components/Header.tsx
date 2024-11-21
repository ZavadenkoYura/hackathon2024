import Link from "next/link";
import { getServerSessionAuth } from "../api/auth/[...nextauth]/route";

export async function Header() {
  const session = await getServerSessionAuth();

  return (
    <header className="w-full flex justify-end items-center shadow-md bg-white p-4 fixed z-20">
      <div className="flex items-center space-x-4">
        <span className="text-black">{session?.user!.email}</span>
        <Link href="/services/profile">
          <div className="w-12 h-12 bg-orange-400 flex justify-center items-center text-white text-2xl text-bold rounded-full">
            {session?.user!.username.slice(0, 1)}
          </div>
        </Link>
      </div>
    </header>
  );
}
