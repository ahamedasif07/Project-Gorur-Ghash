"use client";
import Image from "next/image";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, price, category } = product;

  return (
    <div>
      <div key={product.id}>
        <Image
          src={product.imageOne && product.imageOne}
          alt="image"
          width={300} // Set the width
          height={300} // Set the height
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
          <button className="bg-[#FBDD02] font-semibold hover:bg-black hover:text-white duration-300 transition-all ease-in-out rounded-lg  px-3 py-1">
            Select options
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
