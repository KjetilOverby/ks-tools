import HeaderComponent from "../_components/HeaderComponent";
import dateFormat from "dateformat";
// import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Deleteblades from "../_components/deleteblades";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query();
  // const session = await getServerAuthSession();

  return (
    <>
      <div className="h-screen bg-base-100 ">
        <HeaderComponent />

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
                            <div className="text-xs text-primary">
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

                      <td className="text-primary">{blade.creator}</td>

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
