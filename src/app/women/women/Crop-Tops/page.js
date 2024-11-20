import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Crop",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CropTops = () => {
  return (
    <div>
      <FilterByCategory
        category="Crop-Tops"
        CategoryTitle="Crop-Tops"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default CropTops;
