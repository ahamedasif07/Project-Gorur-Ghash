"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React from "react";
import Onsell from "../../asstes/gorur-ghash-home/Spring24-On-Sale-Banners-1810-x-896-px-1810-x-448-px-1.png";

const OnSell = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        className="flex md:flex-row flex-col md:max-w-screen-lg px-4 justify-center pb-[20px] mx-auto gap-5"
      >
        <div>
          <Image src={Onsell} alt="image"></Image>
        </div>
      </div>
    </div>
  );
};

export default OnSell;
