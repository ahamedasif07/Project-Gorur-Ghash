"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";

const SweatshirtsC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Sweatshirts] = useState("Sweatshirts");
  const [filtaredProducts, setFiltaredProducts] = useState([]);
  const { data } = useDataContext(); // Assume this returns the data or null

  // Use useEffect to update state only when data changes
  useEffect(() => {
    if (data) {
      setAllProductsData(data);
    }
  }, [data]);

  useEffect(() => {
    if (allProductsData.length > 0) {
      const remaining = allProductsData.filter(
        (product) =>
          product.category.toLowerCase().trim() ===
          Sweatshirts.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, Sweatshirts]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <Section>
        <div className="flex md:flex-row flex-col gap-12 ">
          <div className="md:w-1/3 border-gray-800 border-r-2 md:my-[50px] my-[15px]">
            <div>
              <div className="flex gap-2 px-6">
                <input
                  className="border-2 py-2 w-full h-[50px] px-4 border-black"
                  placeholder="search"
                  type="search"
                />

                <button className="px-3 py-2 hover:text-white hover:bg-black h-[50px] transition-all duration-300 ease-in-out bg-transparent border-2 border-black">
                  Search
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-3xl px-6 md:mt-7 mt-4 font-semibold text-gray-600">
                Filter by price
              </h2>
            </div>
            <div className="flex items-center mt-2 px-6">
              <p className="h-[14px] rounded-full w-[14px] bg-[#4E4E4E]"></p>
              <p className="h-[4px] w-[200px] bg-[#4E4E4E]"></p>
              <p className="h-[14px] rounded-full w-[14px] bg-[#4E4E4E]"></p>
            </div>
            <div className="flex gap-7 items-center mt-2 px-6">
              <p className="bg-[#FBDD02] py-1 px-2 rounded-md">Filter</p>
              <p>price : $00 - $2500</p>
            </div>
          </div>
          {/* ----------products category cards------------- */}
          <div className="md:w-2/3 md:mt-[50px] px-6">
            <div className="pb-12">
              <p className="text-[15px] text-gray-700">
                Home \ men \ SweatshirtsC
              </p>
              <h2 className="font-semibold py-8 text-6xl text-gray-700">
                Sweatshirts
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
              {filtaredProducts.length > 0 ? (
                filtaredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SweatshirtsC;
