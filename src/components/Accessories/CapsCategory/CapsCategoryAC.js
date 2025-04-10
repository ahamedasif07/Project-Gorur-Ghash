import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const CapsCategoryAC = () => {
  const capsCategorey = [
    {
      category: "Baseball-Cap",
      image: "https://i.ibb.co.com/MSW5hXs/605-A1210-copy-1-300x300.jpg",
      products: 6,
    },
    {
      category: "Bucket-Hat",
      image: "https://i.ibb.co.com/zf4RZQH/605-A9697-copy-300x300.jpg",
      products: 1,
    },
    {
      category: "Docker-Cap",
      image: "https://i.ibb.co.com/hLhP3XL/605-A9656-1-copy-300x300.jpg",
      products: 1,
    },
    {
      category: "Military-Cap",
      image: "https://i.ibb.co.com/HPbNYRh/605-A9782-copy-300x300.jpg",
      products: 1,
    },
    {
      category: "News-Boy-Hat",
      image: "https://i.ibb.co.com/HTjKNBq/605-A0968-copy-300x300.jpg",
      products: 1,
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={capsCategorey}
        rootPath="accessories"
        categoryType="Caps"
        decription="Introducing Jacket for Men by Ghash! Especially for men who want to look stylish and feel comfortable this winter season! Our Men’s Jacket is designed to keep you warm and cozy during the colder months, while still providing a lightweight and breathable fit for those transitional seasons.

Crafted with high-quality materials, these jackets are built to last and withstand even the toughest weather conditions.

Featuring a classic and timeless design, these jackets are versatile enough to be dressed up or down, making them perfect for any occasion. With multiple pockets and a sleek, modern look, it’s the perfect addition to any wardrobe.

So why settle for anything less than the best? Upgrade your outerwear game with our Men’s Jacket and stay comfortable, stylish, and protected in any weather condition!"
      ></ProductVariantContainer>
    </div>
  );
};

export default CapsCategoryAC;
