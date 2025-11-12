import React from "react";
import { Monitor, Code, Smartphone, Palette, ArrowRight, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Monitor,
      title: "Website Design",
      description: "Creating visually appealing and responsive website layouts with user-friendly interfaces and modern designs to enhance user experience.",
      features: ["Responsive Design", "UI/UX Focused", "Modern Aesthetics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Code,
      title: "Website Development",
      description: "Building fully functional websites with clean code, fast load times, scalability, and compatibility across all devices and browsers.",
      features: ["Clean Code", "Fast Performance", "Cross-Browser"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Developing mobile applications for Android and iOS platforms with smooth performance, attractive design, and user-focused features.",
      features: ["iOS & Android", "Smooth UX", "Native Feel"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Palette,
      title: "Branding",
      description: "Designing logos, brand identities, and marketing materials that reflect your clients' values and help their businesses stand out.",
      features: ["Logo Design", "Brand Identity", "Marketing Assets"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="services py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="services">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#e67e22]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#e67e22]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full font-semibold mb-4 text-sm">
            <Sparkles size={16} />
            WHAT WE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-[#e67e22]">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions tailored to elevate your business and bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#e67e22]/30 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e67e22]/0 to-[#e67e22]/0 group-hover:from-[#e67e22]/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-6 inline-flex">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#e67e22] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full group-hover:bg-[#e67e22]/10 group-hover:text-[#e67e22] transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-[#e67e22] font-semibold group/link hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#e67e22]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-600 text-lg">
              Need a custom solution?
            </p>
            <a
              href="/contact"
              className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Let's Talk <ArrowRight size={20} />
            </a>
          </div>
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