import Image from "next/image";
import React from "react";
import catImg from "../../asstes/gorur-ghash-home/10.png";

const Catagories = ({ image1, image2 }) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:max-w-screen-lg px-4 justify-center pb-[20px] mx-auto gap-5">
        <div>
          <Image src={image1} alt="image"></Image>
        </div>
        <div>
          <Image src={image2} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
