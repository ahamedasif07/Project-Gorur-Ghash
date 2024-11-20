import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Accessories | Chain",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Chokers = () => {
  return (
    <div>
      <FilterByCategory
        category="women-chokers"
        CategoryTitle="Chokers"
      ></FilterByCategory>
    </div>
  );
};

export default Chokers;