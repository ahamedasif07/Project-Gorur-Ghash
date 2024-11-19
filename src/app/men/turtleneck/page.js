import FilterByCategory from "@/components/Shared/FilterByCategory";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - Turtleneck",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Turtleneck = () => {
  return (
    <div>
      <FilterByCategory
        category="Turtleneck"
        CategoryTitle="Turtleneck"
        description="With sweater weather arriving, turtlenecks are a total must-have for Fall. Especially because they are easy pieces to layer with for added dimension and warmth. You can also wear a turtleneck sweater on its own and still feel like getting a snug hug.

Check out our pullover turtlenecks available in both high and low GSMs that also come in an array of colors."
      ></FilterByCategory>
    </div>
  );
};

export default Turtleneck;
