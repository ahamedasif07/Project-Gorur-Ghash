"use client";
import { useState, useEffect } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Auto-slide after 3 seconds if not manually controlled
  useEffect(() => {
    if (!isManual) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isManual, slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
    setIsManual(true); // Set to manual control on click
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    setIsManual(true); // Set to manual control on click
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsManual(true); // Set to manual control on click
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <div className="bg-black bg-opacity-50 text-white p-5 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
              <p>{slide.description}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Next and Previous Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-5  transform -translate-y-1/2 text-white bg-opacity-50 rounded-full p-2"
      >
        ❮
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-5  transform -translate-y-1/2 text-white bg-opacity-50 rounded-full p-2"
      >
        ❯
      </button>

      {/* Dots for manual navigation
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
