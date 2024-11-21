import React from "react";
import titleImage from "../../../asstes/gorurghash-x-cheez/titleimage.png";
import Image from "next/image";

const gorurghashXcheez = () => {
  return (
    <div>
      <div className="bg-white py-5 flex justify-center">
        <Image src={titleImage} alt="image"></Image>
      </div>
      <div className="bg-[#F7D10C] py-4">
        <div className="h-[600px] max-w-screen-lg mx-auto bg-[#F7D10C]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QQPE_rf7Gyg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default gorurghashXcheez;
