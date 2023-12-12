"use client";
import React, { useState } from "react";
import dateFormat from "dateformat";
import HistorikkInput from "./HistorikkInput";

interface bandProps {
  bandhistorikkData: {
    id: string;
    updatedAt: Date;
    serial: string;
    type: string;
    bandhistorikk: {
      creator: string;
      feilkode: string;
      handling: string;
      historikkId: string;
      id: string;
      postDato: Date;
      sagNr: string;
      sagtid: number;
      sideklaring: number;
      updatedAt: Date;
    }[];
  };

  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const BandDetails = ({
  bandhistorikkData,
  setOpenBandhistorikkData,
}: bandProps) => {
  const [openInput, setOpenInput] = useState(false);

  return (
    <div className="absolute left-0 top-0 z-50 h-screen w-screen bg-base-100 p-5">
      {openInput && (
        <HistorikkInput
          setOpenInput={setOpenInput}
          bandId={bandhistorikkData.id}
          setOpenBandhistorikkData={setOpenBandhistorikkData}
        />
      )}
      <div className="mb-12">
        <div>
          <button
            onClick={() => setOpenBandhistorikkData(false)}
            className="btn btn-xs bg-red-700"
          >
            Lukk
          </button>
          <h1 className="mt-5 text-4xl text-orange-300">
            Bånd ID: {bandhistorikkData.serial}
          </h1>
          <p>Type: {bandhistorikkData.type}</p>
        </div>
        <div>
          <button
            onClick={() => setOpenInput(true)}
            className="btn btn-xs mt-5"
          >
            Ny post
          </button>
        </div>
      </div>
      <div>
        <table className="table table-xs w-full bg-neutral">
          <thead>
            <tr>
              <th className="text-sm text-accent">Sag</th>
              <th className="text-sm text-accent">Innpostet</th>

              <th className="text-sm text-accent">Sagtid</th>

              <th className="text-sm text-accent">Feilkode</th>
              <th className="text-sm text-accent">Handling</th>
              <th className="text-sm text-accent">Sideklaring</th>
            </tr>
          </thead>
          <tbody>
            {bandhistorikkData.bandhistorikk.map((blade) => {
              return (
                <>
                  <tr className="bg-accent">
                    <td>
                      <div className="text-xs text-neutral">{blade.sagNr}</div>
                    </td>
                    <td>
                      <div className="text-xs text-neutral">
                        {dateFormat(blade.postDato, "dd.mm.yyyy")}
                      </div>
                    </td>
                    <td className="font-bold text-neutral">{blade.sagtid}</td>

                    <td className="text-primary">{blade.feilkode}</td>
                    <td className="text-primary">{blade.handling}</td>
                    <td className="text-primary">{blade.sideklaring}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandDetails;
