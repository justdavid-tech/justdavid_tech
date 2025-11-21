import React, { useState } from "react";
import { Monitor, Code, Smartphone, Palette, ArrowRight, Search, ShoppingCart, Share2, Wrench, TrendingUp, PenTool, ChevronDown, ChevronUp } from "lucide-react";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      id: 1,
      icon: Monitor,
      title: "Website Design",
      description: "Creating visually appealing and responsive website layouts with user-friendly interfaces and modern designs to enhance user experience.",
      features: ["Responsive Design", "UI/UX Focused", "Modern Aesthetics"],
      color: "from-blue-500 to-cyan-500",
      link: "/services/web-design"
    },
    {
      id: 2,
      icon: Code,
      title: "Website Development",
      description: "Building fully functional websites with clean code, fast load times, scalability, and compatibility across all devices and browsers.",
      features: ["Clean Code", "Fast Performance", "Cross-Browser"],
      color: "from-purple-500 to-pink-500",
      link: "/services/web-development"
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Developing mobile applications for Android and iOS platforms with smooth performance, attractive design, and user-focused features.",
      features: ["iOS & Android", "Smooth UX", "Native Feel"],
      color: "from-green-500 to-emerald-500",
      link: "/services/mobile-app"
    },
    {
      id: 4,
      icon: Palette,
      title: "Branding",
      description: "Designing logos, brand identities, and marketing materials that reflect your clients' values and help their businesses stand out.",
      features: ["Logo Design", "Brand Identity", "Marketing Assets"],
      color: "from-orange-500 to-red-500",
      link: "/services/branding"
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "E-commerce Website",
      description: "Custom online stores with secure payment gateways, inventory management, and seamless checkout experiences that drive sales.",
      features: ["Payment Gateway", "Product Catalog", "Shopping Cart"],
      color: "from-indigo-500 to-purple-500",
      link: "/services/ecommerce"
    },
    {
      id: 6,
      icon: Search,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve your website's visibility, ranking, and organic traffic on search engines.",
      features: ["Keyword Research", "On-Page SEO", "Link Building"],
      color: "from-yellow-500 to-orange-500",
      link: "/services/seo"
    },
    {
      id: 7,
      icon: Search,
      title: "Local SEO Services",
      description: "Target local customers with optimized Google My Business, local citations, and location-based search strategies.",
      features: ["Google My Business", "Local Citations", "Reviews"],
      color: "from-teal-500 to-cyan-500",
      link: "/services/local-seo"
    },
    {
      id: 8,
      icon: Share2,
      title: "Digital Marketing",
      description: "Strategic online marketing campaigns including PPC, email marketing, and content marketing to grow your business.",
      features: ["PPC Campaigns", "Email Marketing", "Analytics"],
      color: "from-pink-500 to-rose-500",
      link: "/services/digital-marketing"
    },
    {
      id: 9,
      icon: TrendingUp,
      title: "Social Media Management",
      description: "Build and engage your audience across social platforms with compelling content, scheduling, and community management.",
      features: ["Content Creation", "Scheduling", "Engagement"],
      color: "from-blue-600 to-indigo-600",
      link: "/services/social-media"
    },
    {
      id: 10,
      icon: Wrench,
      title: "Web Maintenance",
      description: "Keep your website running smoothly with regular updates, security patches, backups, and technical support.",
      features: ["Updates", "Security", "Backups"],
      color: "from-gray-600 to-gray-800",
      link: "/services/maintenance"
    },
    {
      id: 11,
      icon: Monitor,
      title: "Business Website",
      description: "Professional corporate websites that establish credibility, showcase your services, and generate quality leads for your business.",
      features: ["Corporate Design", "Lead Generation", "CMS Integration"],
      color: "#e67e22",
      link: "/services/business"
    }
  ];

  // Show only first 4 services initially
  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="services py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="services">
      {/* Animated Background Elements */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#e67e22]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#e67e22]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="section-title achievement-title py-4 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4" style={{color: "#000"}}>Our Services</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Comprehensive digital solutions tailored to elevate your business and bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#e67e22]/30 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e67e22]/0 to-[#e67e22]/0 group-hover:from-[#e67e22]/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-4 sm:mb-6 inline-flex">
                    <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#e67e22] ${service.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-[#e67e22] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full group-hover:bg-[#e67e22]/10 group-hover:text-[#e67e22] transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#e67e22] text-sm sm:text-base font-semibold group/link hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#e67e22]/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center cursor-pointer gap-2 bg-[#e67e22] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {showAll ? (
              <>
                Show Less Services
                <ChevronUp size={20} className="animate-bounce" />
              </>
            ) : (
              <>
                Explore All {services.length} Services
                <ChevronDown size={20} className="animate-bounce" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;