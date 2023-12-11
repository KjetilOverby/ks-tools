"use client";
import React from "react";
import dateFormat from "dateformat";

interface bandProps {
  bandhistorikkData: {
    serial: string;
    type: string;
    createdAt: Date;
    createdById: string;
    userId: string;
    creator: string;
    deleted: boolean;
    note: string;
    personal: [];
    bandhistorikk: [];
  };
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
  sagNr: string;
  sagtid: number;
  creator: string;
  updatedAt: Date;
}

const BandDetails = ({
  bandhistorikkData,
  setOpenBandhistorikkData,
}: bandProps) => {
  return (
    <div className="absolute left-0 top-0 z-50 h-screen w-screen bg-base-100">
      <button onClick={() => setOpenBandhistorikkData(false)} className="btn">
        Lukk
      </button>
      <h1 className="text-neutral">Bånd: {bandhistorikkData.serial}</h1>
      <p>Type: {bandhistorikkData.type}</p>
      <div>
        <table className="w-screen">
          <thead>
            <tr>
              <th className="text-sm text-accent">Dato</th>
              <th className="text-sm text-accent">Type</th>

              <th className="text-sm text-accent">ID</th>

              <th className="text-sm text-accent">Opprettet av</th>
              <th className="text-sm text-accent">Bandhistorikk</th>
              <th className="text-sm text-accent"></th>
            </tr>
          </thead>
          <tbody>
            {bandhistorikkData.bandhistorikk.map((blade: bandProps) => {
              console.log(blade);

              return (
                <>
                  <tr className="bg-accent">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar"></div>
                        <div>
                          <div className="text-xs text-neutral">
                            {dateFormat(blade.updatedAt, "dd.mm.yyyy , HH:MM")}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar"></div>
                        <div>
                          <div className="text-xs text-neutral">
                            {blade.sagNr}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold text-neutral">{blade.sagtid}</td>

                    <td className="text-primary">{blade.creator}</td>

                    <td></td>
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
