import React from "react";  
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  Globe,
  BarChart,
  TrendingUp,
  Target,
  Search,
  FileSearch,
  ArrowRight,
  MessageCircle,
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
          SEO Services
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Rank Higher.  
          Drive Traffic.  
          <span className="text-[#e67e22]"> Grow Your Business.</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Boost your visibility and attract high-quality customers with proven SEO strategies  
          tailored to your business. From audits to optimization, we help you dominate search results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to = "/contact" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2">
            Improve My Ranking <ArrowRight size={20} />
          </Link>
          <button
  onClick={() =>
    window.open(
      'https://wa.me/234903934323?text=Hello%2C%20I%27m%20interested%20in%20a%20Free%20SEO%20Consultation.%20Please%20tell%20me%20more.'
    )
  }
  className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
>
  <MessageCircle size={20} /> Free SEO Consultation
</button>

        </div>

        {/* SEO HIGHLIGHTS */}
        <div className="flex items-center gap-8 mt-10 flex-wrap text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-[#e67e22]" />
            <span>Keyword Optimization</span>
          </div>
          <div className="flex items-center gap-2">
            <Search size={18} className="text-[#e67e22]" />
            <span>Technical SEO</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 size={18} className="text-[#e67e22]" />
            <span>Analytics & Reporting</span>
          </div>
        </div>
      </div>

      {/* HERO VISUAL */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="/images/seo-services.png"
          alt="SEO Services"
          className="relative rounded-3xl shadow-[0px_0px_50px_rgba(230,126,34,0.25)]"
        />
      </div>

    </div>
  </div>
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
          waText: "I'm interested in the Basic SEO package. Please share the pricing.",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Monthly Reporting",
            "SEO-friendly Content Suggestions",
            "Mobile Optimization Review"
          ],
        },
        {
          title: "Standard SEO",
          waText: "I'm interested in the Standard SEO package. Please share the pricing.",
          highlight: true,
          features: [
            "Full Site Audit",
            "Competitor Analysis",
            "Off-Page Link Building",
            "Content Optimization",
            "Keyword Performance Tracking",
            "Technical SEO Fixes"
          ],
        },
        {
          title: "Premium SEO",
          waText: "I'm interested in the Premium SEO package. Please share the pricing.",
          features: [
            "Advanced Analytics",
            "Technical SEO Fixes",
            "Weekly Performance Reports",
            "Dedicated SEO Support",
            "Content Strategy + Optimization",
            "Keyword Optimization",
            "Competitor Analysis",
            "Off-Page Link Building",
            "Content Optimization"
          ],
        },
      ].map((pkg, i) => (
        <div
          key={i}
          className={`rounded-2xl border p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 ${
            pkg.highlight
              ? "border-[#e67e22] bg-[#e67e22]/10 scale-105 shadow-xl"
              : "border-gray-700"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>

          <ul className="space-y-3 mb-10">
            {pkg.features.map((f, idx) => (
              <li key={idx} className="text-gray-300">{f}</li>
            ))}
          </ul>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/2349039977439?text=${encodeURIComponent(pkg.waText)}`,
                "_blank"
              )
            }
            className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg font-semibold transition-all w-full cursor-pointer"
          >
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
                desc: "On-page SEO improvements from keywords to metadata and performance.",
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
          <HashLink smooth to= "/contact#ContactForm" className="bg-white text-black px-8 py-4 rounded-lg font-bold inline-flex items-center gap-3 hover:bg-gray-200 transition-all">
            <Mail size={22} /> Contact Me
          </HashLink>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default SeoServices;
