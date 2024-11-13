import CatagoryContainer from "@/components/CatagoryContainer/CatagoryContainer";
import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - accessories",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const WomensJewelry = () => {
  const JewelryCategory = [
    {
      category: "Chokers",
      products: 1,
      image: "https://i.ibb.co.com/DMc4dL3/605-A1035-copy-300x300.jpg",
    },
    {
      category: "Ear-Cuffs",
      products: 2,
      image: "https://i.ibb.co.com/bmDPSHq/605-A0302-300x300.jpg",
    },
    {
      category: "Earrings",
      products: 45,
      image: "https://i.ibb.co.com/bLY5jFL/605-A1067-copy-300x300.jpg",
    },
    {
      category: "Finger-Rings",
      products: 2,
      image: "https://i.ibb.co.com/jVgZZHT/605-A0280-300x300.jpg",
    },
    {
      category: "Stud-Earrings",
      products: 9,
      image: "https://i.ibb.co.com/y5Ykwnm/605-A9449-copy-300x300.jpg",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={JewelryCategory}
        rootPath="accessories"
        categoryType="Womens Jewelry"
        decription="Introducing Jacket for Men by Ghash! Especially for men who want to look stylish and feel comfortable this winter season! Our Men’s Jacket is designed to keep you warm and cozy during the colder months, while still providing a lightweight and breathable fit for those transitional seasons.

Crafted with high-quality materials, these jackets are built to last and withstand even the toughest weather conditions.

Featuring a classic and timeless design, these jackets are versatile enough to be dressed up or down, making them perfect for any occasion. With multiple pockets and a sleek, modern look, it’s the perfect addition to any wardrobe.

So why settle for anything less than the best? Upgrade your outerwear game with our Men’s Jacket and stay comfortable, stylish, and protected in any weather condition!"
      ></ProductVariantContainer>
    </div>
  );
};

export default WomensJewelry;
