import Image from "next/image";
import React from "react";
import Onsell from "../../asstes/gorur-ghash-home/Spring24-On-Sale-Banners-1810-x-896-px-1810-x-448-px-1.png";

const OnSell = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:max-w-screen-lg px-4 justify-center pb-[20px] mx-auto gap-5">
        <div>
          <Image src={Onsell} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default OnSell;
