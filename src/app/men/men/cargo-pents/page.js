import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Cargo-Pents",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cargos = () => {
  return (
    <div>
      <FilterByCategory
        category="cargo"
        CategoryTitle="Cargo"
        description=""
      ></FilterByCategory>
    </div>
  );
};

export default Cargos;
