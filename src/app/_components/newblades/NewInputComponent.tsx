"use client";

import { Dispatch, SetStateAction } from "react";

interface bladeDataProps {
  bladeData: {
    type: string;
    serial: string;
  };
  setBladeData: Dispatch<
    SetStateAction<{
      type: string;
      serial: string;
    }>
  >;
}

export const NewInputComponent = ({
  bladeData,
  setBladeData,
}: bladeDataProps) => {
  return (
    <div>
      <select
        onChange={(e) =>
          setBladeData({ ...bladeData, type: e.currentTarget.value })
        }
        className="select select-info w-full max-w-xs"
      >
        <option disabled selected>
          Velg bladtype
        </option>
        <option value="1600. 180 x 1,47 - STB45 – Lengde 9855mm. (Z219) høyre">
          1600. 180 x 1,47 - STB45 – Lengde 9855mm. (Z219) høyre
        </option>
        <option value="1600. 180 x 1,47 - STB45 – Lengde 9855mm. (Z219) venstre">
          1600. 180 x 1,47 - STB45 – Lengde 9855mm. (Z219) venstre
        </option>
        <option value="1670. 180 x 1,47 - T45 – Lengde 9855mm. (Z219) høyre">
          1670. 180 x 1,47 - T45 – Lengde 9855mm. (Z219) høyre
        </option>
        <option value="1670. 180 x 1,47 - T45 – Lengde 9855mm. (Z219) venstre">
          1670. 180 x 1,47 - T45 – Lengde 9855mm. (Z219) venstre
        </option>
        <option value="1600. 180 x 1,25 - STB40 – Lengde 9840mm. (Z246) høyre">
          1600. 180 x 1,25 - STB40 – Lengde 9840mm. (Z246) høyre
        </option>
        <option value="1600. 180 x 1,25 - STB40 – Lengde 9840mm. (Z246) venstre">
          1600. 180 x 1,25 - STB40 – Lengde 9840mm. (Z246) venstre
        </option>
        <option value="1450. 180 x 1,25 - STB40 - Lengde 9840mm. (Z246) høyre">
          1450. 180 x 1,25 - STB40 - Lengde 9840mm. (Z246) høyre
        </option>
        <option value="1450. 180 x 1,25 - STB40 - Lengde 9840mm. (Z246) venstre">
          1450. 180 x 1,25 - STB40 - Lengde 9840mm. (Z246) venstre
        </option>
        <option value="LX60. 180 x 1,47 – T45 – lengde 9855mm. (Z219) høyre">
          LX60. 180 x 1,47 – T45 – lengde 9855mm. (Z219) høyre
        </option>
        <option value="LX60. 180 x 1,47 – T45 – lengde 9855mm. (Z219) venstre">
          LX60. 180 x 1,47 – T45 – lengde 9855mm. (Z219) venstre
        </option>
      </select>
    </div>
  );
};
