import React from 'react'
import believeImg from '../assets/worship.jpeg'
import missionImg from '../assets/online.jpeg'

function Highlight() {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 text-white">
        
        {/* Card 1 - Who We Are */}
        <div className="flex-1 p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-400">
            Who We Are
          </h1>
          <p className="leading-relaxed text-sm sm:text-base text-gray-100">
            Apostolic Faith Church is a Christ-centered community of believers devoted to worship,
            prayer, and living out the message of God’s love in our daily lives.  
            <br /><br />
            We are committed to nurturing spiritual growth, building strong relationships, and
            serving our community with compassion and humility.  
            <br /><br />
            Through the preaching of the Word, uplifting worship, and the power of prayer, we seek to
            draw closer to God and help others experience His transforming grace.  
            <br /><br />
            Our doors are open to everyone—whether you are seeking faith, new in your walk with
            Christ, or a lifelong believer—you are welcome here as part of our family in faith.
          </p>
        </div>

        {/* Card 2 - We Believe */}
        <div className="flex-1 p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-400">
            We Believe
          </h1>
           <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-100">
            Our mission is to reach souls for Christ, nurture spiritual growth, and serve our
            community with compassion and love, reflecting the teachings of Jesus in everything we
            do.
          </p>
          <img
            src={believeImg}
            alt="We Believe"
            className="w-full h-full sm:h-72 md:h-96 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Card 3 - Our Mission */}
        <div className="flex-1 p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-400">
            Our Mission
          </h1>
          <p className="text-sm sm:text-base leading-relaxed mb-4 text-gray-100">
            Our mission is to reach souls for Christ, nurture spiritual growth, and serve our
            community with compassion and love, reflecting the teachings of Jesus in everything we
            do.
          </p>
          <img
            src={missionImg}
            alt="Our Mission"
          className="w-full h-full sm:h-72 md:h-96 object-cover rounded-md shadow-md"
          />
        </div>

      </div>
    </div>
  )
}

export default Highlight
