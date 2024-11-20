import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Hoddie",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const Hoddie = () => {
  return (
    <div>
      <FilterByCategory
        category="hoodie"
        CategoryTitle="Hoodie"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Hoddie;
