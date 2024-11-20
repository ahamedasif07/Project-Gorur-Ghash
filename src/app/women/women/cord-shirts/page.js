import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | Cord",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CordShirts = () => {
  return (
    <div>
      <FilterByCategory
        category="women-cord-shirts"
        CategoryTitle="women-cord-shirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CordShirts;
