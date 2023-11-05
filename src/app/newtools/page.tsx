import HeaderComponent from "../_components/HeaderComponent";

import { api } from "~/trpc/server";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query();

  return (
    <>
      <div className="h-screen bg-gray-800">
        <HeaderComponent />
        {/* <div>
          {sawblades.map((blade) => {
            return (
              <div>
                <h1 className="text-white">{blade.type}</h1>
              </div>
            );
          })}
        </div> */}
        <div className="overflow-x-auto px-96 pt-24">
          <table className="table">
            <thead>
              <tr>
                <th className="text-sm">Serienummer/dato</th>
                <th className="text-sm">Bladtype</th>
                <th className="text-sm">Job</th>
                <th className="text-sm">Endret av</th>
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
                            <div className="text-sm opacity-50">20.04.2023</div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-orange-400">
                        {blade.type}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Created by: Kjetil
                        </span>
                      </td>
                      <td>{blade.userId}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          {blade.createdById}
                        </button>
                      </th>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          REDIGER
                        </button>
                      </th>
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
