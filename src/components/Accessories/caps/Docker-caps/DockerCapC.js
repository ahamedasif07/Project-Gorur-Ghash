"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const DockerCapC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [DockerCap] = useState("docker-caps");
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
          DockerCap.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, DockerCap]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div className="">
      <DisplayCatagoryProducts
        category="Docker-Caps"
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default DockerCapC;
