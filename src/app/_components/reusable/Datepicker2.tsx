"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface DateProps {
  link: string;
  setUpdateSearch: React.Dispatch<React.SetStateAction<boolean>>;
  updateSearch: boolean;
}

const DatePicker2 = ({ link, setUpdateSearch, updateSearch }: DateProps) => {
  const [value, setValue] = useState("2023-12-11");
  const [value2, setValue2] = useState("2023-12-11");
  const [searchSerial, setSearchSerial] = useState("");

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
        <div>
          <form onSubmit={(e) => setSearchSerial(e.currentTarget.value)}>
            <input
              onChange={(e) => setSearchSerial(e.currentTarget.value)}
              type="text"
              placeholder="ID nummer"
              className="input input-bordered input-xs mt-5 w-full max-w-xs text-xs"
            />

            <Link
              href={{
                pathname: `${link}`,
                query: {
                  date: `${value}T23:59:59.000Z`,
                  date2: `${value2}T00:00:00.000Z`,
                  serial: searchSerial,
                },
              }}
            >
              <button
                onClick={() => setUpdateSearch(!updateSearch)}
                className="btn btn-xs mt-5 bg-primary"
              >
                Hent data
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DatePicker2;
