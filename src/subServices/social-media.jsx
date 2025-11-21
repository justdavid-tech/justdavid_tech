import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  BarChart3,
  Target,
  Users,
  Send,
  TrendingUp,
  Search,
  ArrowRight,
  MessageCircle,

  CheckCircle,
} from "lucide-react";
import { IconBrandThreads, IconBrandTiktok, IconBrandX} from "@tabler/icons-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { HashLink } from "react-router-hash-link";


const SocialMediaMarketing = () => {

  const handleWhatsapp = () => {
    const phone = "2349039977439";
    const message = "Hello! I want a free social media strategy session.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
   
    window.open(url, "_blank");
  };


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
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
  {/* Glowing Brand Circles */}
  <div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[200px] opacity-20 animate-pulse"></div>
  <div
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[170px] opacity-20 animate-pulse"
    style={{ animationDelay: '1.2s' }}
  ></div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-14 items-center">
      
      {/* TEXT SECTION */}
      <div>
        <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Social Media Marketing
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Build Engagement.  
          Increase Followers.  
          <span className="text-[#e67e22]"> Grow Your Brand.</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Turn your social media pages into powerful marketing machines.  
          We create strategic content, manage your pages, run targeted ads,  
          and help you connect with the audience that matters most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <HashLink smooth to ="/contact" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
            Boost My Socials <ArrowRight size={20} />
          </HashLink>
          <button onClick={handleWhatsapp} className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
            <MessageCircle size={20} /> Free Strategy Session
          </button>
        </div>

        {/* SOCIAL MEDIA HIGHLIGHTS */}
        <div className="flex items-center gap-8 mt-10 flex-wrap text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-[#e67e22]" />
            <span>Content Creation</span>
          </div>
          <div className="flex items-center gap-2">
            <Search size={18} className="text-[#e67e22]" />
            <span>Ad Campaign Management</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 size={18} className="text-[#e67e22]" />
            <span>Analytics & Strategy</span>
          </div>
        </div>
      </div>

      {/* HERO VISUAL */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="/images/socialmedia.png"
          alt="Social Media Marketing"
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
            { icon: <Linkedin className="w-10 h-10 text-[#e67e22]" />, label: "LinkedIn" },
            { icon: <Youtube className="w-10 h-10 text-[#e67e22]" />, label: "YouTube" },
            { icon: <IconBrandTiktok className="w-10 h-10 text-[#e67e22]" />, label: "Tiktok" },
            { icon: <IconBrandThreads className="w-10 h-10 text-[#e67e22]" />, label: "Threads" },
            { icon: <IconBrandX className="w-10 h-10 text-[#e67e22]" />, label: "X/Twitter" },
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
          href="/contact" onClick={handleWhatsapp}
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
