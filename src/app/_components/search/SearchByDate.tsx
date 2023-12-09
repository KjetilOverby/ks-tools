"use client";
import React, { useState } from "react";
import Link from "next/link";

import dateFormat from "dateformat";

export const SearchByDate = () => {
  const [byDate1, setByDate1] = useState(new Date().getDate());
  const [byDate2, setByDate2] = useState(new Date());

  console.log(byDate1);

  return (
    <>
      <Link
        href={{
          pathname: "/newtools",
          query: {
            date: dateFormat(byDate1, "yyyy-mm-dd"),
            date2: dateFormat(byDate2, "yyyy-mm-dd"),
          },
        }}
      >
        <div>SearchByDate</div>
      </Link>
    </>
  );
};
