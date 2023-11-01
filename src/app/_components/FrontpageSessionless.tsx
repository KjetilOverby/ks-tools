import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const FrontpageSessionless = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>
        <h1>TOOLSTORE</h1>
        <h1 className="mb-4 text-3xl">Velkommen til TOOLSTORE</h1>
        <div className="w-96">
          <p className="text-xs">
            Denne appen er privat og du må logge inn med en google konto. Etter
            innlogging må du kontakte utvikler for å få tilgang. Kontaktinfo
            kommer etter at du er logget inn. Dersom du ikke skal ha tilgang til
            denne appen så vil din konto bli slettet.
          </p>
        </div>
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
    </div>
  );
};

export default FrontpageSessionless;
