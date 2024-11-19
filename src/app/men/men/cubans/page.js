import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";

export const metadata = {
  title: "Gorur Ghash - Men | Shirts | Cubans",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Cubans = () => {
  return (
    <div>
      <FilterByCategory
        category="Cubans"
        CategoryTitle="Cubans"
        description="Imagine swinging on a hammock, sipping cocktails and listening to the waves hit the sandy shores.
We know it’s been too long since you had a relaxing vacation. Fret not, with our range of revere collared Cuban shirts you’ll feel transported to the nearest tropical island in no time!

The short sleeves and super soft viscose and cotton fabric are sure to uplift your mood. The floral patterns add a fun touch to these Hawaiian style shirts.

Hence, Cubans by Ghash are a perfect addition to your “as soon as borders open, I’m taking a trip” suitcase."
      ></FilterByCategory>
    </div>
  );
};

export default Cubans;
