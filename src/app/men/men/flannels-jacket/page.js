import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Flannels Jacket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const FlannelsJackets = () => {
  return (
    <div>
      <FilterByCategory
        category="Flannels-Jacket"
        CategoryTitle="Flannels-Jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default FlannelsJackets;
