"use client";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { DeleteComponent } from "./DeleteComponent";
import { RestoreComponent } from "./RestoreComponent";
import BandDetails from "./BandDetails";
import DatePicker2 from "../reusable/Datepicker2";

interface Blade {
  type: string;
  IdNummer: string;
  deleted: boolean;
  creator: string;
  updatedAt: Date;
  createdAt: Date;
  id: string;
  kunde: string;
  side: string;
  _count: {
    bandhistorikk: number;
  };

  bandhistorikk: {
    creator: string;

    feilkode: string;
    handling: string;
    historikkId: string;
    id: string;
    datoInn: Date;
    klInn: Date;
    datoUt: Date;
    klUt: Date;
    sagNr: string;
    sagtid: number;
    sideklaring: number;
    anmSag: string;
    updatedAt: Date;
    anmKS: string;
    temperatur: number;
    sgSag: string;
    sgKS: string;
    datoSrv: Date;
  }[];
}

interface BladeProps {
  sawblades: Blade[];
}

const SearchMain = ({ sawblades }: BladeProps) => {
  const [showDeletedBlades, setShowDeletedBlades] = useState(false);

  console.log(sawblades);

  const [openBandhistorikkData, setOpenBandhistorikkData] = useState(false);

  /*   const [searchIdResult, setSearchIdResult] = useState(
    sawblades.filter((item: Blade) => item.serial.includes("")),
  ); */

  const [searchSerial, setSearchSerial] = useState<string>("");

  /*   useEffect(() => {
    setSearchIdResult(
      sawblades.filter((item: Blade) => item.serial.includes(IdInput)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IdInput, updateSearch]); */

  // const getHistorikkdata = sawblades.map((item) => item.bandhistorikk);

  // console.log(
  //   getHistorikkdata.filter(
  //     (item) => item.sagNr === "4" && item.feilkode === "Ingen anmerkning",
  //   ).length,
  // );

  return (
    <div className="m-5">
      <div>
        <div className="ml-5 rounded-xl py-5">
          <div className="flex ">
            <DatePicker2
              link="/search"
              searchSerial={searchSerial}
              setSearchSerial={setSearchSerial}
            />
          </div>
        </div>
        <h1 className="text-xl text-orange-300">Registrerte blad</h1>
        <table className="table table-xs bg-neutral">
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
            {sawblades.map((blade) => {
              return (
                <>
                  {!blade.deleted && (
                    <tr className="bg-accent">
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>

                          <div>
                            <div className="text-xs text-neutral">
                              {dateFormat(
                                blade.createdAt,
                                "dd.mm.yyyy , HH:MM",
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar"></div>
                          <div>
                            <div className="text-xs text-neutral">
                              {blade.type} {blade.side}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-neutral">
                        {blade.IdNummer}
                      </td>
                      <td className="text-primary">{blade.creator}</td>
                      <td>{blade._count.bandhistorikk}</td>
                      <td>
                        <th className="text-red-400">
                          <DeleteComponent id={blade.id} />
                        </th>
                      </td>
                    </tr>
                  )}

                  {sawblades.length === 1 && (
                    <div className="absolute w-full">
                      <BandDetails
                        bandhistorikkData={blade}
                        setOpenBandhistorikkData={setOpenBandhistorikkData}
                      />
                    </div>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-xs my-5"
        onClick={() => setShowDeletedBlades(!showDeletedBlades)}
      >
        {showDeletedBlades ? "Skjul slettede blad" : "Vis slettede blad"}
      </button>
      {showDeletedBlades && (
        <div>
          <h1 className="text-xl text-orange-300">Slettede blad</h1>
          <table className="table table-xs bg-neutral">
            <thead>
              <tr>
                <th className="text-sm text-accent">Dato</th>
                <th className="text-sm text-accent">Type</th>

                <th className="text-sm text-accent">ID</th>

                <th className="text-sm text-accent">Opprettet av</th>
                <th className="text-sm text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    {blade.deleted && (
                      <tr className="bg-primary">
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar"></div>
                            <div>
                              <div className="text-xs text-neutral">
                                {dateFormat(
                                  blade.updatedAt,
                                  "dd.mm.yyyy , HH:MM",
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar"></div>
                            <div>
                              <div className="text-xs text-neutral">
                                {blade.type} {blade.side}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-bold text-neutral">
                          {blade.IdNummer}
                        </td>

                        <td className="text-primary">{blade.creator}</td>

                        <td>
                          <th className="text-neutral">
                            <RestoreComponent id={blade.id} />
                          </th>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchMain;
