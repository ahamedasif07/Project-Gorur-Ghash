import Slider from "../Shared/slider/Slider";

const Hero = () => {
  const sliderData = [
    {
      id: 1,
      name: "Mountain View",
      description: "A beautiful mountain landscape during sunrise.",
      image:
        "https://i.ibb.co.com/q9LMMkj/Colorful-Illustrated-Online-Business-and-E-Commerce-Blog-Banner-2600-x-1260-px-1.png",
    },
    {
      id: 2,
      name: "Ocean Bliss",
      description: "A serene ocean view with a setting sun.",
      image: "https://i.ibb.co.com/LQftmMp/Winter-wear.png",
    },
    {
      id: 3,
      name: "Forest Retreat",
      description:
        "A peaceful forest with sunlight filtering through the trees.",
      image: "https://i.ibb.co.com/VWswqkC/5-3.png",
    },
  ];
  return (
    <div>
      <div className="md:mt-[50px] md:px-12 px-4 max-h-[700px] mx-auto pt-[30px] ">
        <Slider slides={sliderData}></Slider>
      </div>
    </div>
  );
};

export default Hero;
