"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Link from "next/link";

const Catagories = ({ image1, image2, path1, path2 }) => {
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
        <Link href={path1} data-aos="fade-right">
          <Image src={image1} alt="Men's Category" width={500} height={300} />
        </Link>
        <Link href={path2} data-aos="fade-left">
          <Image src={image2} alt="Women's Category" width={500} height={300} />
        </Link>
      </div>
    </div>
  );
};

export default Catagories;
