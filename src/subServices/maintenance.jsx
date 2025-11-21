import React from "react";
import { ShieldCheck, Zap, RefreshCcw, Database, Wrench, ArrowRight, MessageCircle, Server, RefreshCw, Mail } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { HashLink} from "react-router-hash-link";

const WebsiteMaintenance = () => {

  const handleWhatsApp = () => {
    const phone = "2349039977439"; // change to your number
    const message = "Hello! I want to understand how the website maintenance works.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Brand Circles */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#e67e22] rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
  {/* Glowing Background Circles */}
  <div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[200px] opacity-20 animate-pulse"></div>
  <div
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[170px] opacity-20 animate-pulse"
    style={{ animationDelay: '1.3s' }}
  ></div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* TEXT CONTENT */}
      <div>
        <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Website Maintenance & Support
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Keep Your Website  
          <span className="text-[#e67e22]"> Fast, Secure & Always Online</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Stay worry-free while we handle updates, security, performance, backups,  
          and ongoing support ensuring your website runs smoothly 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <HashLink smooth to = "/contact#ContactForm" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2">
            Start Maintenance <ArrowRight size={20} />
          </HashLink>
          <button onClick={handleWhatsApp} className="border-2 cursor-pointer border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2">
            <MessageCircle size={20} /> Speak With Us
          </button>
        </div>

        {/* Trust Bullets */}
        <div className="flex items-center gap-8 text-sm text-gray-400 mt-10 flex-wrap">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#e67e22]" />
            <span>Security Monitoring</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCcw size={18} className="text-[#e67e22]" />
            <span>Regular Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Server size={18} className="text-[#e67e22]" />
            <span>Daily Backups</span>
          </div>
        </div>
      </div>

      {/* IMAGE / VISUAL */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
        <img
          src="/images/webmaintenance.png"
          alt="Website Maintenance Support"
          className="relative rounded-3xl shadow-[0px_0px_50px_rgba(230,126,34,0.25)]"
        />
      </div>

    </div>
  </div>
</section>


      {/* Why Maintenance Matters */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Website Maintenance Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <ShieldCheck className="w-10 h-10 text-[#e67e22]" />, title: "Security", desc: "Regular security audits and plugin updates to prevent attacks." },
              { icon: <Zap className="w-10 h-10 text-[#e67e22]" />, title: "Speed Optimization", desc: "Boosting load times and overall performance." },
              { icon: <RefreshCw className="w-10 h-10 text-[#e67e22]" />, title: "Updates", desc: "Frequent theme, plugin, and framework updates." },
              { icon: <Database className="w-10 h-10 text-[#e67e22]" />, title: "Backup & Restore", desc: "Automatic backups to protect your data." },
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

    {/* Maintenance Packages */}
<section className="py-20 bg-black text-white px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Maintenance Packages</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Basic",
          features: [
            "Monthly Website Updates",
            "Reliable Backup System",
            "Minor Bug Fixes",
            "Performance Checkups"
          ],
        },
        {
          title: "Standard",
          features: [
            "Weekly Website Updates",
            "Speed & Performance Optimization",
            "24/7 Uptime Monitoring",
            "Security Enhancements"
          ],
          highlight: true,
        },
        {
          title: "Premium",
          features: [
            "Daily Website Updates",
            "Priority 1-on-1 Support",
            "Full Security Management",
            "Advanced Performance Tuning",
            "Deep Error & Crash Prevention"
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

          <ul className="space-y-3 mb-8">
            {pkg.features.map((f, idx) => (
              <li key={idx} className="text-gray-300">
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/2349039977439?text=Hello,%20I'm%20interested%20in%20your%20*${pkg.title}%20Maintenance%20Package*.%20Please%20share%20the%20full%20details.`,
                "_blank"
              )
            }
            className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer"
          >
            Get Details
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Process */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Maintenance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Site Audit", desc: "We assess your website's current health and performance." },
              { step: "2", title: "Optimization", desc: "We clean, update, and improve speed and security." },
              { step: "3", title: "Monitoring", desc: "We track uptime and security vulnerabilities continuously." },
              { step: "4", title: "Monthly Reports", desc: "You receive detailed updates and maintenance reports." },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#e67e22] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                  {s.step}
                </div>
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
          <h2 className="text-5xl font-bold mb-6">Need Reliable Website Maintenance?</h2>
          <p className="text-lg mb-10 opacity-90">
            Let's keep your site secure, lightning-fast, and performing at its best every day.
          </p>
          <HashLink smooth to= "/contact#ContactForm" className="bg-white text-black px-8 py-4 rounded-lg font-bold inline-flex items-center gap-3 hover:bg-gray-200 transition-all">
            <Mail size={22} /> Contact Me
          </HashLink>
        </div>
      </section>
        <Footer />
    </div>
    </>
  );
};

export default WebsiteMaintenance;
