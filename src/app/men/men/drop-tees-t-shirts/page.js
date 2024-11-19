import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | T-shirts | Drop-tees",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const DropTeesTShirts = () => {
  return (
    <div>
      <FilterByCategory
        category="Cord-Jacket"
        CategoryTitle="Cord-Jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default DropTeesTShirts;
