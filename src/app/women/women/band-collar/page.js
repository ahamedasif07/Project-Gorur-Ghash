import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Shirts | Band-Collae",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BandCollar = () => {
  return (
    <div>
      <FilterByCategory
        category="women-band-collar"
        CategoryTitle="women-band-collar"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default BandCollar;
