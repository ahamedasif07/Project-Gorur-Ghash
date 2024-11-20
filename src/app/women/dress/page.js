import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Dress",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Dress = () => {
  return (
    <div>
      <FilterByCategory
        category="Dress"
        CategoryTitle="Dress"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Dress;
