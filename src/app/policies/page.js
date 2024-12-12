import Image from "next/image";
import React from "react";
import pp from "@/asstes/gorurghash-x-cheez/pp.jpg";
import pe from "@/asstes/gorurghash-x-cheez/pe.jpg";
import pd from "@/asstes/gorurghash-x-cheez/pd.png";
import Link from "next/link";
export const metadata = {
  title: "Gorur Ghash - Polices",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

const Policies = () => {
  return (
    <div>
      <div className="grid grid-cols-3 px-4 gap-12 max-w-screen-lg mx-auto mt-4">
        <Link href="/policies/refund-returns">
          <div>
            <Image src={pp} alt="image"></Image>
          </div>
        </Link>
        <Link href="/policies/refund-returns">
          <div>
            <Image src={pe} alt="image"></Image>
          </div>
        </Link>
        <Link href="/policies/refund-returns">
          <div>
            <Image src={pd} alt="image"></Image>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Policies;
