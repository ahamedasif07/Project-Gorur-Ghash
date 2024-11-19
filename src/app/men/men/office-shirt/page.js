import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | Shirts |Office - ware",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const OfficeShirt = () => {
  return (
    <div>
      <FilterByCategory
        category="Office-Shirt"
        CategoryTitle="Office-Shirt"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default OfficeShirt;
