"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const FlannelsC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Flannels] = useState("Flannels");
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
        category="Flannels"
        description="How do our weather forecasters predict the weather in Bangladesh nowadays? It was supposed to get warmer, but wait, it’s chilly again. Mother Nature showed signs of heavy rainfall, but the skin piercing Sun decided otherwise. Hence, to honor these confused professionals, the Ghash presents its collection of Flannel shirts!

Ideal for a cool Fall day and some Spring warmth, we have Winter Flannels. While the Summer Flannels are made with super breathable and light fabric that is totally not too warm and perfect to cope with Global Warming."
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default FlannelsC;
