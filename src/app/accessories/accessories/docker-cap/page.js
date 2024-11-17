import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Caps| Docker",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const DockerCap = () => {
  return (
    <div>
      <FilterByCategory
        category="docker-caps"
        CategoryTitle="Docker Caps"
      ></FilterByCategory>
    </div>
  );
};

export default DockerCap;
