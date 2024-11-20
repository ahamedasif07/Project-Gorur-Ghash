import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | half -sleeve",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const HalfSleeve = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Half-sleeve"
        CategoryTitle="women-Half-sleeve"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default HalfSleeve;
