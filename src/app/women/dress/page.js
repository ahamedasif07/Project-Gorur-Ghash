import FilterByCategory from "@/components/Shared/FilterByCategory";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - women | Dress",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Dress = () => {
  return (
    <div>
      <FilterByCategory
        category="Dress"
        CategoryTitle="Dress"
        description="Introducing the Women’s Dress by Gorur Ghash – the epitome of style and comfort. Made from the finest fabrics and designed to flatter the figure, this dress is the perfect choice for any occasion. Whether you’re attending a formal event or just running errands, you’ll feel confident and beautiful every time you wear it.

Each piece is crafted with care, using only the finest materials to ensure that you feel comfortable and stylish, no matter where you go. The perfect blend of style and comfort, making it the ideal choice for anyone who loves to look good while feeling great.

So why wait? Add the Women’s Dress by Gorur Ghash to your wardrobe today and start feeling confident and beautiful every time you wear it."
      ></FilterByCategory>
    </div>
  );
};

export default Dress;
