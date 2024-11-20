import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | T-shirts | Basic",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BasicTees = () => {
  return (
    <div>
      <FilterByCategory
        category="basic-tees"
        CategoryTitle="basic-tees"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BasicTees;
