import React from 'react'
import OurServices from '../components/Service'
import FitnessInspirationSection from '../components/Gallery'
import StatsSection from '../components/Story'
import HeroCurasol from '../components/Curasol'
import HeroSection from '../components/Hero'
import ContactSection from '../components/Contact'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HeroCurasol />
            <OurServices />
            <FitnessInspirationSection />
            <StatsSection />
            <ContactSection />
        </div>
    )
}

export default Home
