import React from "react";

import ProductVariantContainer from "../../ProductVareantContainer/ProductVariantContainer";

const TshirtsCatagories = () => {
  const tShirtsCetagories = [
    {
      image: "https://i.ibb.co.com/9t7CZKQ/605-A1725-copy-300x300.jpg", // Replace with actual image path
      category: "PREMIUM-t-shirts",
      products: 19,
    },
    {
      image: "https://i.ibb.co.com/2KKqnLh/605-A2101-copy-300x300.jpg", // Replace with actual image path
      category: "BASIC-t-shirts",
      products: 2,
    },
    {
      image:
        "https://i.ibb.co.com/yfd9WjF/Oversized-Drop-Shoulder-Solid-T-shirt-in-Maroon-9-300x300.jpg", // Replace with actual image path
      category: "DROP-TEES-t-shirts",
      products: 13,
    },
    {
      image: "https://i.ibb.co.com/Y0j4nVt/DSCF9552-300x300.jpg", // Replace with actual image path
      category: "GG-X-PLAANTIK-t-shirts",
      products: 1,
    },
  ];

  return (
    <div>
      <ProductVariantContainer
        variantCategories={tShirtsCetagories}
        rootPath="men"
        categoryType="Shirts"
        decription="It can be tedious having to scroll past so many online stores just to find the perfect shirt to suit your taste. Well, look no further! Gorur Ghash has your work cut out for you. Our wide assortment of shirts will revive your wardrobe and take your ensemble game to a whole new league."
      ></ProductVariantContainer>
    </div>
  );
};

export default TshirtsCatagories;
