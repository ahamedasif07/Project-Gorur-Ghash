import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | Shirts | Button Down",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const ButtonDown = () => {
  return (
    <div>
      <FilterByCategory
        category="button-down"
        CategoryTitle="Button down"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default ButtonDown;
