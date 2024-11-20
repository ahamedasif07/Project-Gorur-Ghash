import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Skirts",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Skirts = () => {
  return (
    <div>
      <FilterByCategory
        category="Skirts"
        CategoryTitle="Skirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Skirts;
