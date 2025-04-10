import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Textured",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const TexturedJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Textured-jacket"
        CategoryTitle="women-Textured-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default TexturedJacket;
