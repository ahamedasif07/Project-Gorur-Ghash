import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Flannels",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const FlannelsJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="women-flannels-jacket"
        CategoryTitle="women-flannels-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default FlannelsJacket;
