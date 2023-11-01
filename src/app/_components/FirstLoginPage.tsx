import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

const FirstLoginPage = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-400">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl text-slate-600">
          Velkommen {session?.user.name}
        </h1>
        <p className="text-xs text-slate-600">
          Du har nå logged deg inn på verktøyregister men har ingen rolle enda.
          Kontakt Kjetil på kjeoever@msn.com for å få tildelt tilgang til appen.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
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

export default FirstLoginPage;
