"use client";
// SearchByDate.tsx
import React, { useState } from "react";
import DatePicker2 from "../reusable/Datepicker2";
import DatepickerComponent from "../reusable/Datepicker";

export const SearchByDate: React.FC = () => {
  const [searchSerial, setSearchSerial] = useState<string>("");
  return (
    <div className="ml-5">
      <p>Søk på egendefinert periode</p>
      <DatepickerComponent
        searchSerial={searchSerial}
        link="/newtools"
        setSearchSerial={setSearchSerial}
        idSearch={true}
      />
      {/*  <DatePicker2
        link="/newtools"
        setSearchSerial={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
        searchSerial={""}
      /> */}
    </div>
  );
};
