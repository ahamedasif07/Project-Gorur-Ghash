import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCatagoryCard = ({ productCatagory, rootPath }) => {
  const { category, products, image } = productCatagory;

  // Make sure the image URL is correctly formatted
  //   const validImageUrl = image.startsWith("https://") ? image : "";

  return (
    <Link href={`${rootPath}/${category.trim().toLowerCase(category)}`}>
      <div className="relative">
        <div className="  flex flex-col items-center">
          <Image width={300} height={300} src={image} alt="image" />
          <div className="px-4 absolute bottom-2 ">
            <div className="  items-center bg-transparent opacity-80 hover:bg-slate-100 text-center  px-5 bg-white">
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

export default ProductCatagoryCard;
