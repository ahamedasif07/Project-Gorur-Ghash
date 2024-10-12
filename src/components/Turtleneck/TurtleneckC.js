"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const TurtleneckC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Turtleneck] = useState("Turtleneck");
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
          Turtleneck.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, Turtleneck]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Hoodie Blanket"
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default TurtleneckC;
