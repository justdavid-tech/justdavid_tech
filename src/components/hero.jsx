import React from "react";
import "/styles.scss"; // ✅ relative import — make sure path is correct

const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden py-16 md:py-24">
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 hero-items">
        {/* Left Content */}
        <div className="hero-content text-center md:text-left md:w-1/2 space-y-6">
          {/* Badge */}
          <div className="hero-badge mx-auto md:mx-0">
            AVAILABLE FOR FREELANCE WORK
          </div>

          {/* Title */}
          <h1 className="hero-title text-3xl md:text-5xl font-bold leading-tight">
            Elevate Your Brand
            <br />
            <span className="gradient-text">With </span> Modern Websites
          </h1>

          {/* Description */}
          <p className="hero-description text-gray-600 md:text-base text-sm max-w-lg mx-auto md:mx-0">
            Full-stack developer and designer transforming complex ideas into
            elegant, user-centric solutions. Specializing in modern web
            technologies and creating experiences that drive results.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/portfolio" className="btn-primary-custom">
              View My Work
            </a>
            <a href="/contact" className="btn-secondary-custom">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-container relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <div className="hero-image-wrapper relative">
            <div className="hero-image-bg"></div>

            {/* Main Portrait */}
            <img
              src="/images/whiteBlackme.png"
              alt="Developer Portrait"
              className="hero-image relative w-64 md:w-80 object-cover"
            />

            {/* Floating Stats */}
            <div className="floating-element">
              <span>100%</span>
              <small>Client Satisfaction</small>
            </div>
            <div className="floating-element">
              <span>24/7</span>
              <small>Support Available</small>
            </div>
            <div className="floating-element">
              <span>⚡</span>
              <small>Fast Delivery</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
