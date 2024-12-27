/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "../ScarchContex/ScarchContex";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";

const ScarchFildeC = () => {
  const { inputValue } = useSearchContext();
  console.log(inputValue);
  const { data } = useDataContext();
  const [searchItems, setSearchItems] = useState([]);

  console.log(data);
  console.log(inputValue);

  useEffect(() => {
    if (data && inputValue) {
      const searchCategory = data.filter(
        (product) =>
          product.categoryType &&
          product.categoryType.toLowerCase().trim() ===
            inputValue.toLowerCase().trim()
      );
      setSearchItems(searchCategory);
    } else {
      setSearchItems([]); // Clear the list if no data or inputValue
    }
  }, [inputValue, data]);

  return (
    <div>
      <h2 className="text-2xl font-bold md:py-7 py-4 md:text-5xl text-center">
        Scarch Result : {inputValue}
      </h2>
      <div className="max-w-screen-lg px-4 mx-auto">
        <div className="grid justify-center  md:grid-cols-4  gap-6 grid-cols-2">
          {searchItems.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScarchFildeC;
