import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Accessories | Chain",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const EarCuffs = () => {
  return (
    <div>
      <FilterByCategory
        category="women-finger-ring"
        CategoryTitle="Rings"
      ></FilterByCategory>
    </div>
  );
};

export default EarCuffs;
