import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | Flannels",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Flannels = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Flannels"
        CategoryTitle="women-Flannels"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Flannels;
