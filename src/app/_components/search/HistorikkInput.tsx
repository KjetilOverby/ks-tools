"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface historikkInputProps {
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
  bandId: string;
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistorikkInput = ({
  setOpenInput,
  bandId,
  setOpenBandhistorikkData,
}: historikkInputProps) => {
  const router = useRouter();
  const createPost = api.bandhistorikk.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpenInput(false);
      setOpenBandhistorikkData(false);
    },
  });

  const [historikkData, setHistorikkData] = useState({
    sagNr: "4",
    datoInn: new Date(),
    klInn: new Date(),
    datoUt: new Date(),
    klUt: new Date(),
    sagtid: 0,
    feilkode: "feil",
    handling: "Slipp",
    sideklaring: 0.45,
    creator: "",
    bladedata: "",
    anmSag: "",
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
            sideklaring: 0,
            createdById: "",
            bladedata: bandId,
            anmSag: historikkData.anmSag,
            anmKS: "",
            antTimer: 0,
            hv: "",
            datoSrv: new Date(),
          });
        }}
        className="card w-96 bg-neutral text-neutral-content"
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
            <p>Klokkeslett:</p>
            <input
              type="time"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>antall timer:</p>
            <input
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Temperatur:</p>
            <input
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Rutine:</p>
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
              <option value="Ampere">Ampere</option>
              <option value="Havari">Havari</option>
              <option value="Røk av">Røk av</option>
            </select>
          </div>

          <div>
            <p>Sideklaring:</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
              <option value="">Velg</option>
              <option value="0.35">0.35</option>
              <option value="0.4">0.4</option>
              <option value="0.45">0.45</option>
              <option value="0.5">0.5</option>
              <option value="0.55">0.55</option>
              <option value="0.6">0.6</option>
              <option value="0.65">0.65</option>
              <option value="0.7">0.7</option>
              <option value="0.75">0.75</option>
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
