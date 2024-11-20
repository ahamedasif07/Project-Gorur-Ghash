import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Cord",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cords = () => {
  return (
    <div>
      <FilterByCategory
        category="women-cord-jacket"
        CategoryTitle="women-cord-jacket"
        description="In the time of oversized, baggy and layered fashion trends, the struggle of being a smol petite woman is real. No regular clothes fit you and scouting the kid’s section to find your size can be mortifying. Lucky for you, we have just the perfect thing. Cropped Cords by Ghash!

Fit is key if you want to look chic and put together. This retro rendition is cropped in style. So, it will compliment your petite frame and give an illusion of having longer legs. Pair it with high rise jeans and bam! You instantly gain height."
      ></FilterByCategory>
    </div>
  );
};

export default Cords;
