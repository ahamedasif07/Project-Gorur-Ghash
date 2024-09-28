"use client";
import React, { useState } from "react";
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

const NabVar = () => {
  const [isMenuOpen, setIsMenuOpne] = useState(false);
  const pathname = usePathname(); // Get current route

  const isActive = (path) => pathname === path; // Check if the current path matches

  return (
    <div className="bg-[#FBDD02] py-3">
      <Section>
        <div className="flex md:justify-around justify-between px-3 items-center">
          <Image
            className="w-[68px] md:w-[90px]"
            src={brandLogo}
            alt="Brand Logo"
          />
          {/* -----------main navbar start ------------- */}
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
              <div className="relative group bottom-[3px]">
                <Link
                  className={`uppercase  hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                    isActive("/collabs") ? "text-white border-b-2" : ""
                  }`}
                  href=""
                >
                  Collabs
                </Link>
                <ul className="absolute  left-0 hidden group-hover:block bg-gray-100 text-white px-2">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-700"
                      href="/collabs/item1"
                    >
                      Collab Item 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-700"
                      href="/collabs/item2"
                    >
                      Collab Item 2
                    </Link>
                  </li>
                </ul>
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

          {/* ---------------menu item icons open and closs --------------- */}
          <div className="hidden md:flex items-center gap-4">
            <h2 className="text-[18px] flex items-center font-bold text-[#54595F]">
              Cart/
              <span className="text-[22px] font-bold">
                <TbCurrencyTaka />
              </span>
              ,000
            </h2>
            <span className="text-[22px]">
              <BsHandbag />
            </span>
            <span className="text-[21px]">
              <FaUser />
            </span>
            <span className="text-[22px] text-white">
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

        {/* -----------------mini devide nav strat---------- */}
        {isMenuOpen && (
          <div className="md:hidden  px-3 pt-6 block">
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
              <Link
                className={`uppercase hover:text-white transition-all duration-300 ease-in-out text-[14px] font-bold ${
                  isActive("/collabs") ? "text-white " : ""
                }`}
                href="/collabs"
              >
                Collabs
              </Link>
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
        {/* -----------------mini devide nav end---------- */}
      </Section>
    </div>
  );
};

export default NabVar;
