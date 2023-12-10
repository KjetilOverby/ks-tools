"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DatepickerComponentProps {
  setByDate1: React.Dispatch<React.SetStateAction<string>>;
}

const DatepickerComponent: React.FC<DatepickerComponentProps> = ({
  setByDate1,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: React.SetStateAction<string>) => {
    setValue(newValue);
    setByDate1(newValue);
  };

  return (
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
  );
};

export default DatepickerComponent;
