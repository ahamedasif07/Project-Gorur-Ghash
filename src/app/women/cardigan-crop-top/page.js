import FilterByCategory from "@/components/Shared/FilterByCategory";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Cardingan-Top",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CardinganTop = () => {
  return (
    <div>
      <FilterByCategory
        category="Cardigan + Crop Top"
        CategoryTitle="Cardigan + Crop Top"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CardinganTop;
