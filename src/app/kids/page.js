import CatagoryContainer from "@/components/CatagoryContainer/CatagoryContainer";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Women",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Kids = () => {
  const productCategories = [
    {
      image:
        "https://i.ibb.co.com/ygrxVHn/Whats-App-Image-2021-01-21-at-4-26-19-PM-300x300.jpg",
      products: 2,
      category: "Hoodies",
    },
    {
      image:
        "https://i.ibb.co.com/h1HfF2m/Whats-App-Image-2021-01-17-at-1-30-03-PM-300x300.jpg",
      products: 2,
      category: "Jackets",
    },
    {
      image: "https://i.ibb.co.com/gMP4M1j/DSCF8614-300x300.jpg",
      products: 2,
      category: "Shirts",
    },
  ];

  return (
    <div>
      <CatagoryContainer
        categoryType="Kids"
        rootPath="Kids"
        productCategories={productCategories}
      ></CatagoryContainer>
    </div>
  );
};

export default Kids;
