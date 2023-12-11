"use client";

import React from "react";

interface historikkInputProps {
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const HistorikkInput = ({ setOpenInput }: historikkInputProps) => {
  return (
    <div className="absolute z-40">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Legg til data</h2>
          <div>
            <p>Sag</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
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
            <p>Innpostningsdato</p>
            <input
              type="date"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Klokka</p>
            <input
              type="time"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Timer</p>
            <input
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Temperatur</p>
            <input
              type="number"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Rutine</p>
            <input
              type="text"
              className="input input-bordered input-xs w-full max-w-xs bg-white"
            />
          </div>
          <div>
            <p>Feilkode</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
              <option value="Ingen anmerkning">Ingen anmerkning</option>
              <option value="Randigt">Randigt</option>
              <option value="Vingler">vingler</option>
              <option value="Vandrer på hjul">Vandrer på hjul</option>
              <option value="Sprekk">Sprekk</option>
              <option value="Tannbrudd">Tannbrudd</option>
              <option value="Sponfrysning">Sponfrysning</option>
              <option value="Skarv">Skarv</option>
              <option value="River">River</option>
              <option value="Ytre faktorer">Ytre faktorer</option>
              <option value="Handhavane">Handhavande</option>
              <option value="Reklamasjon">Reklamasjon</option>
              <option value="Ampere">Ampere</option>
              <option value="Havari">Havari</option>
              <option value="Skrotet band">Skrotet band</option>
            </select>
          </div>
          <div>
            <p>Handling</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
              <option value="">Velg</option>
              <option value="Slip">Slip</option>
              <option value="0">0</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <p>Sideklaring</p>
            <select className="select select-bordered select-xs w-full max-w-xs bg-white">
              <option value="">Velg</option>
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
      </div>
    </div>
  );
};

export default HistorikkInput;
