import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - accessories | wallet",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Wallets = () => {
  return (
    <div>
      <FilterByCategory
        category="wallet"
        CategoryTitle="wallet"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Wallets;
