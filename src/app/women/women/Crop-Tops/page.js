import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Crop",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const CropTops = () => {
  return (
    <div>
      <FilterByCategory
        category="Crop-Tops"
        CategoryTitle="Crop-Tops"
        description="An intricate crop top offers a timeless, effortlessly chic style for any ensemble.

Devil’s in the details. Ghash’s checkered crop tops with statement puff sleeves add a subtle flirty touch, paired with the square neckline shows off that décolletage. Plus, with an elastic sewn on the shoulders mean you can also style them as off-shoulder tops.

It’s the perfect choice for laid-back garden parties and summer strolls. So, get dolled up and step out in style this summer with Ghash’s crop tops. They come in five colors for you to choose from: Gingham Pink, Picnic Blanket Red, Orange Waffles, Checkerboard Black and Graph Paper Blue."
      ></FilterByCategory>
    </div>
  );
};

export default CropTops;
