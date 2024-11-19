import CordjacketC from "@/components/men-jackets/Cord-Jacket/CordJacketC";
import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Cords Jacket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CordJackets = () => {
  return (
    <div>
      <FilterByCategory
        category="Cord-Jacket"
        CategoryTitle="Cord-Jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CordJackets;
