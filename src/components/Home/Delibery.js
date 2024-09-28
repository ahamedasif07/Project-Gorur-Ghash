import Image from "next/image";
import React from "react";
import delebaryMethords from "../../asstes/gorur-ghash-home/delivery.png";

const Delibery = () => {
  return (
    <div className=" pb-[20px]">
      <h2 className="text-center text-4xl italic bg-[#FCDC03] py-3 font-semibold">
        Cash on Delivery in all 64 Districts
      </h2>
      <div className=" px-4 md:max-w-screen-lg mx-auto">
        <Image src={delebaryMethords} alt="delebary-methords-image"></Image>
      </div>
    </div>
  );
};

export default Delibery;
