import Image from "next/image";
import React from "react";
import accossriesBaner from "../../asstes/gorur-ghash-home/2.png";
import menBaner from "../../asstes/gorur-ghash-home/1.png";
import WomenBaner from "../../asstes/gorur-ghash-home/3.png";

const MainCatagoris = () => {
  return (
    <div>
      <div className="flex md:max-w-screen-lg px-4 justify-center pt-12 mx-auto gap-5 md:flex-row flex-col">
        <div className="w-full">
          <Image src={menBaner} alt="image" layout="responsive" />
        </div>
        <div className="w-full">
          <Image src={accossriesBaner} alt="image" layout="responsive" />
        </div>
        <div className="w-full">
          <Image src={WomenBaner} alt="image" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default MainCatagoris;
