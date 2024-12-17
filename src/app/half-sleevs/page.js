import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";
import React from "react";
import Polos from "../men/polos/page";
import VShirts from "../men/page";
import FilterByCategory from "@/components/Shared/FilterByCategory";
import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";
export const metadata = {
  title: "Gorur Ghash - Half-Sleevs",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};
const HalfSleevs = () => {
  const clothingData = [
    {
      gender: "Men's",
      category: "Polos",
      imageUrl: "path-to-image-1",
      path: "/mens-polos",
    },
    {
      gender: "Women's",
      category: "Polos",
      imageUrl: "path-to-image-2",
      path: "/womens-polos",
    },
    {
      gender: "Men's",
      category: "Cubans",
      imageUrl: "path-to-image-3",
      path: "/mens-cubans",
    },
    {
      gender: "Women's",
      category: "Cubans",
      imageUrl: "path-to-image-4",
      path: "/womens-cubans",
    },
  ];

  return (
    <div>
      <div className="md:px-10 px-4 py-6">
        <div className="p-4">
          <div className="">
            <DisplaySpecificByType CategoryTitle="Polos" category="polos" />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="V-Shirts"
              category="V-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              CategoryTitle="Premium-T-Shirts "
              category="Premium-T-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Basic-T-Shirts"
              CategoryTitle="Basic-T-Shirts"
            />
          </div>
          <div className="">
            <DisplaySpecificByType
              category="Drop-Tees"
              CategoryTitle="Drop-Tees"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfSleevs;
