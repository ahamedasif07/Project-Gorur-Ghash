import React from "react";
import CatagoryContainer from "../CatagoryContainer/CatagoryContainer";

const ShirtsCetagories = () => {
  const shirtCategories = [
    {
      category: "Cord-Shirts",
      products: 2,
      image: "https://i.ibb.co.com/FJZ3BZd/605-A9462-300x300.jpg",
    },
    {
      category: "Half-Sleeve",
      products: 2,
      image: "https://i.ibb.co.com/bjt4qrN/605-A8251-300x300.jpg",
    },
    {
      category: "Office-Shirt",
      products: 2,
      image: "https://i.ibb.co.com/jrXFYLy/605-A7708-300x300.jpg",
    },
    {
      category: "Rayon-Linen Blend Shirts",
      products: 3,
      image: "https://i.ibb.co.com/XkzF0Z9/605-A0162-copy-300x300.jpg",
    },
    {
      category: "Band-Collar",
      products: 5,
      image: "https://i.ibb.co.com/wBgjFtc/605-A5606-copy-300x300.jpg",
    },
    {
      category: "Button-Down",
      products: 4,
      image: "https://i.ibb.co.com/4mNJ3mQ/605-A3249-copy-300x300.jpg",
    },
    {
      category: "Cubans",
      products: 35,
      image: "https://i.ibb.co.com/p2ZqWrk/605-A7050-copy-300x300.jpg",
    },
    {
      category: "Flannels",
      products: 19,
      image: "https://i.ibb.co.com/wMq7PrY/605-A9250-300x300.jpg",
    },
  ];

  return (
    <div>
      <CatagoryContainer
        productCategories={shirtCategories}
        categoryType="Shirts"
        decription="It can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league."
      ></CatagoryContainer>
    </div>
  );
};

export default ShirtsCetagories;
