import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | T-shirts | Drop",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const DropTees = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Drop-Tees"
        CategoryTitle="women-Drop-Tees"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default DropTees;
