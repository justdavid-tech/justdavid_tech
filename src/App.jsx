import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Services from "./pages/services";

// Sub Services
import MobileAppDevelopment from "./subServices/mobileApp";
import BusinessWebsite from "./subServices/business";
import Ecommerce from "./subServices/ecommerceSolution";
import WebsiteMaintenance from "./subServices/maintenance";
import SeoServices from "./subServices/seo";
import LocalSEO from "./subServices/local-seo";
import DigitalMarketing from "./subServices/digital-marketing";
import SocialMediaMarketing from "./subServices/social-media";
import BrandServices from "./subServices/branding";
import WebDevelopmentServicePage from "./subServices/webdevelopment";
import WebsiteDesignServicePage from "./subServices/webdesign";

// Why Teach
import WhyITeach from './pages/whyteach';

// After navigating to a new link, scroll to the top of the page
import ScrollToTop from "./components/scrolltotop"; 

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

      {/* Sub-Service Pages */}
      <Route path="/services/mobile-app" element={<MobileAppDevelopment />} />
      <Route path="/services/business" element={<BusinessWebsite />} />
      <Route path="/services/ecommerce" element={<Ecommerce />} />
      <Route path="/services/maintenance" element={<WebsiteMaintenance />} />
      <Route path="/services/seo" element={<SeoServices />} />
      <Route path="/services/local-seo" element={<LocalSEO />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/social-media" element={<SocialMediaMarketing />} />
      <Route path="/services/branding" element={<BrandServices />} />
      <Route path="/services/web-development" element={<WebDevelopmentServicePage />} />
      <Route path="/services/web-design" element={<WebsiteDesignServicePage />} />

      {/* Why teach */}
      <Route path="/Why-I-Teach" element={<WhyITeach />} />

    </Routes>
    </>
  );
}

export default App;
1