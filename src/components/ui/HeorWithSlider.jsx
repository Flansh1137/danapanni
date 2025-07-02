import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const sliderImages = [
  "https://cdn.pixabay.com/photo/2022/01/31/10/45/poor-6983197_640.jpg",
  "https://kettocdn.gumlet.io/media/campaign/385000/385989/image/609c8ee81cf78.jpeg?w=376&dpr=2.6",
  "https://thelivenagpur.com/wp-content/uploads/2023/10/1665998444_india.jpg",

];

const HeroWithSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual Navigation
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden h-[37rem] ">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 ">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="NGO Slide"
            className={` absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out  ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-40 " />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white text-black p-2 rounded-full"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/50 hover:bg-white text-black p-2 rounded-full"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Great futures are built
          <br />
          with a small charity
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          The world's largest social fundraising platform, optimized for your
          charity is a more easy way
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
            Donate now
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
          >
            <Play className="w-5 h-5" />
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroWithSlider;
