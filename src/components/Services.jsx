import React from 'react'

// Import images from assets
import worshipImg from '../assets/worship-service.jpg'
import prayerImg from '../assets/prayer.jpg'
import youthImg from '../assets/youth-ministry.jpg'
import outreachImg from '../assets/community-outreach.jpg'

function Services() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Section Header */}
        <h2 className="text-center text-5xl font-extrabold text-warning">
          Our Ministries
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-2xl font-bold tracking-tight text-white sm:text-2xl">
          Discover How We Serve God and Our Community
        </p>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* Worship Services */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="text-2xl font-semibold text-white max-lg:text-center">
                  Worship Services
                </p>
                <p className="mt-2 text-gray-400 max-lg:text-center">
                  Join us every Sunday for uplifting worship, biblical teaching, 
                  and a spirit-filled encounter with God. Services at 9 AM & 11 AM.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <img
                  alt="Worship service"
                  src={worshipImg}
                  className="w-full h-full object-cover px-0.5 py-0.5"
                />
              </div>
            </div>
          </div>

          {/* Prayer Meetings */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-2xl font-semibold text-white max-lg:text-center">
                  Prayer Meetings
                </p>
                <p className="mt-2 text-gray-400 max-lg:text-center">
                  Weekly prayer gatherings where we seek God’s presence 
                  and intercede for our families, church, and the world.
                </p>
              </div>
              <div className="flex justify-center px-8 sm:px-10 py-6">
                <img
                  alt="Prayer"
                  src={prayerImg}
                  className="w-full max-w-xs rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Youth Ministry */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-2xl font-semibold text-white max-lg:text-center">
                  Youth Ministry
                </p>
                <p className="mt-2 text-gray-400 max-lg:text-center">
                  Empowering the next generation through Bible study, fellowship, 
                  and events designed to help youth grow in faith.
                </p>
              </div>
              <div className="flex justify-center py-6">
                <img
                  alt="Youth ministry"
                  src={youthImg}
                  className="max-w-xs object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Community Outreach */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="text-2xl font-semibold text-white max-lg:text-center">
                  Community Outreach
                </p>
                <p className="mt-2 text-gray-400 max-lg:text-center">
                  We serve our community through food drives, missions, and 
                  acts of kindness—bringing the love of Christ to those in need.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <img
                  alt="Community outreach"
                  src={outreachImg}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
