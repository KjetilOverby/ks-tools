import HeaderComponent from "../_components/HeaderComponent";
import dateFormat from "dateformat";
// import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Deleteblades from "../_components/deleteblades";
import { SearchByDate } from "../_components/search/SearchByDate";

interface dateProps {
  searchParams: {
    date: string;
    date2: string;
    serial: string;
  };
}

const page = async ({ searchParams }: dateProps) => {
  let date1 = "2023-12-12";
  let date2 = "2023-12-05";
  let serial = "";

  if (searchParams.date) {
    date1 = searchParams.date;
    date2 = searchParams.date2;
    serial = searchParams.serial;
  }

  const sawblades = await api.sawblades.getAll.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
  });
  // const session = await getServerAuthSession();

  return (
    <>
      <HeaderComponent />
      <div className="h-screen bg-base-100 p-5">
        <div className="overflow-x-auto px-5 pt-5">
          <div className="flex h-96 flex-row py-5">
            <CreatePost />
            <SearchByDate />
          </div>
          <table className="table table-xs bg-primary">
            <thead>
              <tr>
                <th className="text-sm text-accent">Serienummer</th>
                <th className="text-sm text-accent">Type</th>
                <th className="text-sm text-accent">Dato</th>

                <th className="text-sm text-accent">Opprettet av</th>
                <th className="text-sm text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    <tr className="bg-accent">
                      <td className="font-bold text-neutral">
                        {blade.IdNummer}{" "}
                        {blade.note && (
                          <span className="text-xs font-normal text-orange-200">
                            ({blade.note})
                          </span>
                        )}
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-neutral">
                              {blade.type} {blade.side}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-neutral">
                              {dateFormat(
                                blade.updatedAt,
                                "dd.mm.yyyy , HH:MM",
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="text-neutral">
                        <td className="flex items-center">
                          <div className="mr-2 h-5 w-5">
                            <img
                              className="rounded-full"
                              src={blade.creatorImg}
                              alt=""
                            />
                          </div>
                          {blade.creator}
                        </td>
                      </td>

                      <td>
                        <th className="text-red-400">
                          <Deleteblades blade={blade.id} />
                        </th>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
