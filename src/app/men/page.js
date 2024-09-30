import CatagoryContainer from "@/components/CatagoryContainer/CatagoryContainer";
import React from "react";

const Men = () => {
  const productCategories = [
    {
      category: "v-shirts",
      products: 3,
      image: "https://i.postimg.cc/wTVbdbsB/605-A8210-copy-300x300.jpg",
    },
    {
      category: "polos",
      products: 9,
      image: "https://i.postimg.cc/FzhgWNpV/605-A5900-copy-300x300.jpg",
    },
    {
      category: "sweatshirts",
      products: 1,
      image: "https://i.postimg.cc/8kwhk8wx/605-A4269-300x300.jpg",
    },
    {
      category: "tank tops",
      products: 3,
      image: "https://i.postimg.cc/c42t6d3k/605-A9260-300x300.jpg",
    },
    {
      category: "shirt",
      products: 71,
      image: "https://i.postimg.cc/y6rkr7L6/605-A3172-copy-300x300.jpg",
    },
    {
      category: "t-shirts",
      products: 26,
      image: "https://i.postimg.cc/c4g6pPzR/605-A1845-copy-300x300.jpg",
    },
    {
      category: "pants",
      products: 26,
      image: "https://i.postimg.cc/nrQZWfLM/605-A9338-copy-300x300.jpg",
    },
    {
      category: "hoodie black",
      products: 1,
      image: "https://i.postimg.cc/tCWn1LzX/605-A9517-300x300.jpg",
    },
    {
      category: "turtleneck",
      products: 0, // Sample
      image: "https://i.postimg.cc/y6Sk5wtF/605-A0352-300x300.jpg",
    },
    {
      category: "hoodie",
      products: 0, // Sample
      image: "https://i.postimg.cc/htMjTgQq/7-300x300.jpg",
    },
    {
      category: "jacket",
      products: 0, // Sample
      image: "https://i.postimg.cc/k5pgYcy1/605-A0352-1-300x300.jpg",
    },
  ];

  return (
    <div>
      <CatagoryContainer
        productCategories={productCategories}
      ></CatagoryContainer>
    </div>
  );
};

export default Men;
