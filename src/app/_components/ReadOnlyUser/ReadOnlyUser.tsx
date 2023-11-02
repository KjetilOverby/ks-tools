import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const ReadOnlyUser = async () => {
  const session = await getServerAuthSession();
  return (
    <div>
      <h1>Read Only page (USER)</h1>
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </div>
  );
};

export default ReadOnlyUser;
