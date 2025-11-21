import React, { useState } from 'react';
import { Smartphone, Code, Zap, Shield, Users, TrendingUp, Check, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MobileAppDevelopment = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleScheduleCall = () => {
    window.open('https://calendly.com/justdavidtech/30min', '_blank');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitQuote = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/submit-quote', { // Update the URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Thank you! We\'ll get back to you with a quote within 24 hours.');
        setShowQuoteModal(false);
        setFormData({
          name: '', email: '', company: '', projectType: '', 
          budget: '', timeline: '', description: ''
        });
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to submit. Please try again or contact us directly.');
    }
  };

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. Your app works seamlessly on both iOS and Android devices."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to match your unique business requirements and vision."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Lightning-fast apps with smooth animations and optimal loading times for superior user experience."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and ensure app reliability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with your users in mind, ensuring high engagement and retention."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased users and features effortlessly."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your vision, target audience, and business goals to create a strategic roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating stunning UI/UX designs and interactive prototypes for your review and feedback."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your app with clean, efficient code and implementing all features and functionalities."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices to ensure bug-free, smooth performance before launch."
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Submitting your app to App Store and Google Play, handling all technical requirements."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and improvements to keep your app running at peak performance."
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", 
    "Firebase", "Node.js", "MongoDB", "AWS"
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-black overflow-hidden">
          <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#e67e22] blur-[180px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#e67e22] blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: "1.2s" }}></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* TEXT CONTENT */}
              <div>
                <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Mobile App Development
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Transform Your Ideas Into Powerful Mobile Apps
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We build stunning, high-performance mobile applications that engage users and drive business growth. 
                  From concept to launch, we're with you every step of the way.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <HashLink smooth to="/contact#ContactSection" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
                    Start Your Project <ArrowRight size={20} />
                  </HashLink>
                  <button onClick={handleScheduleCall} className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
                    <MessageCircle size={20} /> Schedule a Call
                  </button>
                </div>
              </div>

              {/* IMAGE WITH SOFT GLOW */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src="/images/mobileapp.png"
                  alt="Mobile App Development"
                  className="relative rounded-3xl shadow-[0px_0px_50px_rgba(230,126,34,0.25)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Mobile App Development</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver excellence through cutting-edge technology and user-centered design
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-xl border border-gray-200 hover:border-[#e67e22] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-[#e67e22] mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures your app exceeds expectations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-[#e67e22]/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Master</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Using the latest and most reliable technologies to build your app
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e67e22] hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#e67e22] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's turn your vision into a reality. Get in touch today for a free consultation and project quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-white text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Free Quote <ArrowRight size={20} />
              </button>
              <HashLink to="/contact#ContactSection" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#e67e22] transition-colors inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} /> Contact Us
              </HashLink>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Quote Request Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h3>
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="business">Business App</option>
                    <option value="ecommerce">E-commerce App</option>
                    <option value="social">Social Media App</option>
                    <option value="utility">Utility App</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent"
                    placeholder="Tell us about your project requirements, features, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e67e22] text-white py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get My Free Quote <ArrowRight size={20} />
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                We'll get back to you within 24 hours with a detailed quote
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileAppDevelopment;