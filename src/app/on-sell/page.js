import Image from "next/image";
import React from "react";
import onSell from "../../asstes/gorurghash-x-cheez/sae.png";
export const metadata = {
  title: "Gorur Ghash - on-sell",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const OnSell = () => {
  return (
    <div>
      <Image src={onSell} alt="on seel image"></Image>
    </div>
  );
};

export default OnSell;
