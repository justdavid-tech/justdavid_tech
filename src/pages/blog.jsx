import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../App.css";
import { HashLink } from "react-router-hash-link";

const Blog = () => {
  return (
    <>
      <Navbar />

      <br>
      </br><br></br><br></br>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden p-40">

        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e67e22] rounded-full opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#e67e22] rounded-full blur-3xl opacity-5 animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#e67e22] rounded-full blur-3xl opacity-5 animate-pulse-slower" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10">
          <div className="relative">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#e67e22] text-white text-xs sm:text-sm font-bold rounded-full animate-bounce">
              Building Something Big
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping" />
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute top-20 sm:top-20 left-4 right-4 sm:left-6 sm:right-6 max-w-md mx-auto">
          <div className="text-center mb-2">
            <span className="text-[#e67e22] text-xs sm:text-sm font-semibold">
              Blog Complete Progress
            </span>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-[#e67e22] h-1.5 sm:h-2 rounded-full animate-pulse transition-all duration-1000"
              style={{ width: "78%" }}
            />
          </div>

          <div className="text-center mt-1 sm:mt-2">
            <span className="text-gray-400 text-xs">Estimated completion: Soon™</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          
          {/* Title */}
          <div className="relative inline-block mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-200 font-bold mb-4 sm:mb-6 tracking-tight">
              Justdavid_
              <span className="text-[#e67e22] relative">
                tech
                <span className="absolute -top-0.5 -right-1 sm:-top-1 sm:-right-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-pulse">
                  ⚡
                </span>
              </span>
            </h1>

            {/* Blinking Cursor */}
            <div className="absolute -right-2 sm:-right-3 md:-right-4 bottom-1 sm:bottom-2 w-0.5 h-8 sm:h-12 md:h-16 bg-[#e67e22] animate-blink" />
          </div>

          {/* Hero Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Crafting digital experiences through{" "}
            <span className="text-[#e67e22] font-semibold animate-pulse">websites</span>,{" "}
            <span className="text-[#e67e22] font-semibold animate-pulse delay-200">landing pages</span>,{" "}
            <span className="text-[#e67e22] font-semibold animate-pulse delay-400">thumbnails</span>, and{" "}
            <span className="text-[#e67e22] font-semibold animate-pulse delay-600">logos</span>
          </p>

          {/* Secret Project Card */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#e67e22] rounded-full animate-pulse" />
              <span className="text-[#e67e22] font-bold text-sm sm:text-base md:text-lg">
                Secret Project in Progress
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#e67e22] rounded-full animate-pulse" />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              Something extraordinary is brewing behind the scenes. Stay tuned for the big reveal!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <HashLink
              to="/portfolio"
              className="group relative bg-[#e67e22] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#d35400] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#e67e22]/25 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Portfolio <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </HashLink>

            <HashLink
              smooth
              to="/contact#ContactForm"
              className="group border-2 border-[#e67e22] text-[#e67e22] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#e67e22] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              <span className="flex items-center gap-2 justify-center">
                Contact Me <span className="group-hover:rotate-90 transition-transform">↗</span>
              </span>
            </HashLink>
          </div>

          {/* Footer Stats */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
              <span>127 developers following this project</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e67e22] rounded-full animate-pulse" />
              <span>Launching Soon</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
