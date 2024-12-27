"use client";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "../ScarchContex/ScarchContex";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";

const ScarchFildeC = () => {
  const { inputValue } = useSearchContext();
  const { data } = useDataContext();
  const [searchItems, setSearchItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8); // Number of items to show initially and increment

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
    setItemsToShow(8); // Reset items to show when inputValue changes
  }, [inputValue, data]);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 8); // Show 8 more items
  };

  return (
    <div>
      <h2 className="text-2xl font-bold md:py-7 py-4 md:text-5xl text-center">
        Search Result : {inputValue}
      </h2>
      <div className="max-w-screen-lg px-4 mx-auto">
        <div className="grid justify-center md:grid-cols-4 gap-6 grid-cols-2">
          {searchItems.slice(0, itemsToShow).map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>

        <button
          className={`px-2 py-2 ${
            itemsToShow < searchItems.length ? "block" : "hidden"
          } flex mx-auto my-4 bg-yellow-500 text-white hover:bg-yellow-600 rounded-md`}
          onClick={handleShowMore}
        >
          Show More...
        </button>
      </div>
    </div>
  );
};

export default ScarchFildeC;
