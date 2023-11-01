import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const FrontpageSessionless = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-3xl">Velkommen til TOOLSTORE</h1>
      <p>Logg inn for å få tilgang til appen</p>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
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
      </div>
    </div>
  );
};

export default FrontpageSessionless;
