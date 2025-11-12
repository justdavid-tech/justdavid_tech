import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { IconBrandThreads, IconBrandTiktok, IconBrandX, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Email",
      detail: "justdavidtech@gmail.com",
      link: "mailto:justdavidtech@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Phone",
      detail: "+234 903 997 7439",
      link: "tel:+2349039977439"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Location",
      detail: "Abuja, Nigeria",
      link: null
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Working Hours",
      detail: "Mon - Fri: 9AM - 6PM",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-900"
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600"
    },
    {
      icon: <IconBrandX className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-black"
    },
    {
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:bg-pink-600"
    },
    {
      icon: <IconBrandThreads className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "Threads",
      url: "https://threads.net/@yourusername",
      color: "hover:bg-black"
    },
    {
      icon: <IconBrandTiktok className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      color: "hover:bg-black"
    },
    {
      icon: <IconBrandWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/2349039977439",
      color: "hover:bg-green-600"
    },
    {
      icon: <IconBrandYoutube className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      color: "hover:bg-red-600"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#e67e22]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-56 h-56 sm:w-96 sm:h-96 bg-[#e67e22]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Contact Details Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-[#e67e22] transition-all duration-300 group"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#e67e22] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-400 text-xs sm:text-sm font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white text-sm sm:text-base font-medium group-hover:text-[#e67e22] transition-colors break-words">
                          {info.detail}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#e67e22] bg-opacity-20 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-400 text-xs sm:text-sm font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white text-sm sm:text-base font-medium">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Connect With Me</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="bg-gradient-to-br from-[#e67e22] to-[#d35400] rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-white text-opacity-90 text-xs sm:text-sm">
                I typically respond to all inquiries within 24 hours during business days. Your project is important to me!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700">
              {isSuccess ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="David Stones"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="david@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="+234 905 290 9859"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="Website Development"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm sm:text-base">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#e67e22] text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#d35400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm sm:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm sm:text-base">Send Message</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}