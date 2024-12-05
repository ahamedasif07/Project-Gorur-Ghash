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
      <div className=" flex justify-between gap-4 pt-6 px-4">
        <div data-aos="fade-right" className="w-1/2 h-[400px] ">
          <Link href={path1}>
            <Image
              src={image1}
              alt="Men's Category"
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <div data-aos="fade-right" className="w-1/2 h-[400px] ">
          <Link href={path1}>
            <Image
              src={image1}
              alt="Men's Category"
              fill
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
