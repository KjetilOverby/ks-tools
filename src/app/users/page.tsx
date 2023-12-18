import { log } from "console";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

const page = async () => {
  const session = await getServerAuthSession();
  const users = await api.users.getUsers.query({});

  console.log(users);

  return (
    <>
      <div className="p-5">
        {users.map((user) => {
          return (
            <div className="w-96 rounded-2xl bg-accent pb-5 pl-5 ">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img src={user.image} />
                </div>
              </div>
              <div>
                <p>Brukernavn: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Rolle: {user.role === "ADMIN" ? "Utviker" : ""}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
