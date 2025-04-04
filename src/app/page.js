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

      <MainCategoryBaner path="/men" BanerImage={menBaner}></MainCategoryBaner>
      <MainCategoryBaner
        path="/women"
        BanerImage={WomenBaner}
      ></MainCategoryBaner>
      <MainCategoryBaner
        path="/accessories"
        BanerImage={AccesoriesBaner}
      ></MainCategoryBaner>
      <MainCategoryBaner
        path="/on-sell"
        BanerImage={onSell}
      ></MainCategoryBaner>
      <Catagories
        path1="/half-sleevs"
        path2="/full-sleevs"
        image1={HalfSleevs}
        image2={FullSleevs}
      />
      <Catagories
        path1="/office-ware"
        path2="/winter-ware"
        image1={officeWare}
        image2={WinterWare}
      />
      <Catagories path1="/tees" path2="/pants" image1={Tees} image2={pents} />

      <MainCategoryBaner
        path="/accessories/socks"
        BanerImage={snooks}
      ></MainCategoryBaner>
      <MainCategoryBaner
        path="/staples"
        BanerImage={steplers}
      ></MainCategoryBaner>
      <MainCategoryBaner
        path="/gift-card"
        BanerImage={giftCard}
      ></MainCategoryBaner>
      <Catagories
        path1="/women/co-ord-set"
        path2="/women/tops"
        image1={CoOdrSet}
        image2={tops}
      />
      <Catagories
        path1="/accessories/womens-jewelry"
        path2="/accessories/caps"
        image1={jewelry}
        image2={Caps}
      />

      <Delibery />
    </div>
  );
}
