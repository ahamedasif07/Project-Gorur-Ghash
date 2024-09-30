import Image from "next/image";
import React from "react";

const ProductCatagoryCard = ({ productCatagory }) => {
  const { category, products, image } = productCatagory;

  // Make sure the image URL is correctly formatted
  //   const validImageUrl = image.startsWith("https://") ? image : "";

  return (
    <div className="relative">
      <div className="  flex flex-col items-center">
        <Image width={300} height={300} src={image} alt="image" />
        <div className="px-4 absolute bottom-2 ">
          <div className="border-2  items-center bg-transparent opacity-80 hover:bg-slate-100 text-center border-black px-1 bg-white">
            <button className="text-[13px]  font-semibold">{category}</button>
            <p className="text-gray-500 text-[12px]">
              {products} <span>Products</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatagoryCard;
