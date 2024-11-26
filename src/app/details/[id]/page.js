"use client";
import ProductDetails from "@/components/productDetails/ProductDetails";

import React from "react";

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
