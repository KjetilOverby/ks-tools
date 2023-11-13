import HeaderComponent from "../_components/HeaderComponent";
import dateFormat, { masks } from "dateformat";

import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import TestComponent from "../_components/TestComponent";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query();
  console.log(sawblades);

  // const createBlade = api.sawblades.create.useMutation({
  //   onSuccess: () => {
  //     void refetchBlade();
  //   },
  // });

  // const submitForm = () => {
  //   createBlade.mutate({
  //     serial: "tool.serial",
  //     type: "tool.type",
  //   });
  // };

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
        <TestComponent />
        <CreatePost />

        <div className="overflow-x-auto pt-24">
          <table className="table">
            <thead>
              <tr>
                <th className="text-sm">Serienummer/dato</th>

                <th className="text-sm">Bladtype</th>

                <th className="text-sm">Transparent</th>

                <th className="text-sm">Endret av</th>

                <th className="text-sm">Comments</th>
                <th className="text-sm">Service</th>

                <th className="text-sm">Rediger post</th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                console.log(blade.createdById);

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
                          {blade?.sawbladeComment.map((item) => (
                            <p key={item.id}>{item.comment}</p>
                          ))}
                        </th>
                      </td>
                      <td>
                        <th>
                          {blade?.oml.map((item) => (
                            <p key={item.id}>{item.firma}</p>
                          ))}
                        </th>
                      </td>
                      <td>
                        <th>
                          {blade?.personal.map((item) => (
                            <>
                              <p key={item.id}>{item.title}</p>
                              <div className="h-10 w-10">
                                <img
                                  className="w-full rounded-full"
                                  src={item.img}
                                  alt=""
                                />
                              </div>
                            </>
                          ))}
                        </th>
                      </td>
                      <td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            REDIGER
                          </button>
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
