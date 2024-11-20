import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Chore",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Chore = () => {
  return (
    <div>
      <FilterByCategory
        category="women-chore-jacket"
        CategoryTitle="women-chore-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Chore;
