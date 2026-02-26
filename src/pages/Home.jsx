import OurServices from '../components/Service'
import FitnessInspirationSection from '../components/Gallery'
import StatsSection from '../components/Story'
import HeroCurasol from '../components/Curasol'
import HeroSection from '../components/Hero'
import ContactSection from '../components/Contact'
import FindUs from '../components/Findus'
import GallerySlider from '../components/GallerySlider'
import Review from "../components/Review"

const Home = () => {
    return (
        <div className='bg-black'>
            <HeroSection />
            <HeroCurasol />
            <OurServices />
            <FitnessInspirationSection />
            <GallerySlider />
            <StatsSection />
            <Review />
            <ContactSection />
            <FindUs />
        </div>
    )
}

export default Home
