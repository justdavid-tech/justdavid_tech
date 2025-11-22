import React, { useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Lux Furnitures",
      type: "Website",
      image: "/images/luxfurnitures.png",
      url: "https://luxfurnitures.vercel.app/",
      description: "Modern furniture e-commerce site"
    },
    {
      title: "Beauty Salon",
      type: "Website",
      image: "/images/beautysalon.png",
      url: "https://beautysalon-taupe.vercel.app/",
      description: "Interactive Beauty Salon site"
    },
    {
      title: "Dictionary App",
      type: "Website",
      image: "/images/dictionary.png",
      url: "https://otizgit.github.io/Dictionary-App/",
      description: "Comprehensive word reference"
    },
    {
      title: "Fleek",
      type: "Website",
      image: "/images/fleekb2c.png",
      url: "https://b2c.mercurjs.com/",
      description: "Ecommerce platform for modern shopping"
    },
    {
      title: "Excellence Academy",
      type: "Website",
      image: "/images/excellence.png",
      url: "https://Excellence.vercel.app",
      description: "Educational institution site"
    },
    {
      title: "Studio",
      type: "Website",
      image: "/images/studio.png",
      url: "https://umason-studio.vercel.app/",
      description: "Creative studio portfolio"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e67e22] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-[#e67e22]" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our Achievements
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-[#e67e22]">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <ExternalLink className="w-12 h-12 text-[#e67e22] mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 bg-[#e67e22] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {project.type}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 bg-gray-800">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e67e22] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View Portfolio Button */}
        <div className="text-center">
          <a href="/portfolio" className="inline-block group">
            <button className="relative bg-[#e67e22] text-white cursor-pointer px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#d35400] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Portfolio
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </a>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}