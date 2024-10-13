import React from "react";

import ProductVariantContainer from "../ProductVareantContainer/ProductVariantContainer";

const JacketCategorysC = () => {
  const jacketsCategorys = [
    {
      id: 1,
      name: "Boxy Jacket",
      products: 3,
      image: "https://i.ibb.co.com/wWyDWGd/605-A4484-300x300.jpg", // replace with actual image URLs
      category: "Boxy-Jacket",
    },
    {
      id: 2,
      name: "Flannels",
      products: 2,
      image: "https://i.ibb.co.com/YtpwQSb/605-A2571-2.jpg",
      category: "Flannels-Jacket",
    },
    {
      id: 3,
      name: "Leather Jackets",
      products: 2,
      image: "https://i.ibb.co.com/BjyZF3t/605-A8631-copy-300x300.jpg",
      category: "Leather-Jacket",
    },
    {
      id: 4,
      name: "Textured Jackets",
      products: 1,
      image: "https://i.ibb.co.com/7169RQp/605-A0657-copy-300x300.jpg",
      category: "Textured-Jacket",
    },
    {
      id: 5,
      name: "Bombers",
      products: 8,
      image: "https://i.ibb.co.com/Jjv9vzG/605-A2478-300x300.jpg",
      category: "Bombers-Jacket",
    },
    {
      id: 6,
      name: "Chore",
      products: 3,
      image: "https://i.ibb.co.com/vz2MFKX/JIG-ASM1-WEB-300x300.jpg",
      category: "Chore-Jacket",
    },
    {
      id: 7,
      name: "Cords",
      products: 7,
      image: "https://i.ibb.co.com/PGY1pDV/605-A1851-300x300.jpg",
      category: "Cords-Jacket",
    },
    {
      id: 8,
      name: "Harringtons",
      products: 1,
      image: "https://i.ibb.co.com/GtWbHJZ/DSC03985-Edit-300x300.jpg",
      category: "Harringtons-Jacket",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={jacketsCategorys}
        rootPath="men"
        categoryType="Jackets"
        decription="Introducing Jacket for Men by Ghash! Especially for men who want to look stylish and feel comfortable this winter season! Our Men’s Jacket is designed to keep you warm and cozy during the colder months, while still providing a lightweight and breathable fit for those transitional seasons.

Crafted with high-quality materials, these jackets are built to last and withstand even the toughest weather conditions.

Featuring a classic and timeless design, these jackets are versatile enough to be dressed up or down, making them perfect for any occasion. With multiple pockets and a sleek, modern look, it’s the perfect addition to any wardrobe.

So why settle for anything less than the best? Upgrade your outerwear game with our Men’s Jacket and stay comfortable, stylish, and protected in any weather condition!"
      ></ProductVariantContainer>
    </div>
  );
};

export default JacketCategorysC;
