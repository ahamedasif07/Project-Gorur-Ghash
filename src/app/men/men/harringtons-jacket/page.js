import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Harringtion Jacket",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const HarringtonsJacket = () => {
  return (
    <div>
      <FilterByCategory
        category="harringtons-jacket"
        CategoryTitle="Harringtons jacket"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default HarringtonsJacket;
