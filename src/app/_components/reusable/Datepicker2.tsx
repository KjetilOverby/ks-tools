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
    <div>
      <div>
        <input
          className="mr-5"
          onChange={(e) => setValue2(e.currentTarget.value)}
          type="date"
        />
        <input onChange={(e) => setValue(e.currentTarget.value)} type="date" />
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
        <button className="btn mt-5 bg-primary">Søk på dato</button>
      </Link>
    </div>
  );
};

export default DatePicker2;
