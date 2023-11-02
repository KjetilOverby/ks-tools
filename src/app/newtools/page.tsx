import React from "react";
import HeaderComponent from "../_components/HeaderComponent";

import { createTRPCContext } from "../../api/trpc/[trpc]/route";

const page = () => {
  const { data: sawblades, refetch: refetchSawblades } =
    createTRPCContext.sawblades.getAll.useQuery(undefined);

  console.log("Hello" + sawblades);
  console.log("from Newblades");
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
    </>
  );
};

export default page;
