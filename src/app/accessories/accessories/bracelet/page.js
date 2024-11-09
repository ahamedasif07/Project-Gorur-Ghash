import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Accessories | Bracelet",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Bracelet = () => {
  return (
    <div>
      <FilterByCategory
        category="men-bracelet"
        CategoryTitle="Men-Bracelet"
      ></FilterByCategory>
    </div>
  );
};

export default Bracelet;
