import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Flowy",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const FlowyTop = () => {
  return (
    <div>
      <FilterByCategory
        category="Flowy-top"
        CategoryTitle="Flowy-top"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default FlowyTop;
