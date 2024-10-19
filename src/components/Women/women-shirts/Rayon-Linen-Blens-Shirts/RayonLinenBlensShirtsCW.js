"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const RayonLinenBlensShirtsCW = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [womenRayonLinenBlendShirts] = useState(
    "women-Rayon-Linen-Blend-Shirts"
  );
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
          womenRayonLinenBlendShirts.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, womenRayonLinenBlendShirts]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Rayon Linen Blend Shirts - Women"
        filtaredProducts={filtaredProducts}
        // description=""
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default RayonLinenBlensShirtsCW;
