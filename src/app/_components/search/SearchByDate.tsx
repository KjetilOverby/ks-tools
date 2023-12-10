"use client";
// SearchByDate.tsx
import React, { useState } from "react";
import Link from "next/link";
import DatepickerComponent from "../reusable/Datepicker";

export const SearchByDate: React.FC = () => {
  const [byDate1, setByDate1] = useState({
    endDate: "2023-12-10T23:59:59.000Z",
    startDate: "2023-12-10T23:59:59.000Z",
  });

  return (
    <div className="ml-5">
      <p>Søk på egendefinert periode</p>
      <DatepickerComponent setByDate1={setByDate1} byDate1={byDate1} />
      <Link
        href={{
          pathname: "/newtools",
          query: {
            date: `${byDate1.endDate}T23:59:59.000Z`,
            date2: `${byDate1.startDate}T00:00:00.000Z`,
          },
        }}
      >
        <button className="btn mt-5 bg-primary">Søk på dato</button>
      </Link>
    </div>
  );
};
