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
          product.category.toLowerCase().trim() ===
          inputValue.toLowerCase().trim()
      );
      setSearchItems(searchCategory);
    } else {
      setSearchItems([]); // Clear the list if no data or inputValue
    }
  }, [inputValue, data]);

  return (
    <div>
      <div className="grid grid-cols-4">
        {searchItems.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ScarchFildeC;
