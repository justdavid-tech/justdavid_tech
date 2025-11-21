import React from 'react';
import { Handshake, CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';

export default function PartnerAndWhySections() {
  const whyChooseFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "All-in-One Solution",
      description: "From branding to SEO, we handle everything under one roof."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that grow your business."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Trusted Partnership",
      description: "We treat your business like our own with transparency."
    }
  ];

  return (
    <>
      {/* Business Partner Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content with Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img
                  className="w-full h-auto rounded-2xl shadow-xl"
                  src="/images/partners.png"
                  alt="Business Partners collaborating"
                />
                {/* Decorative floating icon */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#e67e22] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                {/* Decorative background blur */}
                <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-[#e67e22] opacity-10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-[#e67e22] font-bold text-sm tracking-wider uppercase">
                  Relationship
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  We're Your Business Partner
                </h1>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in building partnerships, not customer acquisition.
                Above everything, all we do comes from a business owner's point of
                view, and we treat your organization as ours. Our processes, our
                prices, and our deliverables are clear to us. For the better part?
                You get the peace of mind that we will bend backwards in order to
                do whatever it takes to expand your business.
              </p>

              <a href="/contact" className="inline-block group">
                <button className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d35400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                  <span>Reach Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-700 font-bold text-sm tracking-wider uppercase">
                  Why
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[#e67e22]">Why Choose Us</span>
                </h1>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                All of our services are focused especially for companies that are
                looking to develop a strong online presence and also make their
                businesses stand out online. Also, all-in-one is our philosophy to
                make the lives of business owners simpler, it is for this reason
                that we offer a wide variety of services that complement each
                other such as the creation of Branding, Web Design, Digital
                Marketing, and SEO.
              </p>

              {/* Feature Cards */}
              <div className="grid gap-4 mt-8">
                {whyChooseFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e67e22] bg-opacity-10 flex items-center justify-center text-[#e67e22] group-hover:bg-opacity-20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center relative">
              <div className="relative">
                {/* Glowing effect behind lightbulb */}
                <div className="absolute inset-0 bg-[#e67e22] opacity-20 blur-3xl rounded-full animate-pulse"></div>
                
                <img
                  src="/images/depiction-human-brain-intellect-as-lightbulb-removebg-preview.png"
                  alt="Innovation and intelligent solutions"
                  className="relative w-full max-w-md h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating particles effect */}
                <div className="absolute top-1/4 -right-4 w-3 h-3 bg-[#e67e22] rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                <div className="absolute top-1/3 w-2 h-2 bg-[#e67e22] rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                <div className="absolute bottom-1/4 right-8 w-2.5 h-2.5 bg-[#e67e22] rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}