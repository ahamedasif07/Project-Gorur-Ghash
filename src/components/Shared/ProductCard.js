"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, price, category, imageOne, imageTwo } = product;
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        className="h-[370px] flex flex-col transition-all duration-300 ease-in-out justify-between"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        key={product.id}
      >
        <Image
          className="w-[300px] h-[180px] transition-opacity duration-500 ease-in-out" // Added transition effect
          src={isHover ? imageTwo : imageOne}
          alt="image"
          width={300}
          height={180}
        />

        <div className="px-3 py-1">
          <h2 className="font-extralight text-gray-600 py-1">{name}</h2>
          <h3 className="font-extralight text-gray-600 py-1"> {category}</h3>
          <h2 className="flex items-center gap-1 py-1">
            <span>
              <FaBangladeshiTakaSign />
            </span>
            {price}.00
          </h2>
          <button className="bg-[#FBDD02] font-semibold hover:bg-black hover:text-white duration-300 transition-all ease-in-out rounded-lg px-3 py-1">
            Select options
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
