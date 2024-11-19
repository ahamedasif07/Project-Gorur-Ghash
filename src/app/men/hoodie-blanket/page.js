import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Hoodie Blanket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const HoodieBlanket = () => {
  return (
    <div>
      <FilterByCategory
        category="Hoodie-Blanket"
        CategoryTitle="Hoodie Blanket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default HoodieBlanket;
