import React from 'react'
import heroImg from '../assets/hero-bg.jpg'

function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center mb-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-3xl">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Welcome to <span className="text-amber-400">Apostolic Faith Church</span>
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
    </div>
  )
}

export default Hero
