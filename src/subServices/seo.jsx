import React from "react";
import {
  Globe,
  BarChart,
  TrendingUp,
  Target,
  Search,
  FileSearch,
  PenTool,
  BarChart3,
  Mail,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const SeoServices = () => {
  return (
  <>
  <Navbar />
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Brand Circles */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-32 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          SEO <span className="text-[#e67e22]">Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Boost your visibility. Rank higher. Convert more.  
          I’ll help your business get discovered and stay relevant.
        </p>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Your Business Needs SEO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Globe className="w-10 h-10 text-[#e67e22]" />,
                title: "Increased Visibility",
                desc: "Get found by more people searching for your products and services online.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-[#e67e22]" />,
                title: "Higher Rankings",
                desc: "Appear on the first page of Google and stay ahead of your competitors.",
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#e67e22]" />,
                title: "Targeted Traffic",
                desc: "Attract the right audience people who are already looking for what you offer.",
              },
              {
                icon: <Target className="w-10 h-10 text-[#e67e22]" />,
                title: "Better Conversions",
                desc: "Turn visitors into paying customers with optimized SEO strategies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">SEO Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Basic SEO",
                price: "₦40,000/month",
                features: [
                  "Keyword Research",
                  "On-Page Optimization",
                  "Monthly Reporting",
                ],
              },
              {
                title: "Standard SEO",
                price: "₦70,000/month",
                features: [
                  "Full Site Audit",
                  "Competitor Analysis",
                  "Off-Page Link Building",
                  "Content Optimization",
                ],
                highlight: true,
              },
              {
                title: "Premium SEO",
                price: "₦120,000/month",
                features: [
                  "Advanced Analytics",
                  "Technical SEO Fixes",
                  "Weekly Performance Reports",
                  "Dedicated SEO Support",
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${
                  pkg.highlight
                    ? "border-[#e67e22] bg-[#e67e22]/10"
                    : "border-gray-700"
                } p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <p className="text-[#e67e22] text-3xl font-bold mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="text-gray-300">
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">My SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Audit",
                desc: "I analyze your site’s structure, speed, and technical setup for improvements.",
                icon: <FileSearch className="w-10 h-10 mx-auto text-[#e67e22]" />,
              },
              {
                step: "2",
                title: "Optimization",
                desc: "On-page SEO improvements — from keywords to metadata and performance.",
                icon: <PenTool className="w-10 h-10 mx-auto text-[#e67e22]" />,
              },
              {
                step: "3",
                title: "Content & Links",
                desc: "Creating optimized content and building strong, relevant backlinks.",
                icon: <BarChart3 className="w-10 h-10 mx-auto text-[#e67e22]" />,
              },
              {
                step: "4",
                title: "Reporting",
                desc: "Detailed performance reports with insights and next steps.",
                icon: <TrendingUp className="w-10 h-10 mx-auto text-[#e67e22]" />,
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-all"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#e67e22] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Let’s optimize your website and dominate your niche together.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold inline-flex items-center gap-3 hover:bg-gray-200 transition-all">
            <Mail size={22} /> Contact Me
          </button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default SeoServices;
