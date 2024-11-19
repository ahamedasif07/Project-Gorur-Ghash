import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Boxy Jacket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BoxyJackets = () => {
  return (
    <div>
      <FilterByCategory
        category="Boxy-Jacket"
        CategoryTitle="Boxy Jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BoxyJackets;
