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
import { HashLink } from "react-router-hash-link";

const DigitalMarketing = () => {

  const handleWhatsapp = () => {
    const phone = "2349039977439";
    const message = "Hello! I want a free Digital Marketing audit.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
   
    window.open(url, "_blank");
  };

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
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
  {/* Glowing Background Effects */}
  <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#e67e22] blur-[180px] opacity-20 animate-pulse"></div>
  <div 
    className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#e67e22] blur-[150px] opacity-20 animate-pulse" 
    style={{ animationDelay: "1.2s" }}
  ></div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* TEXT CONTENT */}
      <div>
        <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Digital Marketing Agency
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Grow Your Business With  
          <span className="text-[#e67e22]"> High-Impact Digital Marketing</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          We help brands attract more customers, increase visibility, and scale faster  
          using proven digital marketing strategies tailored for real business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <HashLink smooth to ="/contact#ContactForm" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
            Start Your Campaign
          </HashLink>

          <button onClick={handleWhatsapp} className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
            Free Strategy Call
          </button>
        </div>
      </div>

      {/* IMAGE WITH GLOW */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="/images/digitalmarketing.png"
          alt="Digital Marketing"
          className="relative rounded-3xl shadow-[0px_0px_50px_rgba(230,126,34,0.25)]"
        />
      </div>

    </div>
  </div>
</section>


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
