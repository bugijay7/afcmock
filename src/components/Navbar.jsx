import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // for hamburger & close icons
import logo from '../assets/logo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Contact Bar */}
      <nav className="bg-white">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
          {/* Logo + Name */}
          <a href="/" className="flex items-center space-x-3">
            <img 
              src={logo}
              className="h-12 w-12 rounded-full"
              alt="Apostolic Faith Church Logo"
            />
            <span className="text-gray-900 text-xl sm:text-2xl font-bold">
              Apostolic Faith Church kiambaa
            </span>
          </a>

          {/* Contact + CTA (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+254722850169" className="text-sm font-semibold text-gray-900 hover:text-amber-700 transition">
              +254 722 850 169
            </a>
            <a href="mailto:kiambaaafc@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-amber-700 transition">
              kiambaaafc@gmail.com
            </a>
            <button 
              onClick={() => window.location.href = "/give"} 
              className="px-4 py-2 text-sm font-medium text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition"
            >
              Give
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Main Navigation */}
        <div className="bg-gray-50 ">
          <div className="max-w-screen-xl mx-auto px-4 py-3">
            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center space-x-8 text-sm font-medium">
              <li><a href="/" className="text-gray-900 hover:text-amber-700">Home</a></li>
              <li><a href="/about" className="text-gray-900 hover:text-amber-700">About Us</a></li>
              <li><a href="/ministries" className="text-gray-900 hover:text-amber-700">Ministries</a></li>
              <li><a href="/sermons" className="text-gray-900 hover:text-amber-700">Sermons</a></li>
              <li><a href="/events" className="text-gray-900 hover:text-amber-700">Events</a></li>
              <li><a href="/resources" className="text-gray-900 hover:text-amber-700">Resources</a></li>
              <li><a href="/contact" className="text-gray-900 hover:text-amber-700">Contact</a></li>
            </ul>

            {/* Mobile Dropdown */}
            {isOpen && (
              <ul className="flex flex-col space-y-4 mt-4 md:hidden text-sm font-medium animate-slide-down">
                <li><a href="/" className="block text-gray-900 hover:text-amber-700">Home</a></li>
                <li><a href="/about" className="block text-gray-900 hover:text-amber-700">About Us</a></li>
                <li><a href="/ministries" className="block text-gray-900 hover:text-amber-700">Ministries</a></li>
                <li><a href="/sermons" className="block text-gray-900 hover:text-amber-700">Sermons</a></li>
                <li><a href="/events" className="block text-gray-900 hover:text-amber-700">Events</a></li>
                <li><a href="/resources" className="block text-gray-900 hover:text-amber-700">Resources</a></li>
                <li><a href="/contact" className="block text-gray-900 hover:text-amber-700">Contact</a></li>
                <li>
                  <button 
                    onClick={() => window.location.href = "/give"} 
                    className="w-full text-left px-4 py-2 font-medium text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition"
                  >
                    Give
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
