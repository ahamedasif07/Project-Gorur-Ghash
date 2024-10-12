"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const HoodieBlanketC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [HoodieBlanket] = useState("Hoodie-Blanket");
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
          HoodieBlanket.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, HoodieBlanket]);

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

export default HoodieBlanketC;
