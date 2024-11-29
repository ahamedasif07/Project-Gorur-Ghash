"use client";
import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Image from "next/image";
import brandLogo from "../../asstes/gorur-ghash-home/Header-1-102x42.png";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const NabVar = () => {
  const [isMenuOpen, setIsMenuOpne] = useState(false);
  const [menuItem, setMenuItem] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll threshold to trigger navbar becoming fixed
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        isScrolled
          ? "fixed top-0 w-full z-50 nav-slide-down" // Add a class for sliding down
          : "nav-slide-up" // Add a class for sliding up when not scrolled
      }`}
    >
      <div className="bg-[#FBDD02] py-3">
        <Section>
          <div className="">
            <div className="flex md:justify-around justify-between px-3 items-center">
              <Image
                className="w-[68px] md:w-[90px]"
                src={brandLogo}
                alt="Brand Logo"
              />
              {/* Main navbar */}
              <div className="hidden md:block">
                <ul className="flex gap-5">
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/") ? "text-white border-b-2" : ""
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/women") ? "text-white border-b-2" : ""
                    }`}
                    href="/women"
                  >
                    Women
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/men") ? "text-white border-b-2" : ""
                    }`}
                    href="/men"
                  >
                    Men
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/kids") ? "text-white border-b-2" : ""
                    }`}
                    href="/kids"
                  >
                    Kids
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/accessories") ? "text-white border-b-2" : ""
                    }`}
                    href="/accessories"
                  >
                    Accessories
                  </Link>
                  <div
                    onClick={() => setMenuItem(!menuItem)}
                    className="relative top-[1px]"
                  >
                    <Link
                      className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                        isActive("/collabs") ? "text-white border-b-2" : ""
                      }`}
                      href=""
                    >
                      <h2 className="flex items-center gap-2">
                        Collabs
                        {menuItem ? <FaChevronUp /> : <FaAngleDown />}
                      </h2>
                    </Link>
                    {menuItem && (
                      <ul className="absolute md:w-[250px] transition-all duration-700 ease-in-out top-[44px] left-0 bg-gray-100 text-white px-2">
                        <li>
                          <Link
                            className="block uppercase hover:text-[#FBDD02] transition-all duration-300 ease-in-out text-[14px] font-bold px-4 py-2 text-black"
                            href="/collabs/gorurghash-x-cheez"
                          >
                            gorurghash-x-cheez
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block uppercase transition-all duration-300 ease-in-out text-[14px] font-bold hover:text-[#FBDD02] px-4 py-2 text-black"
                            href="/collabs/plaantik-x-gg"
                          >
                            plaantik-x-gg
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/policies") ? "text-white border-b-2" : ""
                    }`}
                    href="/policies"
                  >
                    Policies
                  </Link>
                </ul>
              </div>

              {/* Menu item icons */}
              <div className="hidden md:flex items-center gap-4">
                <h2 className="text-[18px] flex items-center font-bold text-[#54595F]">
                  Cart/
                  <span className="text-[22px] font-bold">
                    <TbCurrencyTaka />
                  </span>
                  ,000
                </h2>
                <Link href="/add-to-cart">
                  <span className="text-[22px] ">
                    <div className=" flex">
                      <BsHandbag />
                      <p className="relative right-2 bottom-3  bg-red-600 rounded-full px-[4px] text-[8px] mt-2 py-[2px] text-white">
                        1
                      </p>
                    </div>
                  </span>
                </Link>
                <span className="text-[21px]">
                  <FaUser />
                </span>
                <span
                  onClick={() => setIsSearch(!isSearch)}
                  className="text-[22px] text-white"
                >
                  <IoSearch />
                </span>
              </div>
              {isMenuOpen ? (
                <button
                  onClick={() => setIsMenuOpne(!isMenuOpen)}
                  className="md:hidden text-[22px] block"
                >
                  <RxCross2 />
                </button>
              ) : (
                <button
                  onClick={() => setIsMenuOpne(!isMenuOpen)}
                  className="md:hidden text-[22px] block"
                >
                  <RiMenu3Fill />
                </button>
              )}
            </div>
            {/* Mini nav for mobile devices */}
            {isMenuOpen && (
              <div className="md:hidden px-3 pt-6 block">
                <ul className="flex flex-col gap-5">
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/") ? "text-white " : "null"
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/women") ? "text-white " : ""
                    }`}
                    href="/women"
                  >
                    Women
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/men") ? "text-white " : ""
                    }`}
                    href="/men"
                  >
                    Men
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/kids") ? "text-white " : ""
                    }`}
                    href="/kids"
                  >
                    Kids
                  </Link>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/accessories") ? "text-white " : ""
                    }`}
                    href="/accessories"
                  >
                    Accessories
                  </Link>
                  <div
                    onClick={() => setMenuItem(!menuItem)}
                    className="relative top-[1px]"
                  >
                    <Link
                      className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                        isActive("/collabs") ? "text-white border-b-2" : ""
                      }`}
                      href=""
                    >
                      <h2 className="flex items-center gap-2">
                        Collabs
                        {menuItem ? <FaChevronUp /> : <FaAngleDown />}
                      </h2>
                    </Link>
                    {menuItem && (
                      <ul className="absolute md:w-[250px] transition-all duration-700 ease-in-out top-[44px] left-0 bg-gray-100 text-white px-2">
                        <li>
                          <Link
                            className="block uppercase hover:text-[#FBDD02] transition-all duration-300 ease-in-out text-[14px] font-bold px-4 py-2 text-black"
                            href="/collabs/item1"
                          >
                            gorurghash-x-cheez
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block uppercase transition-all duration-300 ease-in-out text-[14px] font-bold hover:text-[#FBDD02] px-4 py-2 text-black"
                            href="/collabs/item2"
                          >
                            plaantik-x-gg
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <Link
                    className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                      isActive("/policies") ? "text-white " : ""
                    }`}
                    href="/policies"
                  >
                    Policies
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </Section>
      </div>

      {/* Search bar */}
      {isSearch && (
        <div
          className={`bg-[#FBDD02] transition-transform duration-700 ease-in-out absolute z-10 w-full py-3 ${
            isSearch ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ top: 0 }}
        >
          <div className="flex items-center justify-center gap-2">
            <input
              type="search"
              className="w-[450px] outline-none py-2  bg-transparent focus:border-b-2 focus:border-black border-b-2 border-gray-400"
              placeholder="Search"
            />
            <span
              className="text-[20px] text-gray-500 cursor-pointer"
              onClick={() => setIsSearch(false)} // Close the search when clicked
            >
              <RxCross2 />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NabVar;
