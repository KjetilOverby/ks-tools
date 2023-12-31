import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
import AdminStartpage from "./admin/AdminStartpage";
import FirstLoginPage from "./_components/FirstLoginPage";
import FrontpageSessionless from "./_components/FrontpageSessionless";
import ReadOnlyUser from "./_components/ReadOnlyUser/ReadOnlyUser";

export default async function Home() {
  // const sawblades = api.sawblades.getAll.query();

  const session = await getServerAuthSession();

  return (
    <main>
      {!session && <FrontpageSessionless session={session} />}
      {session && session?.user.role === "ADMIN" && <AdminStartpage />}
      {session && session?.user.role === "KV_ADMIN" && <AdminStartpage />}
      {session && session?.user.role === "MO_ADMIN" && <AdminStartpage />}
      {session && session?.user.role === "LOGIN" && (
        <FirstLoginPage session={session} />
      )}
      {session && session?.user.role === "USER" && <ReadOnlyUser />}
    </main>
  );
}
