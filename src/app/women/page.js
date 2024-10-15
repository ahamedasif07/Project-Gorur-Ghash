import CatagoryContainer from "@/components/CatagoryContainer/CatagoryContainer";
import React from "react";
export const metadata = {
  title: "Gorur Ghash - Women",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Women = () => {
  const productCategories = [
    {
      category: "CARDIGAN + CROP TOP",
      products: 2,
      image: "https://i.ibb.co.com/RNxKJ42/605-A0586-300x300.jpg",
    },
    {
      category: "CO-ORD SET",
      products: 5,
      image:
        "https://i.ibb.co.com/D4wGyTK/605-A1368-copy-scaled-e1716446723781-300x300.jpg",
    },
    {
      category: "POLOS",
      products: 6,
      image: "https://i.ibb.co.com/4dL5vFQ/605-A1037-copy-300x300.jpg",
    },
    {
      category: "SKIRTS",
      products: 5,
      image: "https://i.ibb.co.com/jZ5Lnrq/605-A6113-copy-300x300.jpg",
    },
    {
      category: "SWEATSHIRTS",
      products: 1,
      image: "https://i.ibb.co.com/WF5DkK1/605-A4287-300x300.jpg",
    },
    {
      category: "DRESS",
      products: 3,
      image: "https://i.ibb.co.com/LCnWth3/605-A5136-300x300.jpg",
    },
    {
      category: "KIMONO",
      products: 3,
      image: "https://i.ibb.co.com/Br0BQJG/605-A4937-300x300.jpg",
    },
    {
      category: "SHIRT",
      products: 83,
      image: "https://i.ibb.co.com/TkdrgH5/605-A3948-copy-300x300.jpg",
    },
    {
      category: "T-SHIRTS",
      products: 34,
      image: "https://i.ibb.co.com/8Kz5QLm/605-A1767-copy-1-300x300.jpg",
    },
    {
      category: "TANK TOP",
      products: 11,
      image: "https://i.ibb.co.com/f8SzD0C/605-A4104-copy-300x300.jpg",
    },
    {
      category: "TOPS",
      products: 20,
      image: "https://i.ibb.co.com/q5G8MrL/605-A8747-300x300.jpg",
    },
    {
      category: "PANTS",
      products: 13,
      image: "https://i.ibb.co.com/FqDWXQt/605-A3676-300x300.jpg",
    },
    {
      category: "TURTLENECK",
      products: 9,
      image: "https://i.ibb.co.com/C7FpTpc/605-A0268-300x300.jpg",
    },
    {
      category: "HOODIE",
      products: 4,
      image: "https://i.ibb.co.com/fv30vjt/605-A1596-300x300.jpg",
    },
    {
      category: "HOODIE BLANKET",
      products: 1,
      image: "https://i.ibb.co.com/JtQRmsC/605-A9614-300x300.jpg",
    },
    {
      category: "JACKET",
      products: 26,
      image: "https://i.ibb.co.com/qWgnzxh/605-A1818-300x300.jpg",
    },
  ];

  return (
    <div>
      <CatagoryContainer
        categoryType="Women"
        rootPath="women"
        productCategories={productCategories}
      ></CatagoryContainer>
    </div>
  );
};

export default Women;
