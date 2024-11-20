import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Cord",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cords = () => {
  return (
    <div>
      <FilterByCategory
        category="women-cord-jacket"
        CategoryTitle="women-cord-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Cords;
