"use client";
import React, { useState } from "react";
import Link from "next/link";

interface DateProps {
  link: string;
}

const DatePicker2 = ({ link }: DateProps) => {
  const [value, setValue] = useState("2023-12-11");
  const [value2, setValue2] = useState("2023-12-11");
  return (
    <div className="w-22 rounded-xl bg-accent p-5">
      <label htmlFor="">Filtrer med dato</label>
      <div className="mt-5 flex ">
        <div className=" flex flex-col">
          <label htmlFor="">Startdato</label>
          <input
            className="mr-5"
            onChange={(e) => setValue2(e.currentTarget.value)}
            type="date"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Sluttdato</label>
          <input
            onChange={(e) => setValue(e.currentTarget.value)}
            type="date"
          />
        </div>
      </div>
      <Link
        href={{
          pathname: `${link}`,
          query: {
            date: `${value}T23:59:59.000Z`,
            date2: `${value2}T00:00:00.000Z`,
          },
        }}
      >
        <button className="btn btn-xs mt-5 bg-primary">Hent data</button>
      </Link>
    </div>
  );
};

export default DatePicker2;
