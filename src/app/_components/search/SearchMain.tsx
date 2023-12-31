"use client";
import React, { useState } from "react";
import dateFormat from "dateformat";
import { DeleteComponent } from "./DeleteComponent";
import { RestoreComponent } from "./RestoreComponent";
import BandDetails from "./BandDetails";
import DatepickerComponent from "../reusable/Datepicker";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import ActivateBlade from "./ActivateBlade";
import { RiDeleteBinLine } from "react-icons/ri";

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
  active: boolean;
  deleteReason: string;
  note: string;
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
    activePost: boolean;
  }[];
}

interface BladeProps {
  sawblades: Blade[];
}

const SearchMain = ({ sawblades }: BladeProps) => {
  const [showDeletedBlades, setShowDeletedBlades] = useState(false);

  const [openBandhistorikkData, setOpenBandhistorikkData] = useState(false);

  const [searchSerial, setSearchSerial] = useState<string>("");

  const [openStatus, setOpenStatus] = useState<string | null>(null);
  const [openHistorikk, setopenHistorikk] = useState<string | null>(null);
  const [wasteReasonInput, setWasteReasonInput] = useState("");
  const [openDeleteID, setOpenDeleteID] = useState<string | null>(null);
  const router = useRouter();

  const deleteHandler = (postID: string) => {
    setOpenDeleteID(postID);
  };

  const createPost = api.bandhistorikk.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpenStatus(null);
    },
  });

  const updateStatus = api.sawblades.updateStatus.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const updatePost = api.bandhistorikk.update.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  console.log(sawblades);

  return (
    <div className="m-5">
      <div>
        <div className="ml-5 rounded-xl py-5">
          <div className="flex ">
            <DatepickerComponent
              idSearch={true}
              searchSerial={searchSerial}
              link="/search"
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
              <th className="text-sm text-accent">Aktiv</th>

              <th className="text-sm text-accent">ID</th>

              <th className="text-sm text-accent">Opprettet av</th>
              <th className="text-sm text-accent">Bandhistorikk</th>
              <th className="text-sm text-accent"></th>
            </tr>
          </thead>
          <tbody>
            {sawblades.map((blade) => {
              const statusHandler = (postId: string) => {
                setOpenStatus(postId);
              };

              const handleCloseModal = () => {
                setOpenStatus(null);
              };

              const historikkHandler = (historikkId: string | null) => {
                setopenHistorikk(historikkId);
              };

              const handleCloseHistorikk = () => {
                setTimeout(() => {
                  setopenHistorikk(null);
                }, 100);
              };

              const updateStatusHandler = () => {
                void updateStatus.mutate({
                  id: blade.id,
                  active: true,
                });
              };

            

              const deactivateStatusHandler = () => {
                void updateStatus.mutate({
                  id: blade.id,
                  active: false,
                });
              };

              return (
                <>
                  {!blade.deleted && (
                    <tr key={blade.id} className="bg-accent">
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
                      <th>
                        <div>
                          <div
                            onClick={() => statusHandler(blade.id)}
                            className={`h-3 w-3 rounded-full ${
                              blade.active ? "bg-emerald-400" : "bg-primary"
                            }`}
                          >
                            {openStatus === blade.id && !blade.active && (
                              <ActivateBlade
                                blade={blade}
                                createPost={createPost}
                                updateStatusHandler={updateStatusHandler}
                                handleCloseModal={handleCloseModal}
                              />
                            )}
                          </div>
                        </div>
                      </th>
                      <td className="font-bold text-neutral">
                        {blade.IdNummer}{" "}
                        {blade.note && (
                          <span className="text-xs font-normal text-orange-200">
                            ({blade.note})
                          </span>
                        )}
                      </td>
                      <td className="flex items-center">
                        <div className="mr-2 h-5 w-5">
                          <img
                            className="rounded-full"
                            src={blade.creatorImg}
                            alt=""
                          />
                        </div>
                        {blade.creator}
                      </td>
                      <td>{blade._count.bandhistorikk}</td>
                      <td>
                        <button onClick={() => historikkHandler(blade.id)}>
                          Historikk
                        </button>
                      </td>
                      <td className="relative">
                        <RiDeleteBinLine
                          style={{
                            color: "indianred",
                            fontSize: "1rem",
                          }}
                          onClick={() => deleteHandler(blade.id)}
                        />
                        {openDeleteID === blade.id && (
                          <div className="card absolute right-24 w-96 bg-primary text-primary-content">
                            <div className="card-body">
                              <h2 className="card-title">
                                Slett blad: {blade.IdNummer}
                              </h2>
                              <p>Velg årsaken til vrak?</p>
                              <select
                                onChange={(e) =>
                                  setWasteReasonInput(e.currentTarget.value)
                                }
                                className="select select-bordered select-xs w-full max-w-xs"
                              >
                                <option disabled selected>
                                  Velg
                                </option>
                                <option value="Normal slitasje">
                                  Normal slitasje
                                </option>
                                <option value="Ikjøring">Ikjøring</option>
                                <option className="Røk av">Røk av</option>
                                <option className="Sprekk">Sprekk</option>
                              </select>
                              <div className="card-actions justify-end">
                                <button
                                  onClick={() => setOpenDeleteID(null)}
                                  className="btn btn-xs"
                                >
                                  Avbryt
                                </button>
                              </div>

                              <th className="text-red-400">
                                <DeleteComponent
                                  wasteReasonInput={wasteReasonInput}
                                  id={blade.id}
                                />
                              </th>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                  {openHistorikk === blade.id && (
                    <div className=" absolute top-0 h-screen w-full rounded-2xl  bg-gradient-to-r from-base-100 via-gray-500 to-gray-600 p-5">
                      <div className="flex">
                        <div>
                          <h1 className=" text-lg text-orange-400">
                            Historikk
                          </h1>
                          <h1 className="text-2xl text-orange-600">
                            ID: {blade.IdNummer}
                          </h1>
                          <p>
                            Type: {blade.type} {blade.side}
                          </p>
                        </div>
                        <div>
                          <table className="table table-xs ml-5 w-full bg-accent">
                            <thead>
                              <tr>
                                <th>Kode</th>
                                <th>Beskrivelse</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>BFS423</th>
                                <th>EKSTRA RETTING BÅND</th>
                              </tr>
                              <tr>
                                <th>BFS426</th>
                                <th>BUNNSTUK BÅND</th>
                              </tr>
                              <tr>
                                <th>BFS427</th>
                                <th>BRETTING-STREKKING-SLIPING METER</th>
                              </tr>
                              <tr>
                                <th>BFS429</th>
                                <th>
                                  STELL.FERDIG SLIP OG RETT f.o.m 100mm bredde
                                  TANN
                                </th>
                              </tr>
                              <tr>
                                <th>BSF438</th>
                                <th>REP.SVEIST STELLIT TANN</th>
                              </tr>
                              <tr>
                                <th>BFS442</th>
                                <th>SLIPESERVICE AV REP.TENNER METER</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <BandDetails
                        bandhistorikkData={blade}
                        setOpenBandhistorikkData={setOpenBandhistorikkData}
                        blade={blade}
                        updatePost={updatePost}
                        updateStatusHandler={updateStatusHandler}
                        handleCloseModal={handleCloseModal}
                      />

                      <button
                        onClick={handleCloseHistorikk}
                        className="btn btn-primary btn-xs mt-5"
                      >
                        Lukk historikk
                      </button>
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
                <th className="text-sm text-accent">Årsak</th>
                <th className="text-sm text-accent">Slettet av</th>
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
                          {blade.IdNummer}{" "}
                          {blade.note && (
                            <span className="text-xs font-normal text-orange-200">
                              ({blade.note})
                            </span>
                          )}
                        </td>

                        <td className="flex items-center">
                          <div className="mr-2 h-5 w-5">
                            <img
                              className="rounded-full"
                              src={blade.creatorImg}
                              alt=""
                            />
                          </div>
                          {blade.creator}
                        </td>
                        <td>{blade.deleteReason}</td>
                        <td className="flex items-center">
                          <div className="mr-2 h-5 w-5">
                            <img
                              className="rounded-full"
                              src={blade.deleterImg}
                              alt=""
                            />
                          </div>
                          {blade.deleter}
                        </td>
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
