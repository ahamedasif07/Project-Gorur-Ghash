import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Wrap",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const WarpTops = () => {
  return (
    <div>
      <FilterByCategory
        category="Wrap-Tops"
        CategoryTitle="Wrap-Tops"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default WarpTops;
