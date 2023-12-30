// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { api } from "~/trpc/server";
import React from "react";
import StatistikkMain from "../_components/statistikk/StatistikkMain";
import HeaderComponent from "../_components/HeaderComponent";

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

  const statistikkData = await api.statistikkBladeData.getAllHistorikk.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
  });

  return (
    <div>
      <HeaderComponent />
      <StatistikkMain historikkData={statistikkData} />
    </div>
  );
};

export default page;
