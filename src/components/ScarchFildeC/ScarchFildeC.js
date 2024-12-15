"use client";
import React, { useEffect } from "react";
import { useSearchContext } from "../ScarchContex/ScarchContex";

const ScarchFildeC = () => {
  const { inputValue } = useSearchContext();
  console.log(inputValue);
  return (
    <div>
      <p>{inputValue || "No input yet"}</p>
    </div>
  );
};

export default ScarchFildeC;
