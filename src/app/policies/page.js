import Image from "next/image";
import React from "react";
import pp from "../../asstes/gorurghash-x-cheez/pp.jpg";
import pe from "../../asstes/gorurghash-x-cheez/pe.jpg";
import pd from "../../asstes/gorurghash-x-cheez/pd.png";
export const metadata = {
  title: "Gorur Ghash - Polices",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Policies = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-12 max-w-screen-lg mx-auto mt-4">
        <div className="">
          <Image src={pp} alt="image"></Image>
        </div>
        <div className="">
          <Image src={pe} alt="image"></Image>
        </div>
        <div className="">
          <Image src={pd} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Policies;
