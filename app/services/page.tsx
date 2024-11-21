import { Session } from "next-auth";
import { getServerSessionAuth } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function ServicesHome() {
  const session: Session | null = await getServerSessionAuth();

  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[80%] flex items-center justify-center text-center p-8 text-gray-800">
        <div className="px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Bankly {session?.user!.username}!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We are thrilled to have you here. Explore our features and get
            started on your journey today!
          </p>
          <button className="inline-block px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
            <Link href="/services/profile">Your account</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
