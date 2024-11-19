import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | T-shirts | Premium",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const PremiumTShirts = () => {
  return (
    <div>
      <FilterByCategory
        category="Premium-T-Shirts"
        CategoryTitle="Premium-T-Shirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default PremiumTShirts;
