import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | polos",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const Polos = () => {
  return (
    <div>
      <FilterByCategory
        category="women-polos"
        CategoryTitle="women-polos"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Polos;
