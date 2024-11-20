import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | T-shirts | Premium",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const premium = () => {
  return (
    <div>
      <h1>
        <FilterByCategory
          category="women-premium-tShirt"
          CategoryTitle="women-premium-tShirt"
          description=""
        ></FilterByCategory>
      </h1>
    </div>
  );
};

export default premium;
