"use client";
import React, { useState } from "react";
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
  id: string;
  kunde: string;
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
  }[];
}

interface BladeProps {
  sawblades: Blade[];
}

const SearchMain = ({ sawblades }: BladeProps) => {
  const [showDeletedBlades, setShowDeletedBlades] = useState(false);

  const [bandhistorikkData, setBandhistorikkData] = useState({
    updatedAt: new Date(),
    id: "",
    IdNummer: "",
    type: "",
    bandhistorikk: [
      {
        creator: "",
        feilkode: "",
        handling: "",
        historikkId: "",
        datoInn: new Date(),
        klInn: new Date(),
        datoUt: new Date(),
        klUt: new Date(),
        sagNr: "",
        id: "",
        updatedAt: new Date(),
        sagtid: 0,
        sideklaring: 0,
        anmSag: "",
        anmKS: "",
      },
    ],
  });
  const [openBandhistorikkData, setOpenBandhistorikkData] = useState(false);

  /*   const [searchIdResult, setSearchIdResult] = useState(
    sawblades.filter((item: Blade) => item.serial.includes("")),
  ); */

  const [updateSearch, setUpdateSearch] = useState(false);

  /*   useEffect(() => {
    setSearchIdResult(
      sawblades.filter((item: Blade) => item.serial.includes(IdInput)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IdInput, updateSearch]); */

  return (
    <div className="m-5">
      {openBandhistorikkData && (
        <BandDetails
          bandhistorikkData={bandhistorikkData}
          setOpenBandhistorikkData={setOpenBandhistorikkData}
        />
      )}

      <div>
        <div className="ml-5 rounded-xl py-5">
          <div className="flex ">
            <DatePicker2
              link="/search"
              setUpdateSearch={setUpdateSearch}
              updateSearch={updateSearch}
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
              const openHistorikkHandler = () => {
                setOpenBandhistorikkData(true);
                setBandhistorikkData({
                  IdNummer: blade.IdNummer,
                  type: blade.type,
                  bandhistorikk: blade.bandhistorikk,
                  id: blade.id,
                  updatedAt: blade.updatedAt,
                });
              };

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
                              {blade.type}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold text-neutral">
                        {blade.IdNummer}
                      </td>

                      <td className="text-primary">{blade.creator}</td>
                      <td>{blade._count.bandhistorikk}</td>
                      <td className="text-primary">
                        <button
                          onClick={openHistorikkHandler}
                          className="btn btn-xs bg-secondary"
                        >
                          Historikk
                        </button>
                      </td>

                      <td>
                        <th className="text-red-400">
                          <DeleteComponent id={blade.id} />
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
                <th className="text-sm text-accent">Slettet av</th>
                <th className="text-sm text-accent"></th>
              </tr>
            </thead>
            <tbody>
              {sawblades.map((blade) => {
                return (
                  <>
                    {blade.deleted && (
                      <tr className="bg-teal-800">
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
                                {blade.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-bold text-neutral">
                          {blade.IdNummer}
                        </td>

                        <td className="text-primary">{blade.creator}</td>
                        <td className="text-primary">KTl</td>

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
