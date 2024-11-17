import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Caps| News-boy",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const NewsBoyCap = () => {
  return (
    <div>
      <FilterByCategory
        category="news-boy-hat"
        CategoryTitle="News Boy Hat"
      ></FilterByCategory>
    </div>
  );
};

export default NewsBoyCap;
