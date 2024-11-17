import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Caps| Base ball Cap",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BaseBallCaps = () => {
  return (
    <div>
      <FilterByCategory
        category="baseball-cap"
        CategoryTitle="Baseball Cap"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BaseBallCaps;
