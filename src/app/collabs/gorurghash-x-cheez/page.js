import React from "react";
import titleImage from "../../../asstes/gorurghash-x-cheez/titleimage.png";
import Image from "next/image";
import Slider from "@/components/Shared/slider/Slider";
import bgImage from "../../../asstes/gorurghash-x-cheez/sliderBg image.gif";

const gorurghashXcheez = () => {
  const slides = [
    {
      image: "https://i.postimg.cc/43tRbp9G/Motamoti-Fit.jpg",
      title: "Beautiful Mountains",
      description:
        "Explore the serene beauty of towering mountains and lush greenery.",
    },
    {
      image: "https://i.postimg.cc/jSwptyvf/pizzaBox.jpg",
      title: "Sunset Beach",
      description:
        "Relax by the shore and watch the mesmerizing sunset over the ocean.",
    },
    {
      image: "https://i.postimg.cc/5NGr7612/pizza-Box-Open.gif",
      title: "City Lights",
      description:
        "Experience the vibrant city life with dazzling lights and tall skyscrapers.",
    },
  ];

  return (
    <div>
      <div className="bg-white py-5 flex justify-center">
        <Image src={titleImage} alt="image"></Image>
        {/* ---------video part stats ---------*/}
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
      {/* ---------video part end---------*/}
      <p className="h-[3px] bg-white"></p>

      {/* ---------slider part stats ---------*/}
      <div className="flex justify-between py-5 bg-[#F7D10C] px-4">
        <div className="w-[500px]">
          <Slider slides={slides}></Slider>
        </div>
        <div className="w-1/3 px-3 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold ">Why Motamoti Fit?</h2>
          <p className="text-[10px] font-bold mt-4 ">
            You’re not fat. You’re not skinny either. You’re somewhere in
            between. Let’s face it, most of us are. Thus, Motamoti Fit! Break
            free of society’s insatiable obsession with fitness, and be
            comfortable in your skin. You don’t need to starve yourself, you
            don’t need to push yourself either. Embrace being Motamoti Fit! The
            world is hard enough. Just be nice to yourself.
          </p>
        </div>
        <div className="w-[500px]">
          <Slider slides={slides}></Slider>
        </div>
      </div>
      {/* ---------slider part end ---------*/}
    </div>
  );
};

export default gorurghashXcheez;
