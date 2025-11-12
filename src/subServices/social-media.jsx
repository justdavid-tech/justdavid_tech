import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  BarChart3,
  Target,
  Users,
  Send,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SocialMediaMarketing = () => {
  return (
    <>
    <Navbar />
    <section className="relative overflow-hidden">
      {/* ====== Animated Background ====== */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#e67e22] opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-[#e67e22] opacity-10 blur-3xl rounded-full animate-ping"></div>
      </div>

      {/* ====== Hero Section ====== */}
      <div className="relative z-10 text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Creative <span className="text-[#e67e22]">Social Media Marketing</span> That Converts
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Build your brand, grow your audience, and drive engagement with smart social media strategies designed for impact.
        </p>
      </div>

      {/* ====== Overview Section ====== */}
      <div className="relative z-10 bg-white text-black py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-[#e67e22]">Social Media Marketing</span> Matters
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Social media isn’t just about posting, it’s about connecting, storytelling, and growing a loyal community.  
            I help brands turn followers into fans and engagement into measurable business results.
          </p>
        </div>

        {/* ====== Platform Highlights ====== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {[
            { icon: <Instagram className="w-10 h-10 text-[#e67e22]" />, label: "Instagram" },
            { icon: <Facebook className="w-10 h-10 text-[#e67e22]" />, label: "Facebook" },
            { icon: <Twitter className="w-10 h-10 text-[#e67e22]" />, label: "X / Twitter" },
            { icon: <Linkedin className="w-10 h-10 text-[#e67e22]" />, label: "LinkedIn" },
            { icon: <Youtube className="w-10 h-10 text-[#e67e22]" />, label: "YouTube" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.label}</h3>
            </div>
          ))}
        </div>

        {/* ====== Strategy Breakdown ====== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-10 h-10 text-[#e67e22]" />,
              title: "Audience Research",
              text: "We identify your ideal customers and understand their behaviors to tailor effective campaigns.",
            },
            {
              icon: <Send className="w-10 h-10 text-[#e67e22]" />,
              title: "Content Creation & Posting",
              text: "We create scroll-stopping visuals, videos, and captions that resonate with your brand.",
            },
            {
              icon: <Target className="w-10 h-10 text-[#e67e22]" />,
              title: "Paid Advertising",
              text: "Targeted ads to increase reach, conversions, and awareness across platforms.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-[#e67e22]" />,
              title: "Analytics & Optimization",
              text: "We track metrics and continuously refine campaigns for the best performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== Results/Benefits Section ====== */}
      <div className="relative z-10 bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You’ll <span className="text-[#e67e22]">Gain</span> With My Strategy
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Get measurable growth, more followers, and stronger brand engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Increased brand visibility & followers",
            "Better content engagement",
            "Targeted ad campaigns that convert",
            "Improved social credibility & trust",
            "Consistent content calendar",
            "Detailed analytics reports",
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
          Let’s Grow Your <span className="text-[#e67e22]">Social Media</span> Presence
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          From strategy to execution, I’ll help your brand stand out, engage, and convert with powerful social media marketing.
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

export default SocialMediaMarketing;
