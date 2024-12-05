"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

import React, { useEffect } from "react";

const MainCategoryBaner = ({ BanerImage }) => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Easing option for smooth transitions
      once: true, // Whether animation should happen only once while scrolling
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className={`pt-4 px-4`}>
        <Image src={BanerImage} alt="category-Baner"></Image>
      </div>
    </div>
  );
};

export default MainCategoryBaner;
