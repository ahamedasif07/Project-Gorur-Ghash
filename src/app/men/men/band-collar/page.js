import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Men | Shirts | Band Collar",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BandCollar = () => {
  return (
    <div>
      <FilterByCategory
        category="band-collar"
        CategoryTitle="Band Collar"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BandCollar;
