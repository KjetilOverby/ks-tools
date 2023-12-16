"use client";

import { Dispatch, SetStateAction } from "react";

interface bladeDataProps {
  bladeData: {
    type: string;
    IdNummer: string;
    note: string;
    deleted: boolean;
    kunde: string;
  };
  setBladeData: Dispatch<
    SetStateAction<{
      type: string;
      IdNummer: string;
      deleted: boolean;
      note: string;
      kunde: string;
    }>
  >;
}

export const KundeSelector = ({ bladeData, setBladeData }: bladeDataProps) => {
  return (
    <div>
      <select
        onChange={(e) =>
          setBladeData({ ...bladeData, kunde: e.currentTarget.value })
        }
        className="select select-info select-sm bg-accent text-lg text-neutral"
      >
        <option disabled selected>
          Velg kunde
        </option>
        <option value="Moelven Østerdalsbruket">Moelven Østerdalsbruket</option>
        <option value="Moelven Soknabruket">Moelven Soknabruket</option>
        <option value="Moelven Mjøsbruket">Moelven Mjøsbruket</option>
      </select>
    </div>
  );
};