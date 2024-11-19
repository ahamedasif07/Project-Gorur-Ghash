import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | Shirts | Half - Sleevs",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const HalfShirts = () => {
  return (
    <div>
      <FilterByCategory
        category="half-sleeve"
        CategoryTitle="half-sleeve"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default HalfShirts;
