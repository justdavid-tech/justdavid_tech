import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, CheckCircle, Facebook, Instagram, } from 'lucide-react';
import { IconBrandThreads, IconBrandTiktok, IconBrandX, IconBrandWhatsapp, IconBrandYoutube, IconMail } from "@tabler/icons-react";


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
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email",
      detail: "justdavidtech@gmail.com",
      link: "mailto:justdavidtech@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Phone",
      detail: "+234 903 997 7439",
      link: "tel:+234XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Location",
      detail: "Abuja, Nigeria",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Working Hours",
      detail: "Mon - Fri: 9AM - 6PM",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600"
    },
    {
      icon: <IconBrandX className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-blue-400"
    },
    {
        icon: <Facebook className="w-5 h-5" />,
        name: "Facebook",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
      },
      {
        icon: <Instagram className="w-5 h-5" />,
        name: "Instagram",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
      },
      {
        icon: <IconBrandThreads className="w-5 h-5" />,
        name: "Threads",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
      },
      {
        icon: <IconBrandTiktok className="w-5 h-5" />,
        name: "Tiktok",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
      },
      {
        icon: <IconBrandWhatsapp className="w-5 h-5" />,
        name: "Whatsapp",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
      },
      {
        icon: <IconBrandYoutube className="w-5 h-5" />,
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        color: "hover:bg-blue-400"
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
    
    // Simulate form submission
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
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#e67e22] transition-all duration-300 group"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#e67e22] bg-opacity-20 rounded-lg flex items-center justify-center text-[#e67e22] group-hover:bg-opacity-30 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-400 text-sm font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white font-medium group-hover:text-[#e67e22] transition-colors">
                          {info.detail}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#e67e22] bg-opacity-20 rounded-lg flex items-center justify-center text-[#e67e22]">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-400 text-sm font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-white font-medium">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-white font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:bg-[#e67e22]`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="bg-gradient-to-br from-[#e67e22] to-[#d35400] rounded-xl p-6 shadow-xl">
              <h3 className="text-white font-bold text-lg mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-white text-opacity-90 text-sm">
                I typically respond to all inquiries within 24 hours during business days. Your project is important to me!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="David Stones "
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="david@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="+234 905 290 9859"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white font-semibold mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors"
                        placeholder="Website Development"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e67e22] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#e67e22] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#d35400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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