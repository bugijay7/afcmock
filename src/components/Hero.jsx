import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero3 from "../assets/hero3.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";

const images = [hero1, hero3, hero5, hero6, hero7];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center mb-16 overflow-hidden">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-3xl">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Welcome to <span className="text-amber-400">Apostolic Faith Church</span> Kiambaa
        </h1>

        <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200">
          A place where <span className="font-semibold text-white">everybody is somebody</span> in the eyes of God.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button className="px-6 py-3 text-base font-semibold text-white border bg-amber-600 rounded-lg shadow-lg hover:bg-amber-700 transition">
            Join Us
          </button>
          <button className="px-6 py-3 text-base font-semibold text-white border bg-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition">
            Watch Sermons
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-amber-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
