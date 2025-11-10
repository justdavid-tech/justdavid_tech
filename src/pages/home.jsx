import Navbar from '../components/navbar';
import HeroSection from '../components/hero';
import ProfileSection from '../components/profile';
import ServicesSection from '../components/services';
import AboutSection from '../components/about';
import StatsSection from '../components/stats';
import BusinessGrowth from '../components/businessgrowth';
import PartnerAndWhySections from '../components/whychooseus';
import PortfolioSection from '../components/achievements';
import TestimonialsSection from '../components/testimonies';
import FAQSection from '../components/faq';
import ContactSection from '../components/contact';
import Footer from '../components/footer';

function Home() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <ProfileSection />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <BusinessGrowth />
    <PartnerAndWhySections />
    <PortfolioSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
     </>   
  )
}

export default Home;
