"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const VShirts = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [vshirts] = useState("V-Shirts");
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
          product.category.toLowerCase().trim() === vshirts.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, vshirts]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="V-Shirts"
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default VShirts;
