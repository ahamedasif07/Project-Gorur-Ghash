import Hero from "@/components/Home/Hero";
import MainCatagoris from "@/components/Home/MainCatagoris";
import Image from "next/image";
export const metadata = {
  title: "Gorur Ghash - Home",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <MainCatagoris />
    </div>
  );
}
