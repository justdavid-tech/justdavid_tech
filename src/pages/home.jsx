import Navbar from '../components/navbar';
import HeroSection from '../components/hero';
import ProfileSection from '../components/profile';
import ServicesSection from '../components/services';
import AboutMeSection from '../components/aboutSection';
import StatsSection from '../components/stats';
import BusinessGrowth from '../components/businessgrowth';
import PartnerAndWhySections from '../components/whychooseus';
import PortfolioSection from '../components/achievements';
import TestimonialsSection from '../components/testimonies';
import FAQSection from '../components/faq';
import Footer from '../components/footer';

function Home() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <ProfileSection />
    <ServicesSection />
    <AboutMeSection />
    <StatsSection />
    <BusinessGrowth />
    <PartnerAndWhySections />
    <PortfolioSection />
    <TestimonialsSection />
    <FAQSection />
    <Footer />
     </>   
  )
}

export default Home;
