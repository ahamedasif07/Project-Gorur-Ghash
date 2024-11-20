import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | T-shirts | Drop",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const DropTees = () => {
  return (
    <div>
      <FilterByCategory
        category="women-Drop-Tees"
        CategoryTitle="women-Drop-Tees"
        description="A staple of any edgy, coming of age wardrobe is a baggy or oversized T-shirt. It’s a modern take on 80’s nostalgia and retro street style.

At Gorur Ghash, we’re a sucker for anything retro. So, we too jumped on the bandwagon. Our range of oversized drop shoulder tees come in an array of bold pops and pastel hues and retro fonts, channelling that 70’s and 80’s aesthetic.

Rethink the classic T-shirt without having to look ordinary because these are no ordinary T-shirts. Keeping in line with pop culture, these statement drop-tees come with a mind of their own and a whole lotta attitude.

The unisex tees offer endless options for everyday smart-casual styling. And the oversized nature of the drop tees allows you to be stylish and comfy at the same time.

To get a bit more reformed silhouette, you can always tuck it in your pants or tie a knot in the bottom. The half-tuck look would give a more playful effortless vibe."
      ></FilterByCategory>
    </div>
  );
};

export default DropTees;
