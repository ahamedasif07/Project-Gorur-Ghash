import Catagories from "@/components/Home/Catagories";
import Hero from "@/components/Home/Hero";

import pents from "../asstes/gorur-ghash-home/pents.png";
import tees from "../asstes/gorur-ghash-home/2-1.png";
import tops from "../asstes/gorur-ghash-home/6.png";

import caps from "../asstes/gorur-ghash-home/10.png";
import jewalary from "../asstes/gorur-ghash-home/jwelary.png";
import giftCards from "../asstes/gorur-ghash-home/11.png";
import stpeler from "../asstes/gorur-ghash-home/12.png";
import OnSell from "@/components/Home/OnSell";
import Delibery from "@/components/Home/Delibery";
import menBaner from "../asstes/gorur-gash-home-2/menBaner.png";
import WomenBaner from "../asstes/gorur-gash-home-2/womenBaner.png";
import AccesoriesBaner from "../asstes/gorur-gash-home-2/accesoriesBaner.png";
import onSell from "../asstes/gorur-gash-home-2/onSell.png";
import HalfSleevs from "../asstes/gorur-gash-home-2/halfSleevs.png";
import FullSleevs from "../asstes/gorur-gash-home-2/FullSleevs.png";
import officeWare from "../asstes/gorur-gash-home-2/officeWare.png";
import WinterWare from "../asstes/gorur-gash-home-2/winterWare.png";

import Modal from "@/components/Home/Modal";
import MainCategoryBaner from "@/components/MainCategoryBaner/MainCategoryBaner";

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

      <MainCategoryBaner BanerImage={menBaner}></MainCategoryBaner>
      <MainCategoryBaner BanerImage={WomenBaner}></MainCategoryBaner>
      <MainCategoryBaner BanerImage={AccesoriesBaner}></MainCategoryBaner>
      <MainCategoryBaner BanerImage={onSell}></MainCategoryBaner>
      <Catagories
        path1="/full-sleeve"
        path2="/pants"
        image1={HalfSleevs}
        image2={FullSleevs}
      />
      <Catagories
        path1="/jackets"
        path2="/office-wear"
        image1={officeWare}
        image2={WinterWare}
      />

      <OnSell />
      <Delibery />
    </div>
  );
}
