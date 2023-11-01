import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

// import { api } from "~/trpc/server";
import AdminStartpage from "./admin/AdminStartpage";
import FrontpageSessionless from "./_components/FrontpageSessionless";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  return (
    <main>
      {!session && <FrontpageSessionless />}
      {session && session?.user.role === "ADMIN" && <AdminStartpage />}
      <div className="flex flex-col items-center justify-center gap-4">
        {session && session.user.role}
        <p className="text-center text-2xl text-white">
          {session && <span>Logged in as {session.user?.name}</span>}
        </p>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </main>
  );
}
