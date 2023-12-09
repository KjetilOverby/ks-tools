import React from "react";
import HeaderComponent from "../_components/HeaderComponent";
import SearchMain from "../_components/search/SearchMain";
import { api } from "~/trpc/server";

const page = async () => {
  const sawblades = await api.sawblades.getAll.query({
    date: "2023-12-10",
    date2: "2023-12-07",
  });

  return (
    <div>
      <HeaderComponent />
      <SearchMain sawblades={sawblades} />
    </div>
  );
};

export default page;
