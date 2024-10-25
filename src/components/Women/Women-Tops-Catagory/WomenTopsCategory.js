import ProductVariantContainer from "@/components/ProductVareantContainer/ProductVariantContainer";
import React from "react";

const WomenTopsCategory = () => {
  const TopsCategory = [
    {
      category: "Balloon-Sleeve",
      image: "https://i.ibb.co.com/Lx2pFSg/605-A9561-300x300-1.jpg",
      products: 2,
    },
    {
      category: "Flowy-Top",
      image: "https://i.ibb.co.com/CHGPvPT/TGM-4-300x300.jpg",
      products: 7,
    },
    {
      category: "Crop-Tops",
      image: "https://i.ibb.co.com/gypQbpv/DSC09852-300x300.jpg",
      products: 4,
    },
    {
      category: "Silk-Tops",
      image: "https://i.ibb.co.com/J73JDTt/Black-300x300.jpg",
      products: 3,
    },
    {
      category: "Wrap-Tops",
      image: "https://i.ibb.co.com/DfMqG7y/DSC04552-300x300.jpg",
      products: 2,
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={TopsCategory}
        rootPath="women"
        categoryType="Tops"
        decription="IIt can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league.

Our collection of women’s shirts is super versatile and can be styled to dress up or dress down any outfit. Ranging from casual band-collars and semi-formal button-downs to relaxed Cubans, we have a shirt suitable for any occasion.

They are made with the finest and most comfortable fabric to be able to wear all year round. Be it short sleeves, long sleeves, solid colors, plaid or stripes, Oxford Cotton, Slub Cotton, or even Flannels, we have them all.

Whether you’re at work, partying on the weekends, or going on a date, a crisp shirt can elevate your look instantly. You will exude confidence and turn heads in every room you walk into with Gorur Ghash’s coveted range of shirts for women."
      ></ProductVariantContainer>
    </div>
  );
};

export default WomenTopsCategory;
