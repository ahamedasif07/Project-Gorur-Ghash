import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Caps| Bucket-hat",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BucketHat = () => {
  return (
    <div>
      <FilterByCategory
        category="bucket-hats"
        CategoryTitle="Bucket Hats"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BucketHat;
