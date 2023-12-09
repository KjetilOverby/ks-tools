import HeaderComponent from "../_components/HeaderComponent";
import dateFormat from "dateformat";
// import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Deleteblades from "../_components/deleteblades";
import { SearchByDate } from "../_components/search/SearchByDate";

const page = async ({ searchParams }) => {
  console.log(searchParams);

  let date1 = "2023-12-07";
  let date2 = "2023-12-07";

  if (searchParams.date) {
    date1 = searchParams.date;
    date2 = searchParams.date2;
  }

  const sawblades = await api.sawblades.getAll.query({
    date: date1,
    date2: date2,
  });
  // const session = await getServerAuthSession();

  return (
    <>
      <HeaderComponent />
      <SearchByDate />
      <div className="h-screen bg-base-100 ">
        <div className="overflow-x-auto px-5 pt-5">
          <CreatePost />
          <table className="table table-xs bg-secondary">
            <thead>
              <tr>
                <th className="text-sm text-accent">Dato</th>
                <th className="text-sm text-accent">Type</th>

                <th className="text-sm text-accent">Serienummer</th>

                <th className="text-sm text-accent">Opprettet av</th>
                <th className="text-sm text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    <tr className="bg-accent">
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
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-neutral">
                              {blade.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-neutral">{blade.serial}</td>

                      <td className="text-neutral">{blade.creator}</td>

                      <td>
                        <th className="text-secondary">
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
