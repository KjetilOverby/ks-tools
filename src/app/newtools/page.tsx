import React from "react";
import HeaderComponent from "../_components/HeaderComponent";

import { api } from "~/trpc/server";

const page = () => {
  const { data: sawblades, refetch: refetchSawblades } =
    api.sawblades.getAll.useQuery(undefined);

  // const bl = await api.sawblades.query({});

  return (
    <>
      <div>
        <HeaderComponent />
      </div>
    </>
  );
};

export default page;
