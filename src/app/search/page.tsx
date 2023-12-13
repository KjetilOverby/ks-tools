import React from "react";
import HeaderComponent from "../_components/HeaderComponent";
import SearchMain from "../_components/search/SearchMain";
import { api } from "~/trpc/server";

interface dateProps {
  searchParams: {
    date: string;
    date2: string;
    serial: string;
  };
}
const page = async ({ searchParams }: dateProps) => {
  let date1 = "2035-12-12";
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

  return (
    <div>
      <HeaderComponent />
      <div className="m-5">
        <SearchMain sawblades={sawblades} />
      </div>
    </div>
  );
};

export default page;
