import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Gabardine-Pents",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const GabadinePents = () => {
  return (
    <div>
      <FilterByCategory
        category="gabardine-pants"
        CategoryTitle="Gabardine Pants"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default GabadinePents;
