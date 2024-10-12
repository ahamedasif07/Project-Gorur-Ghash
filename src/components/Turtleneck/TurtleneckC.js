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
        description="With sweater weather arriving, turtlenecks are a total must-have for Fall. Especially because they are easy pieces to layer with for added dimension and warmth. You can also wear a turtleneck sweater on its own and still feel like getting a snug hug.

Check out our pullover turtlenecks available in both high and low GSMs that also come in an array of colors."
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default TurtleneckC;
