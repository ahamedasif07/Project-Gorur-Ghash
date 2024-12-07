"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const DisplaySpecificByType = ({ category, CategoryTitle, description }) => {
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
      <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
        {filtaredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default DisplaySpecificByType;
