import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import StepsSection from '../components/StepsSection'
import CoursesSection from '../components/CoursesSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <StatsSection/>
        <StepsSection/>
        <CoursesSection/>
        <CTASection/>
        <Footer/>
    </div>
  )
}

export default Home