import React from "react";

import ProductVariantContainer from "../ProductVareantContainer/ProductVariantContainer";

const PentsCategories = () => {
  const pentsCetagories = [
    {
      id: 1,
      name: "Cargo Pants",
      category: "Cargo",
      productCount: 6,
      image: "https://i.ibb.co.com/93YMzcw/605-A5307-copy-300x300.jpg",
    },
    {
      id: 2,
      name: "Formal Pants",
      category: "Formal",
      productCount: 6,
      image: "https://i.ibb.co.com/MZxxRZS/605-A0801-copy-300x300.jpg",
    },
    {
      id: 3,
      name: "Gabardine Pants",
      category: "Gabardine",
      productCount: 2,
      image: "https://i.ibb.co.com/k28C5hh/605-A0892-copy-300x300.jpg",
    },
    {
      id: 4,
      name: "Shorts",
      category: "Shorts",
      productCount: 4,
      image: "https://i.ibb.co.com/PWY3rSZ/605-A0796-copy-300x300.jpg",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={pentsCetagories}
        rootPath="men"
        categoryType="Pents"
        decription="Tired of the same old pairs of Jeans or Gabardine pants?
Well the Ghash has options to spice up your wardrobe. 
Our range of men’s pants include Casual Cord Pants and Formal Gurkhas that could set you apart from the rest.
The Slim-Fit Cord Pants coupled with retro style and eye-catching colors are specially designed for the modern disciples. A simple addition, for both work and play.

The Gurkha pants are high-waisted, and captures truly elegant formal style. Crafted with premium twill fabric, the pants exude luxury and a great addition for your work wear."
      ></ProductVariantContainer>
    </div>
  );
};

export default PentsCategories;
