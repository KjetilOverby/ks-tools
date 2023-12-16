"use client";
// SearchByDate.tsx
import React from "react";
import DatePicker2 from "../reusable/Datepicker2";

export const SearchByDate: React.FC = () => {
  return (
    <div className="ml-5">
      <p>Søk på egendefinert periode</p>
      {/* <DatepickerComponent /> */}
      <DatePicker2
        link="/newtools"
        setSearchSerial={function (value: React.SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        }}
        searchSerial={""}
      />
    </div>
  );
};
