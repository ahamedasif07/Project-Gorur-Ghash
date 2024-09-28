"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import catImg from "../../asstes/gorur-ghash-home/10.png";

const Catagories = ({ image1, image2 }) => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  return (
    <div>
      <div className="flex md:flex-row flex-col overflow-hidden md:max-w-screen-lg px-4 justify-center pb-[20px] mx-auto gap-5">
        <div data-aos="fade-right">
          <Image src={image1} alt="image"></Image>
        </div>
        <div data-aos="fade-left">
          <Image src={image2} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
