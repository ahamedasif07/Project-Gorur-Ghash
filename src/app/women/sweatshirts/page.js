import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Sweatshirts",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Sweatshirts = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Sweatshirts"
        CategoryTitle="women-Sweatshirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Sweatshirts;
