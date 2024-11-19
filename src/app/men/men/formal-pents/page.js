import FormalPentsC from "@/components/men-pents/Formal-pents/FormalPents";
import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Formal-Pents",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const FormalPents = () => {
  return (
    <div>
      <FilterByCategory
        category="formal-pants"
        CategoryTitle="formal-pants"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default FormalPents;
