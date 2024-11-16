import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - accessories | wallet",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const ToteBags = () => {
  return (
    <div>
      <FilterByCategory
        category="tote-bags"
        CategoryTitle="Tote-bags"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default ToteBags;
