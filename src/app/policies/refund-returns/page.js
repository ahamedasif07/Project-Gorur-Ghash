import React from "react";
import exchangePolice from "../../../asstes/gorurghash-x-cheez/ep.png";
import retrunPolice from "../../../asstes/gorurghash-x-cheez/rp.png";
import tilePolice from "../../../asstes/gorurghash-x-cheez/tp.png";
import Image from "next/image";

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
