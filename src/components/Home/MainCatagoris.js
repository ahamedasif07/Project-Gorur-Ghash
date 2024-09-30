"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React from "react";
import accossriesBaner from "../../asstes/gorur-ghash-home/2.png";
import menBaner from "../../asstes/gorur-ghash-home/1.png";
import WomenBaner from "../../asstes/gorur-ghash-home/3.png";
import Link from "next/link";

const MainCatagoris = () => {
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
        className="flex md:max-w-screen-lg px-4 justify-center pt-[30px] pb-[20px] mx-auto gap-5"
      >
        <Link href="/men" className="w-full">
          <Image src={menBaner} alt="image" layout="responsive" />
        </Link>
        <Link href="/asserocies" className="w-full">
          <Image src={accossriesBaner} alt="image" layout="responsive" />
        </Link>
        <Link href="/women" className="w-full">
          <Image src={WomenBaner} alt="image" layout="responsive" />
        </Link>
      </div>
    </div>
  );
};

export default MainCatagoris;
