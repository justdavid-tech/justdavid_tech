import React from 'react';
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Youtube, Instagram, Facebook, Linkedin, Github, Icon } from 'lucide-react';
import { IconBrandThreads, IconBrandTiktok, IconBrandX, IconBrandWhatsapp, IconBrandYoutube, IconMail } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      title: "Web & App Development",
      links: [
        { name: "Website Development", url: "/services/web-development" },
        { name: "Website Design", url: "/services/web-design" },
        { name: "Mobile APP development", url: "/services/mobile-app" },
        { name: "Business website", url: "/services/business" },
        { name: "e-Commerce website", url: "/services/ecommerce" }
      ]
    },
    {
      title: "SEO Services",
      links: [
        { name: "SEO services", url: "/services/seo" },
        { name: "Local SEO services", url: "/services/local-seo" }
      ]
    },
    {
      title: "Digital Advertising",
      links: [
        { name: "Digital Marketing", url: "/services/digital-marketing" },
        { name: "Social Media Management", url: "/services/social-media" }
      ]
    },
    {
      title: "Other Links",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/justdavid-tech", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/justdavid-tech-851941239", label: "LinkedIn" },
    { icon: <IconBrandX className="w-5 h-5" />, url: "https://linkedin.com/in/justdavid-tech-851941239", label: "X" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/profile.php?id=100086701681128", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/justdavid_tech/profilecard/?igsh=dDR0OHBidjlvY25s", label: "Instagram" },
    { icon: <IconBrandThreads className="w-5 h-5" />, url: "https://linkedin.com/in/justdavid-tech-851941239", label: "Threads" },
    { icon: <IconBrandTiktok className="w-5 h-5" />, url: "https://linkedin.com/in/justdavid-tech-851941239", label: "Tiktok" },
    { icon: <IconBrandWhatsapp className="w-5 h-5" />, url: "https://linkedin.com/in/justdavid-tech-851941239", label: "Whatsapp" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://www.youtube.com/channel/UClcQRMDz5p8t97NkcqhMhCA", label: "YouTube" }
    
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Us */}
            <div className="space-y-4">
              <h5 className="text-white font-bold text-lg mb-4 relative inline-block">
                About Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#e67e22]"></span>
              </h5>
              <p className="text-sm leading-relaxed text-gray-400">
                We are a creative agency that offers digital solutions for businesses that want to impact the digital age, build awareness of their products or services, and increase their business income.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="text-white font-bold text-lg mb-4 relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#e67e22]"></span>
              </h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-[#e67e22] flex-shrink-0" />
                  <a href="tel:+2349039977439" className="hover:text-[#e67e22] transition-colors">
                    +234 903 9977 439
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-[#e67e22] flex-shrink-0" />
                  <a href="mailto:justdavidtech@gmail.com" className="hover:text-[#e67e22] transition-colors">
                    justdavidtech@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#e67e22] flex-shrink-0" />
                  <span>Abuja, Nigeria</span>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="space-y-4">
              <h5 className="text-white font-bold text-lg mb-4 relative inline-block">
                Working Hours
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#e67e22]"></span>
              </h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#e67e22] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Monday-Friday:</strong>
                    <br />8:30 AM – 6 PM
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#e67e22] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Saturday-Sunday:</strong>
                    <br />9:30 AM – 6 PM
                  </div>
                </li>
              </ul>
            </div>

            {/* Policies & Social */}
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-bold text-lg mb-4 relative inline-block">
                  Policies
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#e67e22]"></span>
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/terms-conditions" className="hover:text-[#e67e22] transition-colors">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-[#e67e22] transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="text-white font-bold text-sm mb-3">Follow Us</h6>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 hover:bg-[#e67e22] rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index}>
                <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                  {service.title}
                </h6>
                <ul className="space-y-2 text-sm">
                  {service.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-[#e67e22] transition-colors inline-flex items-center gap-1"
                      >
                        <span className="w-1 h-1 bg-[#e67e22] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} All Rights Reserved By{' '}
              <span className="text-[#e67e22] font-bold">Justdavid_tech</span>
            </p>
            <p>
              Click{' '}
              <Link to= "/Why-I-Teach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e67e22] hover:underline font-semibold"
              >
                here
              </Link>{' '}
              to know why I give daily tutorials
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}