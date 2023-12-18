import { api } from "~/trpc/server";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: "ADMIN" | "LOGIN" | "MO_ADMIN" | "KV_ADMIN"; // Define the possible role values
}

const page = async ({}: User) => {
  const users = await api.users.getUsers.query({});

  return (
    <>
      <div className="p-5">
        {users.map((user) => {
          let rolle = "";

          const rolleHandeler = () => {
            if (user.role === "ADMIN") {
              rolle = "Utvikler";
            } else if (user.role === "LOGIN") {
              rolle = "Ingen rolle enda";
            } else if (user.role === "MO_ADMIN") {
              rolle = "Moelven Østerdalsbruket";
            } else if (user.role === "KV_ADMIN") {
              rolle = "Kvarnstrands & Stridbergs";
            }
          };

          rolleHandeler();

          return (
            <div
              key={user.id}
              className="mb-5 w-96 rounded-2xl bg-accent pb-5 pl-5"
            >
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img src={user.image} />
                </div>
              </div>
              <div>
                <p>Brukernavn: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Rolle: {rolle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
