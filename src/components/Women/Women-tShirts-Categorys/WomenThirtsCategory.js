import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const WomenTShirtsCetagories = () => {
  const TshirtCategories = [
    {
      category: "Premium-t-Shirts",
      products: 19,
      image: "https://i.ibb.co.com/FxkhWk9/605-A8446-300x300.jpg",
    },
    {
      category: "Basic-Tees",
      products: 2,
      image: "https://i.ibb.co.com/C2P1vbB/605-A2082-copy-300x300.jpg",
    },
    {
      category: "Drop-Tees",
      products: 12,
      image:
        "https://i.ibb.co.com/8rN65RM/Oversized-Drop-Shoulder-Solid-T-shirt-in-Off-white-12-300x300.jpg",
    },
    {
      category: "GGX-Plaantik",
      products: 1,
      image: "https://i.ibb.co.com/LC11Ktr/DSCF9552-300x300.jpg",
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={TshirtCategories}
        rootPath="women"
        categoryType="T-Shirts"
        decription="IIt can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league.

Our collection of women’s shirts is super versatile and can be styled to dress up or dress down any outfit. Ranging from casual band-collars and semi-formal button-downs to relaxed Cubans, we have a shirt suitable for any occasion.

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, solid colors, plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or going on a date, a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women."
      ></ProductVariantContainer>
    </div>
  );
};

export default WomenTShirtsCetagories;
