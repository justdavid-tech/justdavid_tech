import React, { useState, useEffect } from 'react';
import { 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconBrandX, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandThreads, 
  IconBrandTiktok, 
  IconBrandYoutube, 
  IconBrandWhatsapp,
  // IconHeart,
  IconUsers,
  IconRocket,
  IconSchool,
  IconCode,
  IconStar,
  IconTrendingUp,
  IconUsersGroup,
} from "@tabler/icons-react";
import '../App.css';

const WhyITeach = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: IconBrandGithub, url: '#', label: 'GitHub' },
    { icon: IconBrandLinkedin, url: '#', label: 'LinkedIn' },
    { icon: IconBrandX, url: '#', label: 'X (Twitter)' },
    { icon: IconBrandFacebook, url: '#', label: 'Facebook' },
    { icon: IconBrandInstagram, url: '#', label: 'Instagram' },
    { icon: IconBrandThreads, url: '#', label: 'Threads' },
    { icon: IconBrandTiktok, url: '#', label: 'TikTok' },
    { icon: IconBrandYoutube, url: '#', label: 'YouTube' },
    { icon: IconBrandWhatsapp, url: '#', label: 'WhatsApp' },
  ];

  const reasons = [
    {
      icon: IconUsersGroup,
      title: "Building Stronger Communities",
      description: "Great developers aren't built in isolation. By sharing knowledge daily, I'm helping create a supportive ecosystem where everyone grows together."
    },
    {
      icon: IconRocket,
      title: "Accelerating Growth",
      description: "Both juniors and seniors benefit from continuous learning. Juniors get foundational knowledge, seniors get new perspectives and stay updated."
    },
    // {
    //   icon: IconHeart,
    //   title: "Passion for Empowerment",
    //   description: "Nothing excites me more than seeing developers level up their skills and confidence. Your success stories fuel my daily commitment."
    // },
    {
      icon: IconUsers,
      title: "Bridging the Experience Gap",
      description: "I create content that helps juniors avoid common pitfalls while giving seniors advanced insights to solve complex problems efficiently."
    },
    {
      icon: IconSchool,
      title: "Lifelong Learning Mindset",
      description: "Teaching keeps me learning. Every tutorial forces me to research deeper, understand better, and stay curious about evolving technologies."
    },
    {
      icon: IconTrendingUp,
      title: "Elevating the Industry",
      description: "By raising the skill floor across our community, we collectively push the boundaries of what's possible in software development."
    }
  ];

  const stats = [
    { number: "Daily", label: "Consistent Tutorials" },
    { number: "All Levels", label: "Junior to Senior" },
    { number: "Community", label: "First Approach" },
    { number: "Real World", label: "Practical Focus" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e67e22] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-[#e67e22] rounded-2xl flex items-center justify-center transform rotate-6">
                <IconCode size={40} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <IconStar size={24} className="text-[#e67e22] fill-current" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e67e22] to-orange-300 bg-clip-text text-transparent">
            justdavid_tech
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Why I dedicate myself to daily coding tutorials and building our developer community
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 transition-all duration-500 hover:border-[#e67e22]/50 hover:transform hover:-translate-y-2 delay-${index * 100}`}
            >
              <div className="text-2xl font-bold text-[#e67e22] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`group p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#e67e22] transition-all duration-500 hover:transform hover:-translate-y-2 delay-${index * 150}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#e67e22]/20 rounded-xl mr-4 group-hover:bg-[#e67e22]/30 transition-colors">
                  <reason.icon size={32} className="text-[#e67e22]" />
                </div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className={`max-w-4xl mx-auto text-center mb-16 p-8 bg-gradient-to-r from-[#e67e22]/10 to-orange-500/10 rounded-3xl border border-[#e67e22]/20 backdrop-blur-sm transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <IconHeart size={48} className="mx-auto mb-4 text-[#e67e22]" />
          <h2 className="text-3xl font-bold mb-6">My Core Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            "To democratize quality coding education and foster a inclusive community where every developer, 
            regardless of experience level, can find support, inspiration, and practical knowledge to accelerate 
            their journey and build amazing things."
          </p>
        </div>

        {/* Social Links */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-8">Join Our Growing Community</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-[#e67e22] hover:bg-[#e67e22]/10 transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon 
                  size={28} 
                  className="text-gray-400 group-hover:text-[#e67e22] transition-colors" 
                />
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-lg">
            Follow across platforms for daily tutorials, community discussions, and coding insights
          </p>
        </div>

        {/* Floating Elements */}
        <div className="fixed bottom-8 right-8 animate-bounce">
          <div className="p-3 bg-[#e67e22] rounded-full shadow-lg">
            <Heart size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyITeach;