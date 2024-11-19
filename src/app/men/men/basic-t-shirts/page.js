import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | T-shirts | Basic",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const BasicTshirts = () => {
  return (
    <div>
      <FilterByCategory
        category="Basic-T-Shirts"
        CategoryTitle="Basic T-Shirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BasicTshirts;
