"use client";
import React from "react";
import Section from "../Section/Section";
import ProductCatagoryCard from "../ProductCatagoryCard/ProductCatagoryCard";

const CatagoryContainer = ({ productCategories }) => {
  return (
    <div>
      <Section>
        <div className="flex md:flex-row flex-col gap-8 ">
          <div className="md:w-1/3 flex gap-2 border-r-2  border-gray-600 mt-[15px] mx-auto md:mt-[50px]  ">
            <input
              className="border-2 py-2 h-[50px] px-4  border-black"
              placeholder="search"
              type="search"
            />
            <button className="px-3 py-2 hover:text-white hover:bg-black  h-[50px] transition-all duration-300 ease-in-out bg-transparent border-2 border-black">
              Search
            </button>
          </div>
          <div className="md:w-2/3 md:mt-[50px]  px-10 ">
            {productCategories.map((productCatagory, index) => (
              <ProductCatagoryCard
                key={index}
                productCatagory={productCatagory}
              ></ProductCatagoryCard>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CatagoryContainer;
