import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import brandLogo from "../../asstes/gorur-ghash-home/Header-1-102x42.png";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
const NabVar = () => {
  return (
    <div className="bg-[#FBDD02] py-3">
      <Section>
        <div className=" flex justify-around px-3 items-center ">
          <Image src={brandLogo} alt="image"></Image>
          <div>
            <ul className="flex gap-5 ">
              <Link className="uppercase text-[14px] font-bold" href="/">
                Home
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Women
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Men
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Kids
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Accessorice
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Accessorice
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Collabs
              </Link>
              <Link className="uppercase text-[14px] font-bold" href="/">
                Policies
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-[18px] flex  items-center font-bold text-[#54595F]">
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
        </div>
      </Section>
    </div>
  );
};

export default NabVar;
