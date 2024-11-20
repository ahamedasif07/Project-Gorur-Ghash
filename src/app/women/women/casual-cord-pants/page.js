import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Pents | Cord",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CasualCordPants = () => {
  return (
    <div>
      <FilterByCategory
        category="women-casual-cord-pants"
        CategoryTitle="women-casual-cord-pants"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CasualCordPants;
