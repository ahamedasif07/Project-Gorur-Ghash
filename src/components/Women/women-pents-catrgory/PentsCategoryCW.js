import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const PantsCategoryCW = () => {
  const pantsData = [
    {
      category: "Cargo",
      products: 5,
      image: "https://i.ibb.co.com/jG2mcy7/605-A5282-copy-300x300.jpg",
    },
    {
      category: "Casual-Cord-Pants",
      products: 3,
      image: "https://i.ibb.co.com/bHgT37N/DSC09593-300x300.jpg",
    },
    {
      category: "Formal-Pants",
      products: 4,
      image: "https://i.ibb.co.com/Wyq3Kfq/IMG-0639-Edit-300x300.jpg",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={pantsData}
        rootPath="women"
        categoryType="Pants"
        decription="IIt can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league.

Our collection of women’s shirts is super versatile and can be styled to dress up or dress down any outfit. Ranging from casual band-collars and semi-formal button-downs to relaxed Cubans, we have a shirt suitable for any occasion.

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, solid colors, plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or going on a date, a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women."
      ></ProductVariantContainer>
    </div>
  );
};

export default PantsCategoryCW;
