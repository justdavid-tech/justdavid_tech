import React from "react";
import { ShieldCheck, Zap, RefreshCw, Database, Wrench, Mail } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const WebsiteMaintenance = () => {
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
          Website <span className="text-[#e67e22]">Maintenance</span> & Support
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Keeping your website secure, fast, and updated so you can focus on growing your business.
        </p>
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

      {/* Packages */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Maintenance Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Basic",
                price: "₦25,000/month",
                features: ["Monthly Updates", "Backup Setup", "Minor Bug Fixes"],
              },
              {
                title: "Standard",
                price: "₦45,000/month",
                features: ["Weekly Updates", "Speed Optimization", "24/7 Monitoring"],
                highlight: true,
              },
              {
                title: "Premium",
                price: "₦80,000/month",
                features: ["Daily Updates", "Priority Support", "Full Security Management"],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${
                  pkg.highlight ? "border-[#e67e22] bg-[#e67e22]/10" : "border-gray-700"
                } p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <p className="text-[#e67e22] text-3xl font-bold mb-6">{pkg.price}</p>
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
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold inline-flex items-center gap-3 hover:bg-gray-200 transition-all">
            <Mail size={22} /> Contact Me
          </button>
        </div>
      </section>
        <Footer />
    </div>
    </>
  );
};

export default WebsiteMaintenance;
