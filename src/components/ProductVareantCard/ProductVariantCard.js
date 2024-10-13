"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Catagories from "../Home/Catagories";

const ProductVariantCard = ({ ProductVariant, rootPath }) => {
  const { category, products, image } = ProductVariant;

  // Ensure `category` and `Path` are valid strings and handle dynamic pathing safely

  const formattedCategory = category.trim().toLowerCase();
  return (
    <Link href={`${rootPath}/${formattedCategory}`}>
      <div className="relative">
        <div className="flex flex-col items-center">
          <Image width={300} height={300} src={image} alt={category} />
          <div className="px-4 absolute bottom-2">
            <div className="items-center bg-transparent opacity-80 hover:bg-slate-100 text-center px-5 bg-white">
              <button className="text-[13px] uppercase font-semibold">
                {category}
              </button>
              <p className="text-gray-500 text-[12px]">
                {products} <span>Products</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductVariantCard;
