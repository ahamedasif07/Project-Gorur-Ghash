import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Boxy",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BoxyJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="women-boxy-jacket"
        CategoryTitle="women-boxy-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BoxyJacket;
