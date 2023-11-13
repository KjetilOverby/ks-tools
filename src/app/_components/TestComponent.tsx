"use client";
import React, { useState } from "react";

const TestComponent = () => {
  const [test, setTest] = useState("");
  console.log(test);

  return (
    <div>
      TestComponent
      <button onClick={() => setTest("test")}>Click</button>
    </div>
  );
};

export default TestComponent;
