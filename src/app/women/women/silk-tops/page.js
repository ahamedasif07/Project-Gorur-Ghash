import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Silk",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const SilkTops = () => {
  return (
    <div>
      <FilterByCategory
        category="silk-top"
        CategoryTitle="silk-top"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default SilkTops;
