/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// interface sessionProps {
//   session: {
//     user: {
//       name: string;
//       image: string;
//       email: string;
//       id: string;
//       role: string;
//     };
//   };
// }
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import RoleChange from "./users/RoleChange";

const HeaderComponent = async () => {
  const session = await getServerAuthSession();
  return (
    <header>
      <nav className="border border-x-0 border-t-0 border-gray-200 border-b-primary bg-base-100 px-4 py-2.5  lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <div className="flex">
            <div>
              <a href="/" className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9615/9615380.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  KS-TOOLS
                </span>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              <div className="h-10 w-10">
                <img
                  className="w-full  rounded-full"
                  src={session?.user.image}
                  alt=""
                />
              </div>
            </Link>
            <div className="ml-5">
              <p>{session?.user.name}</p>
              <div>
                {session && session?.user.role === "MO_ADMIN" && (
                  <p>Østerdalsbruket</p>
                )}
                {session && session?.user.role === "MM_ADMIN" && (
                  <p>Mjøsbruket</p>
                )}
              </div>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="/search"
                  className="lg:hover:text-primary-700  block border-b border-gray-100 py-2 pl-3 pr-4 text-sm text-neutral hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Søk
                </a>
              </li>
              <li>
                <a
                  href="/statistikk"
                  className="lg:hover:text-primary-700  block border-b border-gray-100 py-2 pl-3 pr-4 text-sm text-neutral hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Statistikk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-sm text-neutral hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Oversikt
                </a>
              </li>
              {session && session?.user.email === "ktldesign80@gmail.com" && (
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-sm text-neutral hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    <RoleChange />
                  </a>
                </li>
              )}
              {session && session?.user.email === "kailundquist@gmail.com" && (
                <li>
                  <a
                    href="#"
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-sm text-neutral hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    <RoleChange />
                  </a>
                </li>
              )}

              {session && session?.user.role === "ADMIN" && (
                <li>
                  <a
                    href="/newtools"
                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-sm text-neutral lg:bg-transparent lg:p-0"
                    aria-current="page"
                  >
                    Opprett
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
