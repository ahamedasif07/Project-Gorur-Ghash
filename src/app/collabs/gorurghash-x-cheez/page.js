import React from "react";
import titleImage from "../../../asstes/gorurghash-x-cheez/titleimage.png";
import Image from "next/image";
import Slider from "@/components/Shared/slider/Slider";
import bgImage from "../../../asstes/gorurghash-x-cheez/sliderBg image.gif";
import discountImage from "../../../asstes/gorurghash-x-cheez/Asset-3-2.png";
import benifiteImage from "../../../asstes/gorurghash-x-cheez/Asset-6.png";

const gorurghashXcheez = () => {
  const slidesOne = [
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
  const slidesTow = [
    {
      image: "https://i.postimg.cc/KYg3PpfY/605-A0296-1.jpg",
      title: "Beautiful Mountains",
      description:
        "Explore the serene beauty of towering mountains and lush greenery.",
    },
    {
      image: "https://i.postimg.cc/XNgGkCf9/605A0421.jpg",
      title: "Sunset Beach",
      description:
        "Relax by the shore and watch the mesmerizing sunset over the ocean.",
    },
    {
      image: "https://i.postimg.cc/Rhv3zSB3/605A0427.jpg",
      title: "City Lights",
      description:
        "Experience the vibrant city life with dazzling lights and tall skyscrapers.",
    },
    {
      image: "https://i.postimg.cc/yYQDwCrd/605-A0335-1.jpg",
      title: "City Lights",
      description:
        "Experience the vibrant city life with dazzling lights and tall skyscrapers.",
    },
  ];

  // big slider
  const bigSlider = [
    {
      image: "https://i.postimg.cc/jS0HKCJL/605A0374.jpg",
      title: "City Lights",
      description:
        "Experience the vibrant city life with dazzling lights and tall skyscrapers.",
    },
    {
      image: "https://i.postimg.cc/nh0knpK7/605A0250.jpg",
      title: "Urban Nights",
      description:
        "Explore the magic of the urban nightscape filled with neon lights and bustling streets.",
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
      <div className="flex justify-center border-2  py-5 bg-[#F7D10C] px-4">
        <div className="w-[500px]">
          <Slider slides={slidesOne}></Slider>
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
          <Slider slides={slidesTow}></Slider>
        </div>
      </div>
      {/* ---------slider part end ---------*/}
      {/* benifite part starts */}
      <div>
        <h2 className="text-5xl font-extrabold text-[#333333] text-center py-3">
          BENEFITS
        </h2>
        <div className="grid grid-cols-3 mt-5 gap-4 mx-auto">
          <div className="flex flex-col max-h-[400px] mt-8 justify-center   items-center">
            <Image className="text-center" src={discountImage} alt="image" />
            <h2 className="text-2xl mt-5 font-bold text-[#333333] text-center">
              20% off at Cheez outlets by wearing the Tee
            </h2>
          </div>
          <div className="flex flex-col max-h-[400px] justify-center   items-center">
            <Image src={benifiteImage} alt="image" />
            <h2 className="text-2xl  mt-5  font-bold text-[#333333] text-center">
              All profits from the campaign to be used for feeding the
              underprivileged
            </h2>
          </div>
          <div className="flex flex-col max-h-[400px] justify-center   items-center">
            <Image src={discountImage} alt="image" />
            <h2 className="text-2xl  mt-5  font-bold text-[#333333] text-center">
              20% coupon code for Gorur Ghash
            </h2>
          </div>
        </div>
      </div>
      {/* benifite part end*/}

      {/*  big slider starts*/}
      <div className="bg-[#F7D10C] py-2 mt-5 ">
        <div className=" px-2 ">
          <Slider slides={bigSlider}></Slider>
        </div>
      </div>
      {/*  big slider end*/}
    </div>
  );
};

export default gorurghashXcheez;
