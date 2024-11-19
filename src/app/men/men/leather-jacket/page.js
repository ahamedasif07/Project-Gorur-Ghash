import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Leather Jacket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const LeatherJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="Leather-Jacket"
        CategoryTitle="Leather-Jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default LeatherJacket;
