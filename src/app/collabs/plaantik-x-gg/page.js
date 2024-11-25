import React from "react";

import Image from "next/image";
import headerImage from "../../../asstes/gorurghash-x-cheez/headerImage.jpg";
import Slider from "@/components/Shared/slider/Slider";
export const metadata = {
  title: "Gorur Ghash - plaantik-x-gg",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const PlmtilXGg = () => {
  const FristSlider = [
    {
      image: "https://i.postimg.cc/BbWTHMCb/605A3096.jpg",
      title: "Beach Sunset",
      description:
        "Relax by the beach and enjoy the serene sunset over the calm waves.",
    },
    {
      image: "https://i.postimg.cc/mkQQwCdw/605A3104.jpg",
      title: "Mountain Hike",
      description:
        "Embark on an adventurous hike and enjoy breathtaking mountain views.",
    },
    {
      image: "https://i.postimg.cc/MZRbqJWQ/605A3167.jpg",
      title: "Forest Trail",
      description:
        "Explore the dense forest trails and connect with nature’s tranquility.",
    },
    {
      image: "https://i.postimg.cc/KcgQjg54/605A3195.jpg",
      title: "Starry Night",
      description:
        "Marvel at the clear night sky, filled with countless stars shining bright.",
    },
  ];
  const secoundSlider = [
    {
      image: "https://i.ibb.co.com/jyD4Htg/605A3197.jpg",
      title: "Beach Sunset",
      description:
        "Relax by the beach and enjoy the serene sunset over the calm waves.",
    },
    {
      image: "https://i.ibb.co.com/pzLT1cc/605A3241.jpg",
      title: "Mountain Hike",
      description:
        "Embark on an adventurous hike and enjoy breathtaking mountain views.",
    },
    {
      image: "https://i.ibb.co.com/cbhTxgb/605A3239.jpg",
      title: "Forest Trail",
      description:
        "Explore the dense forest trails and connect with nature’s tranquility.",
    },
    {
      image: "https://i.ibb.co.com/Yhpq5W5/605A3252.jpg",
      title: "Starry Night",
      description:
        "Marvel at the clear night sky, filled with countless stars shining bright.",
    },
    {
      image: "https://i.ibb.co.com/xgWd77q/605A3233.jpg",
      title: "Starry Night",
      description:
        "Marvel at the clear night sky, filled with countless stars shining bright.",
    },
  ];

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
      {/* header image end */}
      {/* -------------Teamwear Reimagined start---------- */}
      <div className="">
        <div className="grid md:grid-cols-2 md:px-[70px] px-6 grid-cols-1 bg-[#0A1A16]">
          <div className="h-full">
            <Slider slides={FristSlider}></Slider>
          </div>
          <div className="flex flex-col h-full justify-center items-center">
            <h2 className="text-gray-300 text-3xl text-center py-6">
              Teamwear Reimagined
            </h2>
            <p className="text-gray-300 px-14">
              Bangladesh has never played in the football World Cup. Truth be
              told, we don’t know when that day will come. But that hasn’t
              stopped us from hoping, from daydreaming, from reimagining. And
              so, we imagined what teamwear could look like if Bangladesh ever
              made it to the World Cup. As we watch the biggest sporting
              spectacle on the planet, it seemed fitting to design a sweatshirt
              to wear off the pitch during the first ever World Cup in recent
              memory taking place in winter.
            </p>
            <button className="bg-slate-100 py-3 mt-[50px] px-5 rounded-md font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* ----------Teamwear Reimagined end-------- */}
      {/* Features start */}
      <div className="bg-[#13322B]">
        <div className="grid md:grid-cols-2 md:py-[80px] py-[30px] md:px-[70px] px-6 grid-cols-1 ">
          <div className="h-full">
            <Slider slides={secoundSlider}></Slider>
          </div>
          <div className="flex flex-col h-full justify-center items-center">
            <h2 className="text-gray-300 text-3xl text-center py-6">
              Features
            </h2>
            <p className="text-gray-300 px-14">
              The design is based on vintage sweatshirt patterns whilst taking
              inspiration from the green and white colourways of Bangladesh
              football kits. It comes with a minimal concept badge for
              Bangladesh football featuring the national emblem of the country-
              the water lily- and of course, the representative tiger. Perhaps,
              the most striking element is the strip featuring wavelengths from
              a rendition of Bangladesh nation anthem, running through the sides
              of the sleeves.
            </p>
            <button className="bg-slate-100 py-3 mt-[50px] px-5 rounded-md font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/*Features end*/}
    </div>
  );
};

export default PlmtilXGg;
