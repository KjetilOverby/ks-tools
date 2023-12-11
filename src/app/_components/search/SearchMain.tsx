"use client";
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { DeleteComponent } from "./DeleteComponent";
import { RestoreComponent } from "./RestoreComponent";
import BandDetails from "./BandDetails";
import DatePicker2 from "../reusable/Datepicker2";

interface Blade {
  type: string;
  serial: string;
  deleted: boolean;
  creator: string;
  updatedAt: Date; // Assuming updatedAt is a Date property
  id: string; // Assuming id is a string property
  _count: {
    bandhistorikk: number;
  };
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
  openBandhistorikkData: boolean;
  setBandhistorikkData: React.Dispatch<React.SetStateAction<{}>>;
  bandhistorikkData: {};
}

interface BladeProps {
  sawblades: Blade[];
}

const SearchMain = ({ sawblades }: BladeProps) => {
  const [showDeletedBlades, setShowDeletedBlades] = useState(false);

  const [bandhistorikkData, setBandhistorikkData] = useState({});
  const [openBandhistorikkData, setOpenBandhistorikkData] = useState(false);

  const [IdInput, setIdInput] = useState("");
  const [searchIdResult, setSearchIdResult] = useState(
    sawblades.filter((item: any) => item.serial.includes("40116")),
  );

  const [updateSearch, setUpdateSearch] = useState(false);

  useEffect(() => {
    setSearchIdResult(
      sawblades.filter((item: any) => item.serial.includes(IdInput)),
    );
  }, [IdInput, updateSearch]);

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
            <div className="ml-5 rounded-xl bg-accent p-5">
              <label>Søk på id nummer</label>
              <input
                onChange={(e) => setIdInput(e.currentTarget.value)}
                type="text"
                placeholder="ID nummer"
                className="input input-bordered input-xs mt-5 w-full max-w-xs text-xs"
              />
            </div>
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
            {searchIdResult.map((blade) => {
              console.log(blade);
              const openHistorikkHandler = () => {
                setOpenBandhistorikkData(true);
                setBandhistorikkData(blade);
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
                      <td className="font-bold text-neutral">{blade.serial}</td>

                      <td className="text-primary">{blade.creator}</td>
                      <td>{blade._count.bandhistorikk}</td>
                      <td className="text-primary">
                        <button
                          onClick={openHistorikkHandler}
                          className="btn btn-xs"
                        >
                          Åpne
                        </button>
                      </td>
                      <td className="text-primary">
                        <button className="btn btn-xs">Rediger</button>
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
              {searchIdResult.map((blade) => {
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
                          {blade.serial}
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
