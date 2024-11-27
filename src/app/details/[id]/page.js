import ProductDetails from "@/components/productDetails/ProductDetails";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - product-Details",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Details = ({ params }) => {
  console.log(params);
  const { id } = params;
  return (
    <div>
      <div>
        <ProductDetails id={id}></ProductDetails>
      </div>
    </div>
  );
};

export default Details;
