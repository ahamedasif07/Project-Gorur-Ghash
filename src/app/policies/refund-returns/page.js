import React from "react";
import exchangePolice from "../../../asstes/gorurghash-x-cheez/ep.png";
import retrunPolice from "../../../asstes/gorurghash-x-cheez/rp.png";
import tilePolice from "../../../asstes/gorurghash-x-cheez/tp.png";
import Image from "next/image";
export const metadata = {
  title: "Gorur Ghash - Polices | retrun-refund",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Return = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto flex  gap-6 mt-4 ">
        <Image src={exchangePolice} alt="image"></Image>
        <Image src={retrunPolice} alt="image"></Image>
      </div>
      <div className="flex justify-center mt-4">
        <Image src={tilePolice} alt="image"></Image>
      </div>
    </div>
  );
};

export default Return;
