import Image from "next/image";
import heroImg from "@/asstes/gorur-ghash-home/GG-Puja-SSL2.png";

const Hero = () => {
  return (
    <div>
      <div className="md:pt-[110px] max-w-[1200px] max-h-[680px] mx-auto pt-[30px] pb-5">
        <Image className="" src={heroImg} alt="image"></Image>
      </div>
    </div>
  );
};

export default Hero;
