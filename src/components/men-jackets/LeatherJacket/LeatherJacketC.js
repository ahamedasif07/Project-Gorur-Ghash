"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const LeatherJacketsC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [LeatherJacket] = useState("Leather-Jacket");
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
          LeatherJacket.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, LeatherJacket]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Leather Jacket"
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default LeatherJacketsC;
