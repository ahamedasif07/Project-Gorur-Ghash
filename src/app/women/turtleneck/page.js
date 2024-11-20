import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Turtleneck",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Turtleneck = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Turtleneck"
        CategoryTitle="women-Turtleneck"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Turtleneck;
