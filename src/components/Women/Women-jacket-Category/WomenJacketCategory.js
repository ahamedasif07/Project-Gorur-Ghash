import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const JacketCategoryCW = () => {
  const JacketData = [
    {
      category: "Boxy-Jacket",
      products: 3,
      image: "https://i.ibb.co.com/KGwBnD0/605-A4544-300x300.jpg",
    },
    {
      category: "Flannels",
      products: 1,
      image: "https://i.ibb.co.com/HYw4Smz/605-A2590-2.jpg",
    },
    {
      category: "Leather-Jackets",
      products: 2,
      image: "https://i.ibb.co.com/tmmhxS6/605-A8693-copy-300x300.jpg",
    },
    {
      category: "Textured-Jacket",
      products: 1,
      image: "https://i.ibb.co.com/2gLkk5s/605-A0817-copy-300x300.jpg",
    },
    {
      category: "Bombers",
      products: 8,
      image: "https://i.ibb.co.com/Vg8yDks/605-A1022-300x300.jpg",
    },
    {
      category: "Chore",
      products: 3,
      image: "https://i.ibb.co.com/M95xtwt/JIN-ASF1-WEB-300x300.jpg",
    },
    {
      category: "Cords",
      products: 7,
      image: "https://i.ibb.co.com/cwVfZ66/DSC02081-Edit-300x300.jpg",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={JacketData}
        rootPath="women"
        categoryType="Jacket"
        decription="IIt can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league.

Our collection of women’s shirts is super versatile and can be styled to dress up or dress down any outfit. Ranging from casual band-collars and semi-formal button-downs to relaxed Cubans, we have a shirt suitable for any occasion.

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, , plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or  a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women
."
      ></ProductVariantContainer>
    </div>
  );
};

export default JacketCategoryCW;
