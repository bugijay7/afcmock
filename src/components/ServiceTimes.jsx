import React from "react";

function ServiceTimes() {
  return (
    <section className="bg-gray-900 max-w-[1400px] mx-auto text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="text-3xl text-warning sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Service Times
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-blue-100">
          Join us as we gather in worship, prayer, and fellowship.  
          Everyone is welcome to be part of our family in Christ.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sunday Services */}
        <div className="bg-white text-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Sunday Services
          </h3>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-semibold">Youth Service:</span> 8:00 AM - 9:30 AM
            </li>
            <li>
              <span className="font-semibold">Morning Devotion:</span> 9:30 AM -10:30 AM
            </li>
            <li>
              <span className="font-semibold">Bible Study:</span> 10:00 AM - 10:30 AM
            </li>
            <li>
              <span className="font-semibold">Main Service:</span> 10:30 AM - 1:00 PM
            </li>
            <li>
              <span className="font-semibold">Children's Church:</span> 9:30 AM - 11:00 PM
            </li>
          </ul>
        </div>

        {/* Midweek Services */}
        <div className="bg-white text-blue-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Midweek Services
          </h3>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-semibold">Morning Service:</span> 5:00AM -  7:00 AM (Daily)
            </li>
            <li>
              <span className="font-semibold">Wednesday Fellowship:</span> 5:00PM - 6:30 PM
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceTimes;
