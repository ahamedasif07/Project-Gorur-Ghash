import Catagories from "@/components/Home/Catagories";
import Hero from "@/components/Home/Hero";

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
import Tees from "../asstes/gorur-gash-home-2/tees.png";
import pents from "../asstes/gorur-gash-home-2/pents.png";
import snooks from "../asstes/gorur-gash-home-2/snooks.png";
import steplers from "../asstes/gorur-gash-home-2/steplers.png";
import giftCard from "../asstes/gorur-gash-home-2/giftCard.png";
import CoOdrSet from "../asstes/gorur-gash-home-2/co-ord.png";
import Caps from "../asstes/gorur-gash-home-2/caps.png";
import jewelry from "../asstes/gorur-gash-home-2/jewelry.png";
import tops from "../asstes/gorur-gash-home-2/tops.png";

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
      {/* <Modal /> */}

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
      <Catagories
        path1="/jackets"
        path2="/office-wear"
        image1={Tees}
        image2={pents}
      />
      <MainCategoryBaner BanerImage={snooks}></MainCategoryBaner>
      <MainCategoryBaner BanerImage={steplers}></MainCategoryBaner>
      <MainCategoryBaner BanerImage={giftCard}></MainCategoryBaner>
      <Catagories
        path1="/jackets"
        path2="/office-wear"
        image1={CoOdrSet}
        image2={tops}
      />
      <Catagories
        path1="/jackets"
        path2="/office-wear"
        image1={jewelry}
        image2={Caps}
      />

      <Delibery />
    </div>
  );
}
