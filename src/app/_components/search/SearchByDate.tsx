"use client";
// SearchByDate.tsx
import React, { useState } from "react";
import DatePicker2 from "../reusable/Datepicker2";

export const SearchByDate: React.FC = () => {
  const [updateSearch, setUpdateSearch] = useState(false);
  return (
    <div className="ml-5">
      <p>Søk på egendefinert periode</p>
      {/* <DatepickerComponent /> */}
      <DatePicker2
        link="/newtools"
        setUpdateSearch={setUpdateSearch}
        updateSearch={updateSearch}
      />
    </div>
  );
};
