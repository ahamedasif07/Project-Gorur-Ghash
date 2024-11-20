import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | leather",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const LeatherJackets = () => {
  return (
    <div>
      <FilterByCategory
        category="women-leather-jacket"
        CategoryTitle="women-leather-jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default LeatherJackets;
