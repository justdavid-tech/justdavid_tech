import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Palette, PenTool, Brush, Image, Sparkles } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const BrandServices = () => {
  return (
    <>
    <Navbar />
    <section className="relative bg-black text-white overflow-hidden py-20 px-6 md:px-16">
      {/* Animated Brand Color Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-[#e67e22] blur-3xl opacity-20 -translate-x-1/2"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting <span className="text-[#e67e22]">Brands</span> That Speak Louder
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your brand is more than just a logo, it’s the heartbeat of your business.  
            We help you create a memorable, consistent, and impactful brand identity that connects emotionally and drives results.
          </p>
        </div>

        {/* Brand Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo Design */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <Palette className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Logo Design</h3>
            <p className="text-gray-400 text-sm">
              A logo that captures your brand’s personality simple, timeless, and instantly recognizable.
            </p>
          </div>

          {/* Visual Identity */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <Brush className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visual Identity</h3>
            <p className="text-gray-400 text-sm">
              From color palettes to typography — we create a visual style that defines and strengthens your brand presence.
            </p>
          </div>

          {/* Brand Strategy */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <PenTool className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
            <p className="text-gray-400 text-sm">
              We map out your brand’s voice, vision, and value ensuring every detail aligns with your mission.
            </p>
          </div>

          {/* Rebranding */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <Image className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rebranding</h3>
            <p className="text-gray-400 text-sm">
              Transform your existing identity into a fresh, modern look while keeping your audience connected to your story.
            </p>
          </div>

          {/* Brand Guidelines */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <Sparkles className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand Guidelines</h3>
            <p className="text-gray-400 text-sm">
              Ensure consistency across all platforms with detailed brand manuals and design usage standards.
            </p>
          </div>

          {/* Content Branding */}
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#e67e22] transition-all duration-300">
            <PenTool className="w-10 h-10 text-[#e67e22] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Branding</h3>
            <p className="text-gray-400 text-sm">
              We craft cohesive social and digital content that reflects your brand tone and connects authentically with audiences.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build a <span className="text-[#e67e22]">Brand That Inspires?</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Let’s collaborate to bring your brand vision to life from concept to design to strategy.
          </p>
          <button className="bg-[#e67e22] hover:bg-[#cf6f1c] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>

  );
};

export default BrandServices;
