import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Palette, PenTool, Brush, Image, Sparkles } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const BrandServices = () => {
  return (
    <>
    <Navbar />
    <section className="relative bg-black text-white overflow-hidden">

{/* HERO SECTION */}
<div className="relative pt-32 pb-28 px-6 md:px-16">

  {/* Glowing Animated Orb */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [1, 1.35, 1],
      opacity: [0.15, 0.35, 0.15] 
    }}
    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
    className="absolute top-0 left-1/2 w-[700px] h-[700px] rounded-full bg-[#e67e22] blur-[170px] opacity-30 -translate-x-1/2"
  />

  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <div className="inline-block bg-[#e67e22]/15 text-[#e67e22] px-5 py-2 rounded-full text-sm font-semibold mb-6">
      BRAND SERVICES
    </div>

    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
      Build a <span className="text-[#e67e22]">Powerful Brand</span> That Connects & Inspires
    </h1>

    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Your brand is more than visuals. It’s the personality, emotion, and experience your audience connects with.
      We craft brands that are timeless, strategic, and unforgettable.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <Link to ="/contact" className="bg-[#e67e22] hover:bg-[#cf6f1c] px-10 py-4 rounded-lg font-semibold shadow-lg shadow-[#e67e2260] transition-all cursor-pointer">
        Start Your Branding Project
      </Link>
      <Link to ="/portfolio" className="border-2 border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white px-10 py-4 rounded-lg font-semibold transition-all cursor-pointer">
        View Our Portfolio
      </Link>
    </div>
  </div>
</div>

{/* MAIN BRAND SERVICES SECTION */}
<section className="relative z-10 px-6 md:px-16">

  {/* Secondary Glow */}
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e67e22]/20 blur-[130px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto">
    
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Our <span className="text-[#e67e22]">Branding Services</span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Service Card Template */}
      {[
        {
          icon: Palette,
          title: "Logo Design",
          text: "Timeless, scalable, and memorable logos that reflect your brand’s true identity."
        },
        {
          icon: Brush,
          title: "Visual Identity",
          text: "Color palettes, typography, patterns, iconography your complete visual DNA."
        },
        {
          icon: PenTool,
          title: "Brand Strategy",
          text: "Voice, messaging, positioning, and communication guidelines built for clarity and impact."
        },
        {
          icon: Image,
          title: "Rebranding",
          text: "A modern transformation of your brand while preserving its core essence."
        },
        {
          icon: Sparkles,
          title: "Brand Guidelines",
          text: "A detailed rulebook ensuring consistent design use across all media."
        },
        {
          icon: PenTool,
          title: "Content Branding",
          text: "A cohesive content style for social media and digital platforms."
        }
      ].map((item, i) => (
        <div key={i} className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-[#e67e22] hover:shadow-[0_0_25px_#e67e2280] hover:scale-[1.02] transition-all duration-300">
          <item.icon className="w-10 h-10 text-[#e67e22] mb-4" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="relative z-10 px-6 py-10 md:px-16 bg-black/80 backdrop-blur-xl">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Build a <span className="text-[#e67e22]">Brand That Stands Out?</span>
    </h2>

    <p className="text-gray-300 max-w-2xl mx-auto mb-10">
      Let’s turn your vision into a strategic, unforgettable, and timeless brand identity.
    </p>

    <div className="flex justify-center mt-8">
  <button
    onClick={() =>
      window.open("https://wa.me/2349039977439?text=Hello%20I%20am%20interested%20in%20your%20branding%20services", "_blank")
    }
    className="bg-[#e67e22] hover:bg-[#cf6f1c] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#e67e2280] transition-all cursor-pointer"
  >
    Start Your Branding Journey
  </button>
</div>


  </div>
</section>
</section>
    <Footer />
    </>

  );
};

export default BrandServices;
