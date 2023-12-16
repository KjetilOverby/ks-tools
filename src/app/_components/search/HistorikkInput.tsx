"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface historikkInputProps {
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
  bandId: string;
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistorikkInput = ({ setOpenInput, bandId }: historikkInputProps) => {
  const router = useRouter();
  const createPost = api.bandhistorikk.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpenInput(false);
    },
  });

  const [historikkData, setHistorikkData] = useState({
    sagNr: "4",
    datoInn: new Date(),
    klInn: new Date(),
    datoUt: new Date(),
    klUt: new Date(),
    sagtid: 0,
    feilkode: "Ingen anmerkning",
    handling: "Ingen handling",
    sideklaring: 0,
    creator: "",
    bladedata: "",
    anmSag: "",
    antTimer: 0,
    temperatur: 0,
    sgSag: "",
    sgKS: "",
  });
  return (
    <div className="absolute z-40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({
            sagNr: historikkData.sagNr,
            datoInn: historikkData.datoInn,
            klInn: historikkData.klInn,
            datoUt: historikkData.datoUt,
            klUt: historikkData.klUt,
            sagtid: historikkData.sagtid,
            feilkode: historikkData.feilkode,
            handling: historikkData.handling,
            sideklaring: historikkData.sideklaring,
            createdById: "",
            bladedata: bandId,
            anmSag: historikkData.anmSag,
            anmKS: "",
            antTimer: historikkData.antTimer,
            datoSrv: new Date(),
            temperatur: historikkData.temperatur,
            userId: "",
            sgSag: "",
            sgKS: "",
            createdBy: "",
          });
        }}
        className="card w-96 bg-slate-500 text-neutral-content"
      >
        <div className="card-body">
          <h2 className="card-title">Legg til data</h2>
          <div>
            <p>Sag nr:</p>
            <select
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  sagNr: e.currentTarget.value,
                })
              }
              className="select select-bordered select-xs w-full max-w-xs bg-white"
            >
              <option value="">Velg</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div>
            <p>Innpostningsdato:</p>
            <input
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  datoInn: new Date(e.currentTarget.value),
                })
              }
              type="date"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Klokkeslett inn:</p>
            <input
              onChange={(e) => {
                const [hours, minutes] = e.currentTarget.value.split(":");
                const updatedDate = new Date(historikkData.klInn);
                updatedDate.setHours(Number(hours));
                updatedDate.setMinutes(Number(minutes));
                updatedDate.setSeconds(0); // Optionally, set seconds to 0
                setHistorikkData({
                  ...historikkData,
                  klInn: updatedDate,
                });
              }}
              type="time"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Utpostningsdato:</p>
            <input
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  datoUt: new Date(e.currentTarget.value),
                })
              }
              type="date"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Klokkeslett ut:</p>
            <input
              onChange={(e) => {
                const [hours, minutes] = e.currentTarget.value.split(":");
                const updatedDate = new Date(historikkData.klInn);
                updatedDate.setHours(Number(hours));
                updatedDate.setMinutes(Number(minutes));
                updatedDate.setSeconds(0); // Optionally, set seconds to 0
                setHistorikkData({
                  ...historikkData,
                  klUt: updatedDate,
                });
              }}
              type="time"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Antall timer:</p>
            <input
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  sagtid: Number(e.currentTarget.value),
                })
              }
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Temperatur:</p>
            <input
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  temperatur: Number(e.currentTarget.value),
                })
              }
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Ampere:</p>
            <input
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Anm sag:</p>
            <input
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  anmSag: e.currentTarget.value,
                })
              }
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Feilkode:</p>
            <select
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  feilkode: e.currentTarget.value,
                })
              }
              className="select select-bordered select-xs w-full max-w-xs bg-white"
            >
              <option value="Ingen anmerkning">Ingen anmerkning</option>
              <option value="Bølger">Bølger</option>
              <option value="Vandrer på hjul">Vandrer på hjul</option>
              <option value="Sprekk">Sprekk</option>
              <option value="Tannbrudd">Tannbrudd</option>
              <option value="Sponpåliming">Sponpåliming</option>
              <option value="Sløv">Sløv</option>
              <option value="River">River</option>
              <option value="Ytre faktorer">Ytre faktorer</option>
              <option value="Reklamasjon">Reklamasjon</option>
              <option value="Havari">Havari</option>
            </select>
          </div>

          <div>
            <p>Sideklaring:</p>
            <select
              onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  sideklaring: Number(e.currentTarget.value),
                })
              }
              className="select select-bordered select-xs w-full max-w-xs bg-white"
            >
              <option value={0}>Velg</option>
              <option value={0.4}>0.4</option>
              <option value={0.45}>0.45</option>
              <option value={0.5}>0.5</option>
              <option value={0.55}>0.55</option>
              <option value={0.6}>0.6</option>
              <option value={0.65}>0.65</option>
              <option value={0.7}>0.7</option>
            </select>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary btn-xs">Lagre</button>
            <button onClick={() => setOpenInput(false)} className="btn btn-xs">
              Avbryt
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HistorikkInput;
