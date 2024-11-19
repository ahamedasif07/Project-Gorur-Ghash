import FilterByCategory from "@/components/Shared/FilterByCategory";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - Sweatshirts",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Sweatshirts = () => {
  return (
    <div>
      <FilterByCategory
        category="Sweatshirts"
        CategoryTitle="Sweatshirts"
        description="Introducing Men’s Sweatshirts by Ghash, the perfect addition to your casual wardrobe! Made with high-quality, soft, and breathable fabric, these sweatshirts are designed to keep you warm and cozy on chilly days.

Featuring a classic and versatile design, our sweatshirts are perfect for any occasion, whether you’re running errands, hitting the gym, or lounging at home. The ribbed cuffs and waistband provide a snug and secure fit, while the relaxed fit ensures maximum comfort.

Our men’s sweats are available in a range of colors and sizes, so you can choose the perfect one to match your personal style. Whether you prefer a bold and vibrant hue or a subtle and classic shade, we’ve got you covered."
      ></FilterByCategory>
    </div>
  );
};

export default Sweatshirts;
