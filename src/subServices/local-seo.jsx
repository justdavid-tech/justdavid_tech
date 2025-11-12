import React from "react";
import { MapPin, Target, Users, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const LocalSEO = () => {
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
      <div className="relative z-10 text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-[#e67e22]">Local SEO</span> Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Boost your visibility in local searches and bring real customers to
          your doorstep. Get optimized for “near me” results and Google Maps rankings.
        </p>
      </div>

      {/* What We Do */}
      <div className="relative z-10 bg-white text-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What’s Included in Our <span className="text-[#e67e22]">Local SEO</span> Package
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you run a restaurant, salon, or service business — we help you rank locally and stand out to nearby customers.
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
        <a
          href="/contact"
          className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        >
          Get Started
        </a>
      </div>
    </section>
    <div className="mt-10">
        <Footer />
    </div>

    </>
  );
};

export default LocalSEO;
