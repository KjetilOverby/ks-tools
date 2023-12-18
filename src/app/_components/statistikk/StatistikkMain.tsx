"use client";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../HeaderComponent";
import DatePicker2 from "../reusable/Datepicker2";

interface statistikkProps {
  historikkData: {
    feilkode: string;
    sagNr: string;
  };
}
interface HistoricalData {
  sagNr: string;
  feilkode: string;
}

const StatistikkMain = ({ historikkData }: statistikkProps) => {
  const [searchSerial, setSearchSerial] = useState<string>("");
  const sagNumbers: string[] = ["1", "2", "3", "4", "5", "6", "7"];
  const feilkoder: string[] = [
    "Ingen anmerkning",
    "Bølger",
    "Vandrer på hjul",
    "Sprekk",
    "Tannbrudd",
    "Sponpåliming",
    "Sløv",
    "River",
    "Ytre faktorer",
    "Reklamasjon",
    "Havari",
  ];

  let [tableData, setTableData] = useState<{
    [key: string]: { total: number; [key: string]: number };
  }>({});

  useEffect(() => {
    let updatedTableData: {
      [key: string]: { total: number; [key: string]: number };
    } = {};

    historikkData.forEach((item) => {
      let { sagNr, feilkode } = item;

      if (!updatedTableData[sagNr]) {
        updatedTableData[sagNr] = { total: 1, [feilkode]: 1 };
      } else {
        updatedTableData[sagNr].total += 1;
        updatedTableData[sagNr][feilkode] =
          (updatedTableData[sagNr][feilkode] || 0) + 1;
      }
    });

    setTableData(updatedTableData);
  }, [historikkData]);

  console.log(tableData);

  return (
    <div className="">
      <HeaderComponent />
      <div className="mx-96 mt-5">
        <div>
          <DatePicker2 link="/statistikk" />
          <table className="table table-xs mt-20 bg-neutral">
            <thead>
              <tr>
                <th className="text-sm text-accent">Sag</th>
                <th className="text-sm text-accent">Antall</th>
                {feilkoder.map((feilkode) => (
                  <th key={feilkode} className="text-sm text-accent">
                    {feilkode}
                  </th>
                ))}
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {Object.entries(tableData).map(([sagNr, data]) => (
                <tr className="bg-accent" key={sagNr}>
                  <td className="border px-4 py-2">{sagNr}</td>
                  <td className="border px-4 py-2">{data.total}</td>

                  {feilkoder.map((feilkode) => (
                    <td key={feilkode} className="border px-4 py-2">
                      {data[feilkode] || 0}
                    </td>
                  ))}
                  {/* Add more cells as needed for additional properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <table className="table table-xs mt-20 bg-neutral">
            <thead>
              <tr>
                <th className="text-sm text-accent">Sag Number</th>
                {feilkoder.map((feilkode) => (
                  <th key={feilkode} className="text-sm text-accent">
                    % {feilkode}
                  </th>
                ))}
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {Object.entries(tableData).map(([sagNr, data]) => (
                <tr className="bg-accent" key={sagNr}>
                  <td className="border px-4 py-2">{sagNr}</td>
                  {feilkoder.map((feilkode) => (
                    <td key={feilkode} className="border px-4 py-2">
                      {((data[feilkode] / data.total) * 100 || 0).toFixed(1)}%
                    </td>
                  ))}
                  {/* Add more cells as needed for additional properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatistikkMain;
