import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

const HeaderComponent = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="border-b-1 flex h-16 items-center border border-l-0 border-gray-600 bg-gray-800 px-96 text-gray-50">
      <div className="mr-5 w-52">
        <h1 className="text-2xl">TOOLSTORE</h1>
      </div>
      <div className="flex">
        <Link href="/newtools">
          <p className="mr-3 text-xs font-bold">Create</p>
        </Link>
        <p className="mr-3 text-xs font-bold">Overview</p>
      </div>
      <div className="flex items-center last-of-type:ml-auto">
        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
          <div className="h-10 w-10">
            <img
              className="w-full  rounded-full"
              src={session && session.user.image}
              alt=""
            />
          </div>
        </Link>
        <div className="ml-5">
          <p>{session && session.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
