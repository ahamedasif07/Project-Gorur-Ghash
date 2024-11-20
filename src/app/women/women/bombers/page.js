import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Bomber",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BomberJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Bomber-jacket"
        CategoryTitle="women-Bomber-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BomberJacket;
