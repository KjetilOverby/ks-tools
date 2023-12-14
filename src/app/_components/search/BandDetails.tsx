"use client";
import React, { useState } from "react";
import dateFormat from "dateformat";
import HistorikkInput from "./HistorikkInput";
import Deletehistorikkpost from "./deletehistorikkpost";

interface bandProps {
  bandhistorikkData: {
    id: string;
    updatedAt: Date;
    IdNummer: string;
    type: string;

    bandhistorikk: {
      creator: string;
      feilkode: string;
      handling: string;
      historikkId: string;
      id: string;
      datoInn: Date;
      datoUt: Date;
      sagNr: string;
      sideklaring: number;
      updatedAt: Date;
      sagtid: number;
      klInn: Date;
      klUt: Date;
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
            Bånd ID: {bandhistorikkData.IdNummer}
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
              <th className="text-sm text-accent">Utpostet</th>

              <th className="text-sm text-accent">T</th>

              <th className="text-sm text-accent">Temp</th>
              <th className="text-sm text-accent">Rutine</th>
              <th className="text-sm text-accent">SK</th>
              <th className="text-sm text-accent">Feilkode</th>
              <th className="text-sm text-accent">Anm sag</th>
              <th className="text-sm text-blue-500"></th>
              <th className="text-sm text-blue-500">Handling</th>
              <th className="text-sm text-blue-500">Anm KS</th>
              <th className="text-sm text-blue-500">Dato srv</th>
            </tr>
          </thead>
          <tbody>
            {bandhistorikkData.bandhistorikk.map((post) => {
              console.log(post);

              return (
                <>
                  <tr className="bg-accent">
                    <td>
                      <div className="text-xs text-neutral">{post.sagNr}</div>
                    </td>
                    <td>
                      <div className="text-xs text-neutral">
                        {dateFormat(post.datoInn, "dd.mm.yyyy")},{" "}
                        {dateFormat(post.klInn, "HH:MM")}
                      </div>
                    </td>
                    <td>
                      <div className="text-xs text-neutral">
                        {dateFormat(post.datoUt, "dd.mm.yyyy")},{" "}
                        {dateFormat(post.klUt, "HH:MM")}
                      </div>
                    </td>
                    <td className="font-bold text-neutral">{post.sagtid}</td>

                    <td className="text-primary">20 grader</td>
                    <td className="text-primary">Rutine</td>
                    <td className="text-primary">{post.sideklaring}</td>
                    <td className="text-primary">{post.feilkode}</td>

                    <td className="text-primary">
                      <button className="btn btn-xs bg-accent">Vis</button>
                    </td>
                    <td className="text-primary">
                      <button className="btn btn-xs">KS</button>
                    </td>
                    <td className="text-primary">Handling</td>
                    <td className="text-primary">
                      <button className="btn btn-xs bg-primary">Vis</button>
                    </td>
                    <td className="text-primary">20.05.2020</td>
                    <td className="text-primary">
                      <Deletehistorikkpost
                        post={post.id}
                        setOpenBandhistorikkData={setOpenBandhistorikkData}
                      />
                    </td>
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
