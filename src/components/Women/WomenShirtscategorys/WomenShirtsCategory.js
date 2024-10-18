import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const WomenShirtsCetagories = () => {
  const shirtCategories = [
    {
      category: "Cord-Shirts",
      image: "https://i.ibb.co.com/RPmdGzd/605-A9393-300x300.jpg",
      products: 3,
    },
    {
      category: "Half-Sleeve",
      image: "https://i.ibb.co.com/PcTtPpc/605-A7804-300x300.jpg",
      products: 3,
    },
    {
      category: "Rayon-Linen-Blend-Shirts",
      image: "https://i.ibb.co.com/KLkv9cx/605-A0090-copy-300x300.jpg",
      products: 3,
    },
    {
      category: "Band-Collar",
      image: "https://i.ibb.co.com/Hd2My53/605-A5585-copy-300x300.jpg",
      products: 5,
    },
    {
      category: "Button-Down",
      image: "https://i.ibb.co.com/3MLq5yw/605-A3153-copy-300x300.jpg",
      products: 4,
    },
    {
      category: "Cubans",
      image: "https://i.ibb.co.com/hC0cxQT/605-A0239-copy-300x300.jpg",
      products: 42,
    },
    {
      category: "Flannels",
      image: "https://i.ibb.co.com/f9c0Hpn/605-A9278-300x300.jpg",
      products: 23,
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={shirtCategories}
        rootPath="men"
        categoryType="Shirts"
        decription="IIt can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league.

Our collection of women’s shirts is super versatile and can be styled to dress up or dress down any outfit. Ranging from casual band-collars and semi-formal button-downs to relaxed Cubans, we have a shirt suitable for any occasion.

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, solid colors, plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or going on a date, a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women."
      ></ProductVariantContainer>
    </div>
  );
};

export default WomenShirtsCetagories;
