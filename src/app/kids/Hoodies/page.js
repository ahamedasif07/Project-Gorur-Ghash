import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - kids | Hoodies",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Hoodies = () => {
  return (
    <div>
      <FilterByCategory
        category="kids-hoodies"
        CategoryTitle="Kids-Hoodies"
        description="Need funky socks? Gorur Ghash has got you covered! Our collection of socks is all about vibrant colors and bold patterns that stand out. Whether you’re looking to brighten up your day or add a quirky touch to your outfit, these funky socks are the perfect choice. Designed to be playful and unique, they let you express your personality with every step. From eye-catching stripes to crazy prints, there’s a pair for every mood."
      ></FilterByCategory>
    </div>
  );
};

export default Hoodies;
