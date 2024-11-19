import ShirtsCetagories from "@/components/ShirtsCatagoris/ShirtsCetagories";

import React from "react";
export const metadata = {
  title: "Gorur Ghash - shirts",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Shirts = () => {
  return (
    <div>
      <ShirtsCetagories />
    </div>
  );
};

export default Shirts;
