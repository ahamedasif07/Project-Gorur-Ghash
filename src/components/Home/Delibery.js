"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React from "react";
import delebaryMethords from "../../asstes/gorur-ghash-home/delivery.png";

const Delibery = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
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
