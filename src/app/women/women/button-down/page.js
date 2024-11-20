import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | Button-Down",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const ButtonDown = () => {
  return (
    <div>
      <FilterByCategory
        category="women-button-down"
        CategoryTitle="women-button-down"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default ButtonDown;
