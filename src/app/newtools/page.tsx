import HeaderComponent from "../_components/HeaderComponent";
import dateFormat from "dateformat";

import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Deleteblades from "../_components/deleteblades";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query();

  return (
    <>
      <div className="h-screen bg-gray-800">
        <HeaderComponent />

        <CreatePost />

        <div className="overflow-x-auto px-5 pt-24">
          <table className="table">
            <thead>
              <tr>
                <th className="text-sm">Type/dato</th>

                <th className="text-sm">Serienummer</th>

                <th className="text-sm">Transparent</th>

                <th className="text-sm">Endret av</th>

                <th className="text-sm">Comments</th>
                <th className="text-sm">Service</th>

                <th className="text-sm">Rediger post</th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    <tr className="bg-slate-700">
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="font-bold">{blade.serial}</div>
                            <div className="text-sm opacity-50">
                              {dateFormat(
                                blade.updatedAt,
                                "dd.mm.yyyy , HH:MM",
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-orange-400">
                        {blade.type}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Created by: Moff
                        </span>
                      </td>
                      <td>{blade.userId}</td>
                      <td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            {blade.createdById}
                          </button>
                        </th>
                      </td>
                      <td>
                        <th>
                          {blade?.bandhistorikk.map((item) => (
                            <p key={item.id}>{item.sagNr}</p>
                          ))}
                        </th>
                      </td>

                      <td></td>
                      <td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            REDIGER
                          </button>
                        </th>
                      </td>
                      <td>
                        <th>
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
