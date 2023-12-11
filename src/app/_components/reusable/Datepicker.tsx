// "use client";
// import React, { useState } from "react";
// import Datepicker, {
//   DateRangeType,
//   DateType,
// } from "react-tailwindcss-datepicker";
// import Link from "next/link";

// const DatepickerComponent: React.FC = ({}) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const [value, setValue] = useState({
//     startDate: "",
//     endDate: "",
//   });

//   const handleValueChange = (newValue: DateType | DateRangeType) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Datepicker
//         placeholder={"Klikk her for å velge dato"}
//         primaryColor={"orange"}
//         showShortcuts={true}
//         showFooter={true}
//         startWeekOn="mon"
//         configs={{
//           shortcuts: {
//             today: "I DAG",
//             yesterday: "I GÅR",
//             past: (period) => `${period} SISTE DAGER`,
//             currentMonth: "DENNE MÅNEDEN",
//             pastMonth: "SIST MÅNED",
//           },
//           footer: {
//             cancel: "AVBRYT",
//             apply: "PERIODE",
//           },
//         }}
//         value={value}
//         onChange={handleValueChange}
//       />
//       <Link
//         href={{
//           pathname: "/newtools",
//           query: {
//             date: `${value.endDate}T23:59:59.000Z`,
//             date2: `${value.startDate}T00:00:00.000Z`,
//           },
//         }}
//       >
//         <button className="btn mt-5 bg-primary">Søk på dato</button>
//       </Link>
//     </>
//   );
// };

// export default DatepickerComponent;

import React from "react";

export const Datepicker = () => {
  return <div>Datepicker</div>;
};
