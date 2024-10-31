import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const JacketCategoryCW = () => {
  const JacketData = [
    {
      category: "Boxy-Jacket",
      products: 3,
      image: "https://ibb.co.com/yRSK2pf",
    },
    {
      category: "Flannels",
      products: 1,
      image: "https://ibb.co.com/RPrbFL0",
    },
    {
      category: "Leather-Jackets",
      products: 2,
      image: "https://ibb.co.com/f11SnbW",
    },
    {
      category: "Textured-Jacket",
      products: 1,
      image: "https://ibb.co.com/Wgd22sP",
    },
    {
      category: "Bombers",
      products: 8,
      image: "https://ibb.co.com/m97stP3",
    },
    {
      category: "Chore",
      products: 3,
      image: "https://ibb.co.com/JCFwG6G",
    },
    {
      category: "Cords",
      products: 7,
      image: "https://i.ibb.co.com/example7.jpg",
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

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, solid colors, plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or going on a date, a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women."
      ></ProductVariantContainer>
    </div>
  );
};

export default JacketCategoryCW;
