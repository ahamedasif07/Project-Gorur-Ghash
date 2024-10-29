"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const FormalPantsCW = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [womenFormal] = useState("women-formal-pants");
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
          womenFormal.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, womenFormal]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Formal Pants"
        filtaredProducts={filtaredProducts}
        description="Introducing Women’s Sweatshirts by Ghash, the perfect addition to your casual wardrobe! Made with high-quality, soft, and breathable fabric, these sweatshirts are designed to keep you warm and cozy on chilly days.

Featuring a classic and versatile design, our sweatshirts are perfect for any occasion, whether you’re running errands, hitting the gym, or lounging at home. The ribbed cuffs and waistband provide a snug and secure fit, while the relaxed fit ensures maximum comfort.

Our women’s sweats are available in a range of colors and sizes, so you can choose the perfect one to match your personal style. Whether you prefer a bold and vibrant hue or a subtle and classic shade, we’ve got you covered."
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default FormalPantsCW;
