import FilterByCategory from "@/components/Shared/FilterByCategory";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | V-shirts",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const VShirtsPage = () => {
  return (
    <div>
      <FilterByCategory
        category="V-Shirts"
        CategoryTitle="V-Shirts"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default VShirtsPage;
