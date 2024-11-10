"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const FilterByCategory = ({ category, CategoryTitle, description }) => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [productCategory] = useState(`${category}`);
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
          productCategory.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, productCategory]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category={`${CategoryTitle}`}
        filtaredProducts={filtaredProducts}
        description={`${description}`}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default FilterByCategory;
