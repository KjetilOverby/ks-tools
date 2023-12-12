"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dateFormat from "dateformat";

interface DateProps {
  link: string;
  setUpdateSearch: React.Dispatch<React.SetStateAction<boolean>>;
  updateSearch: boolean;
}

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

/* const [value, setValue] = useState(`${year}-${month}-${day}`);
const [value2, setValue2] = useState(`${year}-${month}-${day}`); */

const DatePicker2 = ({ link, setUpdateSearch, updateSearch }: DateProps) => {
  const [value, setValue] = useState(`2033-12-01`);
  const [value2, setValue2] = useState(`2023-12-01`);
  const [searchSerial, setSearchSerial] = useState("");

  return (
    <div className="w-22 rounded-xl bg-accent p-5">
      <label htmlFor="">Filtrer data</label>
      <div className="mt-5 flex ">
        <div>
          <div className=" flex flex-col">
            <label htmlFor="">Startdato</label>
            <input
              onChange={(e) => setValue2(e.currentTarget.value)}
              type="date"
              className="input input-bordered input-xs  w-full max-w-xs text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Sluttdato</label>
            <input
              onChange={(e) => setValue(e.currentTarget.value)}
              type="date"
              className="input input-bordered input-xs  w-full max-w-xs text-xs"
            />
          </div>

          <div className="mt-5">
            <form onSubmit={(e) => setSearchSerial(e.currentTarget.value)}>
              <label>Id nummer</label>
              <input
                onChange={(e) => setSearchSerial(e.currentTarget.value)}
                type="text"
                placeholder="ID nummer"
                className="input input-bordered input-xs mt-1 w-full max-w-xs text-xs"
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
        <div>
          <p>{dateFormat(value2, "dddd dd.mmmm yyyy")}</p>
          <p>{dateFormat(value, "dddd dd.mmmm yyyy")}</p>
        </div>
      </div>
    </div>
  );
};

export default DatePicker2;
