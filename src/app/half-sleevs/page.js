import DisplayCatagoryProducts from "@/components/Shared/DisplayCatagoryProducts";
import React from "react";
import Polos from "../men/polos/page";
import VShirts from "../men/page";
import FilterByCategory from "@/components/Shared/FilterByCategory";
import DisplaySpecificByType from "@/components/Shared/DisplaySpecificCategory";

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
      <div className="p-4">
        <div className="py-2 inline-block">
          <DisplaySpecificByType category="V-Shirts"></DisplaySpecificByType>
        </div>
        <div className="py-2">
          <DisplaySpecificByType category="polos"></DisplaySpecificByType>
        </div>
      </div>
    </div>
  );
};

export default HalfSleevs;
