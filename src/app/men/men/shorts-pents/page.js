import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Short-Pents",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const ShortsPents = () => {
  return (
    <div>
      <FilterByCategory
        category="shorts-pants"
        CategoryTitle="shorts-pants"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default ShortsPents;
