"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const DressCW = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [Dress] = useState("Dress");
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
          product.category.toLowerCase().trim() === Dress.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, Dress]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Dress"
        filtaredProducts={filtaredProducts}
        description="Introducing the Women’s Dress by Gorur Ghash – the epitome of style and comfort. Made from the finest fabrics and designed to flatter the figure, this dress is the perfect choice for any occasion. Whether you’re attending a formal event or just running errands, you’ll feel confident and beautiful every time you wear it.

Each piece is crafted with care, using only the finest materials to ensure that you feel comfortable and stylish, no matter where you go. The perfect blend of style and comfort, making it the ideal choice for anyone who loves to look good while feeling great."
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default DressCW;
