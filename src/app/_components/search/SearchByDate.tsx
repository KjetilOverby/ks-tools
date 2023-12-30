"use client";
// SearchByDate.tsx
import React, { useState } from "react";
import DatepickerComponent from "../reusable/Datepicker";

export const SearchByDate: React.FC = () => {
  const [searchSerial, setSearchSerial] = useState<string>("");
  return (
    <div className="ml-5">
      <p>Søk </p>
      <DatepickerComponent
        searchSerial={searchSerial}
        link="/newtools"
        setSearchSerial={setSearchSerial}
        idSearch={true}
      />
    </div>
  );
};
