"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

interface historikkInputProps {
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
  bandId: string;
  setOpenBandhistorikkData: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistorikkInputKS = ({
  setOpenInput,
  bandId,
  setOpenBandhistorikkData,
}: historikkInputProps) => {
  const router = useRouter();
  const updatePost = api.bandhistorikk.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpenInput(false);
      setOpenBandhistorikkData(false);
    },
  });

  return (
    <div className="absolute z-40">
      <form className="card w-96 bg-slate-500 text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Legg til data</h2>

          <div>
            <p>Anm K&S:</p>
            <input
              /*   onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  anmSag: e.currentTarget.value,
                })
              } */
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>

          <div>
            <p>Handling:</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
              <option value="Slip">Slip</option>
              <option value="Slip og sveis">Slip og Sveis</option>
              <option value="Sveising toppbrudd">Sveising toppbrudd</option>
            </select>
          </div>
          <div>
            <p>Sign:</p>
            <input
              /*   onChange={(e) =>
                setHistorikkData({
                  ...historikkData,
                  anmSag: e.currentTarget.value,
                })
              } */
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
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

export default HistorikkInputKS;
