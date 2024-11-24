import React from "react";

import Image from "next/image";
import headerImage from "../../../asstes/gorurghash-x-cheez/headerImage.jpg";

const PlmtilXGg = () => {
  return (
    <div>
      {/* ---------header image --------- */}
      <div className="relative w-full h-[600px]">
        <Image src={headerImage} alt="image" layout="fill" objectFit="cover" />
        <div className="absolute bottom-12 left-8">
          <h2 className="text-6xl py-5 font-bold text-gray-200 z-50 ">
            Plaantik Sweats
          </h2>
          <h2 className="text-4xl font-bold text-gray-400 z-50 ">
            Teamwear Reimagined
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PlmtilXGg;
