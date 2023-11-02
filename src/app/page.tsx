import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

// import { api } from "~/trpc/server";
import AdminStartpage from "./admin/AdminStartpage";
import FirstLoginPage from "./_components/FirstLoginPage";
import FrontpageSessionless from "./_components/FrontpageSessionless";
import ReadOnlyUser from "./_components/ReadOnlyUser/ReadOnlyUser";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  return (
    <main>
      {!session && <FrontpageSessionless />}
      {session && session?.user.role === "ADMIN" && <AdminStartpage />}
      {session && session?.user.role === "LOGIN" && <FirstLoginPage />}
      {session && session?.user.role === "USER" && <ReadOnlyUser />}
    </main>
  );
}
