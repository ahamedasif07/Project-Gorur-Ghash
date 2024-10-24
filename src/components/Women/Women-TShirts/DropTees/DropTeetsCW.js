"use client";
import React, { useEffect, useState } from "react";

import { useDataContext } from "@/components/Shared/DataFetching/DataProvider";
import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";

const DropTeetsCW = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [DropTeets] = useState("women-Drop-Tees");
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
          DropTeets.toLowerCase().trim()
      );
      setFiltaredProducts(remaining);
    }
  }, [allProductsData, DropTeets]);

  console.log("data from context", data);
  console.log("all products", allProductsData);

  return (
    <div>
      <DisplayCatagoryProducts
        category="Drop Tees"
        description="A staple of any edgy, coming of age wardrobe is a baggy or oversized T-shirt. It’s a modern take on 80’s nostalgia and retro street style.

At Gorur Ghash, we’re a sucker for anything retro. So, we too jumped on the bandwagon. Our range of oversized drop shoulder tees come in an array of bold pops and pastel hues and retro fonts, channelling that 70’s and 80’s aesthetic.

Rethink the classic T-shirt without having to look ordinary because these are no ordinary T-shirts. Keeping in line with pop culture, these statement drop-tees come with a mind of their own and a whole lotta attitude.

The unisex tees offer endless options for everyday smart-casual styling. And the oversized nature of the drop tees allows you to be stylish and comfy at the same time.

To get a bit more reformed silhouette, you can always tuck it in your pants or tie a knot in the bottom. The half-tuck look would give a more playful effortless vibe."
        filtaredProducts={filtaredProducts}
      ></DisplayCatagoryProducts>
    </div>
  );
};

export default DropTeetsCW;
