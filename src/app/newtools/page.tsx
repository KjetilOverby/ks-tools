import React from "react";
import HeaderComponent from "../_components/HeaderComponent";

import { api } from "~/trpc/server";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query();

  return (
    <>
      <div className="h-screen bg-gray-800">
        <HeaderComponent />
        <div>
          {sawblades.map((blade) => {
            return (
              <div>
                <h1 className="text-white">{blade.type}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
