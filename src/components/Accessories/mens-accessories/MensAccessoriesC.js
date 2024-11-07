import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const MenAccessoriesCategory = () => {
  const menAcceroices = [
    {
      category: "Bracelet",
      image: "https://i.ibb.co.com/hmkFyBL/605-A9607-300x300.jpg",
      products: 5,
    },
    {
      category: "Chain",
      image: "https://i.ibb.co.com/d2NWBc4/605-A9527-300x300.jpg",
      products: 4,
    },
    {
      category: "Ring",
      image:
        "https://i.ibb.co.com/7JXB3mt/605-A0555-e1727527850300-300x300.jpg",
      products: 1,
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={menAcceroices}
        rootPath="accessories"
        categoryType="Men's Accessories"
        decription="Introducing Jacket for Men by Ghash! Especially for men who want to look stylish and feel comfortable this winter season! Our Men’s Jacket is designed to keep you warm and cozy during the colder months, while still providing a lightweight and breathable fit for those transitional seasons.

Crafted with high-quality materials, these jackets are built to last and withstand even the toughest weather conditions.

Featuring a classic and timeless design, these jackets are versatile enough to be dressed up or down, making them perfect for any occasion. With multiple pockets and a sleek, modern look, it’s the perfect addition to any wardrobe.

So why settle for anything less than the best? Upgrade your outerwear game with our Men’s Jacket and stay comfortable, stylish, and protected in any weather condition!"
      ></ProductVariantContainer>
    </div>
  );
};

export default MenAccessoriesCategory;
