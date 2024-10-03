"use client";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../Shared/DataFetching/DataProvider";
import ProductCard from "../Shared/ProductCard";
import Section from "../Section/Section";
import DisplayCatagoryProducts from "../Shared/DisplayCatagoryProducts";

const SweatshirtsC = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Sweatshirts] = useState("Sweatshirts");
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
          Sweatshirts.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, Sweatshirts]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Sweetshirt"
        description="Introducing Men’s Sweatshirts by Ghash, the perfect addition to your casual wardrobe! Made with high-quality, soft, and breathable fabric, these sweatshirts are designed to keep you warm and cozy on chilly days."
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default SweatshirtsC;
