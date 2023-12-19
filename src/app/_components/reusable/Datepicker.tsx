// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import Datepicker, {
  DateRangeType,
  DateType,
} from "react-tailwindcss-datepicker";
import Link from "next/link";

interface DateProps {
  link: string;
  searchSerial: string;
  setSearchSerial: Dispatch<SetStateAction<string>>;
  idSearch: boolean;
}

const DatepickerComponent: React.FC<DateProps> = ({
  link,
  setSearchSerial,
  searchSerial,
  idSearch,
}) => {
  const [value, setValue] = useState({
    startDate: "2023-12-01",
    endDate: "2033-12-01",
  });

  const handleValueChange = (newValue: DateType | DateRangeType) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col rounded-2xl bg-accent p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Datepicker
          placeholder={"Klikk her for å velge dato"}
          primaryColor={"orange"}
          showShortcuts={true}
          showFooter={true}
          startWeekOn="mon"
          configs={{
            shortcuts: {
              today: "I DAG",
              yesterday: "I GÅR",
              past: (period) => `${period} SISTE DAGER`,
              currentMonth: "DENNE MÅNEDEN",
              pastMonth: "SIST MÅNED",
            },
            footer: {
              cancel: "AVBRYT",
              apply: "PERIODE",
            },
          }}
          value={value}
          onChange={handleValueChange}
        />
        {idSearch && (
          <>
            <label>Id nummer</label>
            <input
              onChange={(e) => setSearchSerial(e.currentTarget.value)}
              type="text"
              placeholder="ID nummer"
              className="input input-bordered input-xs mt-1 w-full max-w-xs text-xs"
            />
          </>
        )}
        <Link
          href={{
            pathname: `${link}`,
            query: {
              date: `${value.endDate}T23:59:59.000Z`,
              date2: `${value.startDate}T00:00:00.000Z`,
              serial: searchSerial,
            },
          }}
        >
          <button className="btn btn-xs mt-5 bg-primary">Søk</button>
        </Link>
      </form>
    </div>
  );
};

export default DatepickerComponent;
