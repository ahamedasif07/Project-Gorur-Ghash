import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Tops | Wrap",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const WarpTops = () => {
  return (
    <div>
      <FilterByCategory
        category="Wrap-Tops"
        CategoryTitle="Wrap-Tops"
        description="Wrap up work. Wrap up studies. Wrap up that toxic relationship. It’s nice to end some things. Feel nicer doing all that while wearing Wrap Up Tops by Ghash!
Exquisite Wrap tops made with premium georgette fabric and jewel tones will wrap around you in any occasion.
These wrap tops are donned in details. The puff shoulders pull focus to your upper body while the waist belt cinches your waist providing visual dimension and accentuating your figure. The metal buckle add an additional focal point that the eyes are drawn to."
      ></FilterByCategory>
    </div>
  );
};

export default WarpTops;
