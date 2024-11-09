import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Accessories | Chain",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Chain = () => {
  return (
    <div>
      <FilterByCategory
        category="men-chain"
        CategoryTitle="Men-Chain"
      ></FilterByCategory>
    </div>
  );
};

export default Chain;
