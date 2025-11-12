import React, { useState } from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Portfolio = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const projects = {
    websites: [
      { id: 1, title: 'E-commerce Platform', description: 'Full-stack online store', image: '/can/hair.png' },
      { id: 2, title: 'Restaurant Website', description: 'Modern dining experience', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Restaurant+Web' },
      { id: 3, title: 'Portfolio Site', description: 'Creative agency showcase', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Portfolio+Site' },
      { id: 4, title: 'SaaS Dashboard', description: 'Analytics platform', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=SaaS+Dashboard' },
      { id: 5, title: 'Blog Platform', description: 'Content management system', image: 'https://via.placeholder.com/400x300/2c3e50/ffffff?text=Blog+Platform' },
      { id: 6, title: 'Fitness App', description: 'Health tracking website', image: 'https://via.placeholder.com/400x300/34495e/ffffff?text=Fitness+App' },
    ],
    landing: [
      { id: 7, title: 'Suit Brand', description: 'Stunning Hero Section', image: '/can/suit.png' },
      { id: 8, title: 'Wrist Watch Brand', description: 'Wrist Watch sales showcase', image: '/can/wristwatch.png' },
      { id: 9, title: 'E-commerce Perfume Products ', description: 'Perfume Products', image: '/can/perfume.png' },
      { id: 10, title: 'Future Landing', description: 'Random Design Inspiration', image: '/can/future.png' },
      { id: 11, title: 'Bike Rentals', description: 'Designed to rent bikes', image: '/can/Bicycle.png' },
      { id: 12, title: 'Burger Sales', description: 'Making burger sales easy', image: '/can/burger.png' },
      { id: 13, title: 'Antique Design', description: 'Design Inspiration', image: '/can/antique.png' },
      { id: 14, title: 'Car Rental', description: 'Car Rental Design', image: '/can/car rental.png' },
      { id: 15, title: 'Musical Kits', description: 'Musical kits sales', image: '/can/musical.png' },
      { id: 16, title: 'Shawarma Sales', description: 'Making Shawarma sales easy', image: '/can/Shawarma.png' },
      { id: 17, title: 'Mercedes Bez showroom', description: 'A Section Designed For Mercedes showroom', image: '/can/benz.png' },
      { id: 18, title: 'Xperia', description: 'Design Inspiration', image: '/can/xperia.png' },
      { id: 19, title: 'Adiddas Showroom', description: 'Showcasing Adiddas Designs', image: '/can/adidas.png' },
      { id: 20, title: 'Spring Fashion', description: 'Design For Clothing Brand', image: '/can/spring.png' },
      { id: 21, title: 'Scooter Design', description: 'Design Inspiration', image: '/can/scooter.png' },
      { id: 22, title: 'Taycaan Showroom', description: 'Designed For Cars Showcase', image: '/can/taycaan.png' },
    ],
    thumbnails: [
      { id: 23, title: 'Risk Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics1.png' },
      { id: 24, title: 'Crypto Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics6.png' },
      { id: 25, title: 'Faceless Channel Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics3.png' },
      { id: 26, title: 'Shopify Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics4.png' },
      { id: 27, title: 'Business Strategy Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics5.png' },
      { id: 28, title: 'Social Media Thumbnail', description: 'Youtube Thumbnail', image: '/images/graphics2.png' },
    ],
    logos: [
      { id: 29, title: 'Transaction Logo', description: 'Logo', image: '/images/lg1.png' },
      { id: 30, title: 'Inspirational Logo ', description: 'Logo', image: '/images/lggg (1).jpeg' },
      { id: 31, title: 'Communication Logo', description: 'Logo', image: '/images/lg3.png' },
      { id: 32, title: 'Transaction Logo', description: 'Logo', image: '/images/lg4.png' },
      { id: 33, title: 'Inspirational Logo', description: 'Logo', image: '/images/lggg (2).jpeg' },
      { id: 34, title: 'Kitchen Logo', description: 'Logo', image: '/images/lu (1).jpeg' },
      { id: 35, title: 'Communication Logo', description: 'Logo', image: '/images/lg6.png' },
      { id: 36, title: 'Inspirational Logo', description: 'Logo', image: '/images/lggg (3).jpeg' },
      { id: 37, title: 'Inpirational Logo', description: 'Logo', image: '/images/lu3.jpeg' },
      { id: 34, title: 'Business Logo', description: 'Logo', image: '/images/lu (2).jpeg' },
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

  const Section = ({ id, title, description, bgColor, textColor, btnColor, btnHover }) => (
    <section id={id} className={`py-20 px-6 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl opacity-80">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {getProjects(id).map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
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

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Justdavid_<span className="text-[#e67e22]">tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Crafting digital experiences through websites, landing pages, thumbnails, and logos
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      <Section id="websites" title="Websites" description="Full-featured web experiences that drive results" bgColor="bg-white" textColor="text-black" btnColor="bg-black" btnHover="hover:bg-gray-800" />
      <Section id="landing" title="Landing Pages" description="Hero sections designed to convert visitors into customers" bgColor="bg-black" textColor="text-white" btnColor="bg-[#e67e22]" btnHover="hover:bg-[#d35400]" />
      <Section id="thumbnails" title="YouTube Thumbnails" description="Click-worthy designs that boost your video views" bgColor="bg-white" textColor="text-black" btnColor="bg-black" btnHover="hover:bg-gray-800" />
      <Section id="logos" title="Logos" description="Brand identities that leave lasting impressions" bgColor="bg-black" textColor="text-white" btnColor="bg-[#e67e22]" btnHover="hover:bg-[#d35400]" />

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
              Each design is tailored to the client’s brand and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </div>
    </>
  );
};

export default Portfolio;
