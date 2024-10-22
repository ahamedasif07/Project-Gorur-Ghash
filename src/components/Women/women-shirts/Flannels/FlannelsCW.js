"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const FlannelsCW = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Flannels] = useState("women-Flannels");
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
          Flannels.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, Flannels]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Flannels - Women"
        filtaredProducts={filtaredProducts}
        // description=""
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default FlannelsCW;
