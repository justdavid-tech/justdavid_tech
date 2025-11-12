import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin, Github, Youtube, ChevronDown } from 'lucide-react';
import { IconBrandThreads, IconBrandTiktok, IconBrandX, IconBrandWhatsapp, IconBrandYoutube, IconMail } from "@tabler/icons-react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactSection from '../components/contact';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Phone",
      content: "+234 903 9977 439",
      link: "tel:+2349039977439"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      content: "justdavidtech@gmail.com",
      link: "mailto:justdavidtech@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Location",
      content: "Abuja, Nigeria",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Working Hours",
      content: "Mon-Fri: 8:30 AM - 6 PM",
      link: null
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "SEO Services",
    "Digital Marketing",
    "Branding",
    "Website Maintenance"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 2-3 weeks, while more complex applications can take 6-8 weeks. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing depends on project scope, features, and timeline. I offer competitive rates with transparent quotes. Contact me for a free consultation and custom quote for your project."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! I offer maintenance packages for ongoing support, updates, and improvements. I'm committed to ensuring your website continues to perform excellently."
    },
    {
      question: "Can you work with existing websites?",
      answer: "Absolutely! I can redesign, optimize, or add new features to your existing website. Whether you need a refresh or major overhaul, I can help."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#e67e22] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-[#e67e22] bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-[#e67e22] border-opacity-30 mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Build Something
              <span className="block text-[#e67e22] mt-2">Amazing Together</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have a project in mind? Want to discuss how we can help grow your business? 
              I'm just a message away. Let's turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 -mt-16 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e67e22] bg-opacity-10 rounded-full text-[#e67e22] mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-[#e67e22] transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

            <ContactSection />
      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12">

      {/* Left Side - Video Section */}
      <div className="flex items-center justify-center">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover rounded-xl"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/videos/contact-showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Side - Additional Info */}
      <div className="space-y-8">
        {/* Why Work With Me */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Work With <span className="text-[#e67e22]">Me?</span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Fast Response Time</h4>
                <p className="text-gray-600 text-sm">I typically respond to inquiries within 24 hours.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h4>
                <p className="text-gray-600 text-sm">Clear quotes with no hidden fees or surprises.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">Dedicated to delivering exceptional results every time.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                <p className="text-gray-600 text-sm">I'm here for you even after project completion.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Services I <span className="text-[#e67e22]">Offer</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-[#e67e22] hover:text-[#e67e22] transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Me <span className="text-[#e67e22]">Here</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Based in Abuja, Nigeria - Working with clients worldwide
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d7.398370199999999!3d9.0764785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#e67e22]">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full font-bold text-gray-900 cursor-pointer flex items-center justify-between text-left"
                >
                  {faq.question}
                  <ChevronDown 
                    className={`w-5 h-5 text-[#e67e22] transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}