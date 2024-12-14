"use client";
import React, { useEffect } from "react";
import { useSearchContext } from "../ScarchContex/ScarchContex";
const { inputValue } = useSearchContext;
console.log(inputValue);

const ScarchFildeC = () => {
  return (
    <div>
      <p>{inputValue || "No input yet"}</p>
    </div>
  );
};

export default ScarchFildeC;
