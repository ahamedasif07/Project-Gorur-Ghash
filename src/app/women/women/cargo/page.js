import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Pents | Cargo",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cargo = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Cargo"
        CategoryTitle="women-Cargo"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Cargo;
