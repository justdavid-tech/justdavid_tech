import React from "react";
import { MapPin, Target, Users, TrendingUp, CheckCircle, ArrowRight, MessageCircle, Search } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { HashLink } from "react-router-hash-link";


const LocalSEO = () => {

  const handleWhatsApp = () => {
    const phone = "2349039977439"; // change to your number
    const message = "Hello! I want a free Local SEO audit.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  };
  
  return (
    <>
    <Navbar />
    <section className="relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#e67e22] opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#e67e22] opacity-10 blur-3xl animate-ping"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
  {/* Glowing Background Circles */}
  <div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[200px] opacity-20 animate-pulse"></div>
  <div
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[170px] opacity-20 animate-pulse"
    style={{ animationDelay: '1.3s' }}
  ></div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* TEXT CONTENT */}
      <div>
        <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Local SEO Services
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Dominate Local Search &  
          <span className="text-[#e67e22]"> Attract Real Customers</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Get your business in front of nearby customers actively searching for your services.  
          We optimize your local presence to drive calls, visits, and sales with proven SEO strategies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <HashLink smooth to ="/contact#ContactForm" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
            Boost My Rankings <ArrowRight size={20} />
          </HashLink>
          <button
  onClick={handleWhatsApp}
  className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
>
  <MessageCircle size={20} /> Free Local SEO Audit
</button>

        </div>

        {/* Trust bullets */}
        <div className="flex items-center gap-8 text-sm text-gray-400 mt-10">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#e67e22]" />
            <span>Google Maps Optimization</span>
          </div>
          <div className="flex items-center gap-2">
            <Search size={18} className="text-[#e67e22]" />
            <span>Local Keyword Targeting</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-[#e67e22]" />
            <span>Higher Local Rankings</span>
          </div>
        </div>
      </div>

      {/* IMAGE / GLOWING VISUAL */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="/images/localseo.png"
          alt="Local SEO Optimization"
          className="relative rounded-3xl shadow-[0px_0px_50px_rgba(230,126,34,0.25)]"
        />
      </div>

    </div>
  </div>
</section>


      {/* What We Do */}
      <div className="relative z-10 bg-white text-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What’s Included in Our <span className="text-[#e67e22]">Local SEO</span> Package
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you run a restaurant, salon, or service business, we help you rank locally and stand out to nearby customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <MapPin className="w-10 h-10 text-[#e67e22]" />,
              title: "Google My Business Optimization",
              text: "Setup, optimize, and manage your GMB profile for maximum visibility.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#e67e22]" />,
              title: "Local Citations",
              text: "Consistent listings across directories to improve your local authority.",
            },
            {
              icon: <Target className="w-10 h-10 text-[#e67e22]" />,
              title: "Local Keyword Targeting",
              text: "We identify and target high-intent local keywords that drive real leads.",
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-[#e67e22]" />,
              title: "Review Management",
              text: "Build trust and credibility by managing your reviews effectively.",
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-[#e67e22]" />,
              title: "Performance Tracking",
              text: "Monthly analytics reports showing ranking improvements and traffic growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center py-20 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Dominate Your <span className="text-[#e67e22]">Local Market?</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          Let’s build your local SEO strategy today and get your business ranking on Google Maps and local search results.
        </p>
        <HashLink smooth to ="/contact#ContactForm"
          className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        >
          Get Started
        </HashLink>
      </div>
    </section>
        <Footer />
    </>
  );
};

export default LocalSEO;
