import React, { useState } from "react";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import event4 from "../assets/event4.jpeg";
import event5 from "../assets/event5.jpeg";

const images = [event1, event2, event3, event4, event5];

function EventPreview() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="controls-carousel"
      className="relative max-w-[1200px] mx-auto px-4"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-30 flex items-center justify-center p-2 rounded-full bg-warning cursor-pointer group focus:outline-none"
      >
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-30 flex items-center justify-center p-2 rounded-full bg-warning cursor-pointer group focus:outline-none"
      >
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default EventPreview;
