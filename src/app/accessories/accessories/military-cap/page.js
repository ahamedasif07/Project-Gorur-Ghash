import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Caps| Military",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const MillitaryCap = () => {
  return (
    <div>
      <FilterByCategory
        category="wmilitary-caps"
        CategoryTitle="Military Caps"
      ></FilterByCategory>
    </div>
  );
};

export default MillitaryCap;
