import React from "react";
import {
  Rocket,
  Globe,
  Megaphone,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Mail,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const DigitalMarketing = () => {
  return (
    <>
    <Navbar />
    <section className="relative overflow-hidden">
      {/* ====== Animated Background ====== */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e67e22] opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#e67e22] opacity-10 blur-3xl rounded-full animate-ping"></div>
      </div>

      {/* ====== Hero Section ====== */}
      <div className="relative z-10 text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Powerful <span className="text-[#e67e22]">Digital Marketing</span> Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Drive growth, visibility, and engagement with strategies tailored to your business.  
          Let’s help your brand thrive online.
        </p>
      </div>

      {/* ====== Overview Section ====== */}
      <div className="relative z-10 bg-white text-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Your Business Needs <span className="text-[#e67e22]">Digital Marketing</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            In today’s digital era, your audience lives online.  
            We combine creativity, strategy, and data to make sure your brand stands out across search engines, social platforms, and beyond.
          </p>
        </div>

        {/* ====== Service Grid ====== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Globe className="w-10 h-10 text-[#e67e22]" />,
              title: "Search Engine Optimization (SEO)",
              text: "Rank higher and attract quality organic traffic through smart SEO strategies.",
            },
            {
              icon: <Megaphone className="w-10 h-10 text-[#e67e22]" />,
              title: "Social Media Marketing",
              text: "Build communities and connect with your audience across Facebook, Instagram, LinkedIn, and more.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-[#e67e22]" />,
              title: "Pay-Per-Click (PPC) Advertising",
              text: "Launch ROI-driven ad campaigns that convert clicks into customers.",
            },
            {
              icon: <Mail className="w-10 h-10 text-[#e67e22]" />,
              title: "Email Marketing",
              text: "Stay top-of-mind with personalized email campaigns and automated funnels.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#e67e22]" />,
              title: "Content Marketing",
              text: "Engage and educate with content that positions your brand as an authority.",
            },
            {
              icon: <Target className="w-10 h-10 text-[#e67e22]" />,
              title: "Brand Strategy & Consulting",
              text: "Define your voice, sharpen your messaging, and align all marketing channels to your goals.",
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

      {/* ====== Benefits Section ====== */}
      <div className="relative z-10 bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You’ll <span className="text-[#e67e22]">Gain</span> from Working With Us
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Every strategy is tailored to deliver measurable growth and long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increased Website Traffic & Leads",
            "Improved Search Engine Rankings",
            "Stronger Brand Recognition",
            "Higher Engagement on Social Media",
            "Better ROI on Ad Spend",
            "Consistent Business Growth",
          ].map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 p-5 rounded-lg hover:border-[#e67e22] transition-all"
            >
              <CheckCircle className="w-6 h-6 text-[#e67e22]" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ====== Call to Action ====== */}
      <div className="relative z-10 text-center py-20 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Elevate Your <span className="text-[#e67e22]">Digital Presence</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          We’ll help your business attract, engage, and convert your ideal audience with data-backed marketing strategies.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
        >
          Get Started Today
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default DigitalMarketing;
