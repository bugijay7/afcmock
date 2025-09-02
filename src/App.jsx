import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import LatestService from './components/LatestService'
import Services from './components/Services'
import ServiceTimes from './components/ServiceTimes'
import EventPreview from './components/EventPreview'
import Footer from './components/Footer'


function App() {

  return (
       <div className='bg-gray-900'>
      <Navbar />
      <Hero />
      <Highlight />
      <LatestService />
      <Services />
      <ServiceTimes />
      <EventPreview />
      <Footer />
       </div>
  )
}

export default App
