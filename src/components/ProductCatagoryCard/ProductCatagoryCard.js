import Image from "next/image";
import React from "react";

const ProductCatagoryCard = ({ productCatagory }) => {
  const { category, products, image } = productCatagory;

  // Make sure the image URL is correctly formatted
  //   const validImageUrl = image.startsWith("https://") ? image : "";

  return (
    <div>
      <div>
        {/* Ensure a valid image URL is passed */}
        <Image width={300} height={300} src={image} alt="image" />

        <div>
          <button>{category}</button>
          <p>{products}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCatagoryCard;
