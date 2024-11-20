import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | jackets | Chore",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Chore = () => {
  return (
    <div>
      <FilterByCategory
        category="women-chore-jacket"
        CategoryTitle="women-chore-jacket"
        description="It can be difficult tackling workwear fashion that is both formal and stylish. Formals can be stiff with their boxy silhouette. Sometimes. you want to feel comfortable but fool other’s into thinking you’re not. That’s where Chore Jackets by Ghash come into play.

Looking to add variation in your wardrobe in a not so subtle way? Look no further, Chore Jackets are here to the rescue.

Versatile, functional and stylish- The Chore jackets can complement any aesthetic-from smart casual office wear to date night look or rugged streetwear.

Made from durable twill fabric, Chores can withstand harsh weather, and are perfect for layering over everything from jeans and a T-shirt to some button-downs and tailored trousers.

Three exterior patch pockets and one secret pocket inside means you don’t have to lug a bag around. Fit all your gadgets, a notepad and even sneak in some snacks just in case you get the munchies!"
      ></FilterByCategory>
    </div>
  );
};

export default Chore;
