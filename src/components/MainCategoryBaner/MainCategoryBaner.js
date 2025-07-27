"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

import React, { useEffect } from "react";
import Link from "next/link";

const MainCategoryBaner = ({ BanerImage, path }) => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  return (
    <div className="px-4 pt-4">
      <Link href={path}>
        <div data-aos="fade-up" className="relative w-full aspect-[4/1] ">
          <Image
            src={BanerImage}
            alt="category-Baner"
            fill
            className="object-fil"
          />
        </div>
      </Link>
    </div>
  );
};

export default MainCategoryBaner;
