import Catagories from "@/components/Home/Catagories";
import Hero from "@/components/Home/Hero";
import MainCatagoris from "@/components/Home/MainCatagoris";
import Image from "next/image";
import newAraivle from "../asstes/gorur-ghash-home/1-1.png";
import halfSlive from "../asstes/gorur-ghash-home/4.png";
import fullSlive from "../asstes/gorur-ghash-home/3-1.png";
import pents from "../asstes/gorur-ghash-home/pents.png";
import tees from "../asstes/gorur-ghash-home/2-1.png";
import tops from "../asstes/gorur-ghash-home/6.png";
import jacket from "../asstes/gorur-ghash-home/7.png";
import officeWare from "../asstes/gorur-ghash-home/8.png";
import caps from "../asstes/gorur-ghash-home/10.png";
import jewalary from "../asstes/gorur-ghash-home/jwelary.png";
import giftCards from "../asstes/gorur-ghash-home/11.png";
import stpeler from "../asstes/gorur-ghash-home/12.png";
import OnSell from "@/components/Home/OnSell";
import Delibery from "@/components/Home/Delibery";
import MetaData from "@/components/MetaData/MetaData";
import Modal from "@/components/Home/Modal";

export const metadata = {
  title: "Gorur Ghash - Home",
  description:
    "Welcome to the Gorur Ghash homepage where you can explore the latest fashion for men and women.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Modal />
      <MainCatagoris />
      <Catagories
        path1="/men"
        path2="/women"
        image1={newAraivle}
        image2={halfSlive}
      />
      <Catagories
        path1="/full-sleeve"
        path2="/pants"
        image1={fullSlive}
        image2={pents}
      />
      <Catagories path1="/tees" path2="/tops" image1={tees} image2={tops} />
      <Catagories
        path1="/jackets"
        path2="/office-wear"
        image1={jacket}
        image2={officeWare}
      />
      <Catagories
        path1="/caps"
        path2="/jewelry"
        image1={caps}
        image2={jewalary}
      />
      <Catagories
        path1="/gift-cards"
        path2="/specials"
        image1={giftCards}
        image2={stpeler}
      />
      <OnSell />
      <Delibery />
    </div>
  );
}
