"use client";
import React, { useState } from "react";
import DatePicker2 from "../reusable/Datepicker2";

interface statistikkProps {
  historikkData: {
    feilkode: string;
    sagNr: string;
  };
}

export const StatistikkMain = ({ historikkData }: statistikkProps) => {
  const [searchSerial, setSearchSerial] = useState<string>("");

  //   console.log(historikkData);

  // const feilkoder = [
  //   "Ingen anmerkning",
  //   "Bølger",
  //   "Vandrer på hjul",
  //   "Sprekk",
  //   "Tannbrudd",
  //   "Sponpåliming",
  //   "Sløv",
  //   "River",
  //   "Ytre faktorer",
  //   "Reklamasjon",
  //   "Havari",
  // ];

  console.log(
    historikkData.filter(
      (item) => item.sagNr === "4" && item.feilkode === "Ingen anmerkning",
    ),
  );

  //   const br = historikkData.map((item: statistikkProps) =>
  //     item.map((item) => item.feilkode === "Sprekk" && item.sagNr === "4"),
  //   );

  //   const trueCount = []
  //     .concat(...br)
  //     .reduce((count, value) => count + (value === true ? 1 : 0), 0);

  //   console.log(br);
  //   console.log(trueCount);

  return (
    <div>
      <h1>Statistikk</h1>
      <DatePicker2
        link="/statistikk"
        searchSerial={searchSerial}
        setSearchSerial={setSearchSerial}
      />
    </div>
  );
};
// "use client";
// import React, { useState } from "react";
// import DatePicker2 from "../reusable/Datepicker2";

// interface statistikkProps {
//   historikkData: {
//     feilkode: string;
//     sagNr: string;
//   };
// }

// export const StatistikkMain = ({ historikkData }: statistikkProps) => {
//   const [searchSerial, setSearchSerial] = useState<string>("");

//   const br = historikkData.map((item: statistikkProps) =>
//     item.map((item) => item.feilkode === "Sprekk" && item.sagNr === "4"),
//   );

//   const trueCount = []
//     .concat(...br)
//     .reduce((count, value) => count + (value === true ? 1 : 0), 0);

//   console.log(br);
//   console.log(trueCount);

//   return (
//     <div>
//       <h1>Statistikk</h1>
//       <DatePicker2
//         link="/statistikk"
//         searchSerial={searchSerial}
//         setSearchSerial={setSearchSerial}
//       />
//     </div>
//   );
// };

// const feilkoder = [
//   "Ingen anmerkning",
//   "Bølger",
//   "Vandrer på hjul",
//   "Sprekk",
//   "Tannbrudd",
//   "Sponpåliming",
//   "Sløv",
//   "River",
//   "Ytre faktorer",
//   "Reklamasjon",
//   "Havari",
// ];

// const br = historikkData.map((item) =>
//     item.map((item) => item.feilkode === "Havari" && item.sagNr === "2"),
//   );

//   const trueCount = []
//     .concat(...br)
//     .reduce((count, value) => count + (value === true ? 1 : 0), 0);

//   console.log(br);
//   console.log(trueCount);
