import React, { useState } from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Sparkles, ArrowRight, X } from 'lucide-react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';
import '../App.css'

const Portfolio = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = {
    websites: [
      { id: 1, title: 'Lux Furnitures', description: 'Modern furniture e-commerce site', image: '/images/luxfurnitures.png', link: 'https://luxfurnitures.vercel.app/' },
      { id: 2, title: 'Beauty Salon', description: 'Interactive Beauty Salon site', image: '/images/beautysalon.png', link: 'https://beautysalon-taupe.vercel.app/' },
      { id: 3, title: 'Dictionary App', description: 'Comprehensive word reference', image: '/images/dictionary.png', link: 'https://otizgit.github.io/Dictionary-App/' },
      { id: 4, title: 'Fleek', description: 'Ecommerce platform for modern shopping', image: '/images/fleekb2c.png', link: 'https://b2c.mercurjs.com/' },
      { id: 5, title: 'Excellence Academy', description: 'Educational institution site', image: '/images/excellence.png', link: 'https://Excellence.vercel.app' },
      { id: 6, title: 'Studio', description: 'Creative studio portfolio', image: '/images/studio.png', link: 'https://umason-studio.vercel.app/' },
      { id: 7, title: 'Woody', description: 'Modern Furniture sales site', image: '/images/woody.png', link: 'https://woody-furnitures.vercel.app/' },
      { id: 8, title: 'Munchies', description: 'Food Product sales site', image: '/images/munchies.png', link: 'https://munchies-tinloof.vercel.app/' },
      { id: 9, title:'Weather App', description: 'Discover the weather situation in your current location', image: '/images/weatherapp.png', link: 'https://weatherapp-eta-pied.vercel.app/' },
      { id: 10, title: 'Rest Countries App', description: 'Details about all the countries', image: '/images/countries.png', link: 'https://rest-countries-app-chi.vercel.app/' },
    ],
    landing: [
      { id: 11, title: 'Suit Brand', description: 'Stunning Hero Section', image: '/can/suit.png' },
      { id: 12, title: 'Wrist Watch Brand', description: 'Wrist Watch sales showcase', image: '/can/wristwatch.png' },
      { id: 13, title: 'E-commerce Perfume Products', description: 'Perfume Products', image: '/can/perfume.png' },
      { id: 14, title: 'Future Landing', description: 'Random Design Inspiration', image: '/can/future.png' },
      { id: 15, title: 'Bike Rentals', description: 'Designed to rent bikes', image: '/can/Bicycle.png' },
      { id: 16, title: 'Burger Sales', description: 'Making burger sales easy', image: '/can/burger.png' },
      { id: 17, title: 'Antique Design', description: 'Design Inspiration', image: '/can/antique.png' },
      { id: 18, title: 'Car Rental', description: 'Car Rental Design', image: '/can/car rental.png' },
      { id: 19, title: 'Musical Kits', description: 'Musical kits sales', image: '/can/musical.png' },
      { id: 20, title: 'Shawarma Sales', description: 'Making Shawarma sales easy', image: '/can/Shawarma.png' },
      { id: 21, title: 'Mercedes Benz showroom', description: 'A Section Designed For Mercedes showroom', image: '/can/benz.png' },
      { id: 22, title: 'Xperia', description: 'Design Inspiration', image: '/can/xperia.png' },
      { id: 23, title: 'Adidas Showroom', description: 'Showcasing Adidas Designs', image: '/can/adidas.png' },
      { id: 24, title: 'Spring Fashion', description: 'Design For Clothing Brand', image: '/can/spring.png' },
      { id: 25, title: 'Scooter Design', description: 'Design Inspiration', image: '/can/scooter.png' },
      { id: 26, title: 'Taycan Showroom', description: 'Designed For Cars Showcase', image: '/can/taycaan.png' },
    ],
    thumbnails: [
      { id: 27, title: 'Risk Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics1.png' },
      { id: 28, title: 'Crypto Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics6.png' },
      { id: 29, title: 'Faceless Channel Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics3.png' },
      { id: 30, title: 'Shopify Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics4.png' },
      { id: 31, title: 'Business Strategy Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics5.png' },
      { id: 32, title: 'Social Media Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics2.png' },
    ],
    logos: [
      { id: 33, title: 'Transaction Logo', description: 'Logo', image: '/images/lg1.png' },
      { id: 34, title: 'Inspirational Logo', description: 'Logo', image: '/images/lggg (1).jpeg' },
      { id: 35, title: 'Communication Logo', description: 'Logo', image: '/images/lg3.png' },
      { id: 36, title: 'Transaction Logo', description: 'Logo', image: '/images/lg4.png' },
      { id: 37, title: 'Inspirational Logo', description: 'Logo', image: '/images/lggg (2).jpeg' },
      { id: 38, title: 'Kitchen Logo', description: 'Logo', image: '/images/lu (1).jpeg' },
      { id: 39, title: 'Communication Logo', description: 'Logo', image: '/images/lg6.png' },
      { id: 40, title: 'Inspirational Logo', description: 'Logo', image: '/images/lggg (3).jpeg' },
      { id: 41, title: 'Inspirational Logo', description: 'Logo', image: '/images/lu3.jpeg' },
      { id: 42, title: 'Business Logo', description: 'Logo', image: '/images/lu (2).jpeg' },
    ]
  };

  const getProjects = (category) => {
    if (expandedCategory === category) {
      return projects[category];
    }
    return projects[category].slice(0, 4);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const openImageModal = (project) => {
    setSelectedImage(project);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const Section = ({ id, title, description, bgColor, textColor, btnColor, btnHover }) => {
    const isWebsites = id === 'websites';
    
    return (
      <section id={id} className={`py-20 px-6 ${bgColor} ${textColor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <p className="text-xl opacity-80">{description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {getProjects(id).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                {isWebsites && project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-2 flex items-center gap-2">
                          {project.title}
                          <ExternalLink className="w-5 h-5" />
                        </h3>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-[#e67e22] text-sm mt-2 font-semibold">Click to view live site →</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div onClick={() => openImageModal(project)} className="cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-[#e67e22] text-sm mt-2 font-semibold">Click to view full image →</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => toggleCategory(id)}
              className={`${btnColor} text-white px-8 py-4 rounded-lg font-semibold ${btnHover} transition-colors inline-flex items-center gap-2`}
            >
              {expandedCategory === id ? 'Show Less' : `Explore All ${title}`} <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 md:p-40">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating design elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#e67e22] rounded-full filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#e67e22] rounded-full filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(230,126,34,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(230,126,34,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid" />
        </div>

        {/* Main Content with Enhanced Visual Hierarchy */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animated Brand Mark */}
          <div className="relative inline-block mb-8">
            <div className="inline-flex items-center gap-2 bg-[#e67e22]/20 text-[#e67e22] px-6 py-2 rounded-full font-semibold mb-6 text-sm backdrop-blur-sm">
              <Sparkles size={16} />
              PORTFOLIO
            </div>
            <div className="absolute -inset-4 bg-[#e67e22] rounded-full opacity-20 blur-xl animate-ping" style={{animationDuration: '3s'}} />
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2 tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Justdavid_
                <span className="text-[#e67e22] drop-shadow-2xl">tech</span>
              </h1>
            </div>
            
            {/* Animated cursor */}
            <div className="absolute -right-4 bottom-2 w-1 h-12 sm:h-16 bg-[#e67e22] animate-blink" />
          </div>

          {/* Dynamic Tagline with Sequential Animation */}
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>Crafting</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.3s'}}>digital</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.5s'}}>experiences</span>{' '}
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.7s'}}>through</span>
            </p>
            
            {/* Animated Services Carousel */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {[
                "web development",
                "web design",
                "business website",
                "e-commerce website",
                "mobile app development",
                "landing pages",
                "web maintenance",
                "seo services",
                "local seo services",
                "digital marketing",
                "social media marketing",
                "branding services",
                "thumbnails",
                "logos"
              ].map((service, index) => (
                <span
                  key={service}
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-[#e67e22] font-semibold text-xs sm:text-sm md:text-base animate-float"
                  style={{
                    animationDelay: `${0.9 + index * 0.2}s`,
                    animationDuration: `${1.5 + index * 0.2}s`
                  }}
                >
                  <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-2 animate-pulse" />
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive CTA */}
          <div className="animate-fade-in-up" style={{animationDelay: '1.7s'}}>
            <Link to="/contact" className="bg-[#e67e22] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#e67e22] rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Dynamic Sections */}
      <Section id="websites" title="Websites" description="Full-featured web experiences that drive results. Click any project to explore the live website." bgColor="bg-white" textColor="text-black" btnColor="bg-black" btnHover="hover:bg-gray-800" />
      <Section id="landing" title="Landing Pages" description="Hero sections designed to convert visitors into customers. Click to view full image." bgColor="bg-black" textColor="text-white" btnColor="bg-[#e67e22]" btnHover="hover:bg-[#d35400]" />
      <Section id="thumbnails" title="YouTube Thumbnails" description="Click-worthy designs that boost your video views. Click to view full image." bgColor="bg-white" textColor="text-black" btnColor="bg-black" btnHover="hover:bg-gray-800" />
      <Section id="logos" title="Logos" description="Brand identities that leave lasting impressions. Click to view full image." bgColor="bg-black" textColor="text-white" btnColor="bg-[#e67e22]" btnHover="hover:bg-[#d35400]" />

      {/* Warning Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-[#e67e22] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-[#e67e22]">⚠️</span> Important Notice
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              All projects displayed in this portfolio were created for specific clients and reflect their unique requirements.
              <strong className="text-black"> Please do not reproduce or include any of these works in your own portfolio.</strong>
              Each design is tailored to the client's brand and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>
          
          <div className="max-w-7xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400 text-base sm:text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default Portfolio;