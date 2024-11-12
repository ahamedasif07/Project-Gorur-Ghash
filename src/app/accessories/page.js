import CatagoryContainer from "@/components/CatagoryContainer/CatagoryContainer";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - accessories",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Accessories = () => {
  const productCategories = [
    {
      category: "Caps",
      image: "https://i.ibb.co.com/bbsxmpB/605-A1210-copy-300x300.jpg",
      products: 10,
    },
    {
      category: "Mens-Accessories",
      image: "https://i.ibb.co.com/NZj22Sc/605-A9506-300x300.jpg",
      products: 10,
    },
    {
      category: "Socks",
      image: "https://i.ibb.co.com/tpHMDnK/605-A0409-300x300.jpg",
      products: 20,
    },
    {
      category: "Wallets",
      image: "https://i.ibb.co.com/BT2pJb0/605-A6448-copy-300x300.jpg",
      products: 1,
    },
    {
      category: "Womens-Jewelry",
      image: "https://i.ibb.co.com/4tk3s78/605-A1053-copy-300x300.jpg",
      products: 62,
    },
    {
      category: "Tote-Bags",
      image: "https://i.ibb.co.com/6gqkPVF/605-A6790-copy-300x300.jpg",
      products: 4,
    },
  ];

  return (
    <div>
      <CatagoryContainer
        categoryType="Accessories"
        rootPath="accessories"
        productCategories={productCategories}
      ></CatagoryContainer>
    </div>
  );
};

export default Accessories;
