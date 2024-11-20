import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | Cubans",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cubans = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Cubans"
        CategoryTitle="women-Cubans"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Cubans;
