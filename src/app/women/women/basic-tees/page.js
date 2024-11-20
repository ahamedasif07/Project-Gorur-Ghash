import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | T-shirts | Basic",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const BasicTees = () => {
  return (
    <div>
      <FilterByCategory
        category="basic-tees"
        CategoryTitle="basic-tees"
        description="You’ve had basic black and white tees. Ones that turned into ghor mochar kapor pretty quickly. But not this time.
Introducing the Basic AF tees from Ghash!  Relax, the AF stands for amazing fit and not what you initially thought. Geez.
These Lycra cotton short-sleeved unisex T-shirts ensure long-lasting comfort. Made with stretchy fabric that makes them durable for a really long time!
You can never go wrong with owning a casual essential piece like a basic black or white T-shirt. They are perfect for every occasion.
Dress up or down relying on our Basic AF tees to always make you feel as confident as you look. The highly breathable material with moisture absorbant properties will keep you cool and comfortable in any situation."
      ></FilterByCategory>
    </div>
  );
};

export default BasicTees;
