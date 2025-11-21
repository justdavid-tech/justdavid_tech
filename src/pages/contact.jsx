import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";
import {
  Mail,
  Phone,
  Info,
  Clock,
  Send,
  MessageSquare,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Calendar,
  User,
  FileText,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Shield,
} from "lucide-react";
import {
  IconBrandThreads,
  IconBrandTiktok,
  IconBrandX,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Contact = () => {



  // This makes the page loads first before the hashlink can work from the Seo page, so the best approach is to use the UseEffect.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    "Web Design",
    "Web Development",
    "Mobile App Development",
    "E-commerce Website",
    "Branding",
    "SEO Services",
    "Digital Marketing",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const timelines = [
    "ASAP (Rush Project)",
    "1-2 Weeks",
    "2-4 Weeks",
    "1-3 Months",
    "3-6 Months",
    "Flexible",
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "justdavidtech@gmail.com",
      description: "Drop us a line anytime",
      link: "mailto:justdavidtech@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+234 903 997 7439",
      description: "Mon-Fri from 9AM to 6PM",
      link: "tel:+2349039977439",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      detail: "Chat with us",
      description: "Get instant responses",
      link: "https://wa.me/2349039977439?text=Hi%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      detail: "Book a call",
      description: "Free 30-min consultation",
      link: "#schedule",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-900",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600",
    },
    {
      icon: <IconBrandX className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-black",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:bg-pink-600",
    },
    {
      icon: <IconBrandThreads className="w-5 h-5" />,
      name: "Threads",
      url: "https://threads.net/@yourusername",
      color: "hover:bg-black",
    },
    {
      icon: <IconBrandTiktok className="w-5 h-5" />,
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      color: "hover:bg-black",
    },
    {
      icon: <IconBrandWhatsapp className="w-5 h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/2349039977439",
      color: "hover:bg-green-600",
    },
    {
      icon: <IconBrandYoutube className="w-5 h-5" />,
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      color: "hover:bg-red-600",
    },
  ];

  const faqs = [
    {
      question: "How do you handle project communication and updates?",
      answer:
        "We use a combination of weekly video calls, daily standups via Slack, and a dedicated project management portal where you can track progress in real-time.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! We work with clients worldwide and are comfortable with different time zones.",
    },
    {
      question: "What information should I include in my inquiry?",
      answer:
        "Tell us about your project goals, timeline, budget, and any specific requirements you have.",
    },
    {
      question: "What is your revision policy?",
      answer:
        "We include 3 rounds of revisions in all our packages. Additional revisions can be accommodated at a negotiated rate to ensure your complete satisfaction.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support packages including monthly maintenance, emergency support, and optimization services to keep your project running smoothly.",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call or integrate with backend
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Animated Background */}
        <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22]/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div
          className="fixed bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Hero Section */}
        {/* Hero Section */}
        <section
          id="ContactSection"
          className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden"
        >
          {/* Glowing Brand Orbs */}
          <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-[#e67e22] rounded-full blur-[180px] opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-[#e67e22] rounded-full blur-[180px] opacity-20 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          ></div>

          <div className="relative max-w-6xl mx-auto text-center z-10 pt-32 pb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e67e22]/20 text-[#e67e22] px-6 py-2 rounded-full font-semibold mb-6 text-sm backdrop-blur-sm">
              <Sparkles size={16} />
              LET'S TALK
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Have a Project in Mind?
              <span className="block text-[#e67e22] mt-2">
                Let's Make It Real
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you have a clear vision or just an idea, I'm here to help
              bring it to life. Let's start a conversation and create something
              amazing together.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-[#e67e22] mb-2">
                  10Mins
                </div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-[#e67e22] mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-[#e67e22] mb-2">5★</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-[#e67e22] mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-[#e67e22] ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#e67e22] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-[#e67e22] font-semibold mb-1">
                    {method.detail}
                  </p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section id="ContactForm" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Side - Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Office Info */}
                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
  <Info className="text-[#e67e22]" />
  Contact Us
</h3>

                  <div className="space-y-4">
                    <div>
                    <p className="text-gray-400 text-sm mb-1">Get in Touch</p>
<p className="text-lg">Scroll down and fill out the form. We’ll get back to you immediately.</p>

                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">
                        Working Hours
                      </p>
                      <p className="text-lg">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-lg">Saturday: 10AM - 4PM</p>
                      <p className="text-lg">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Zap className="text-[#e67e22]" />
                    Why Work With Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Quick response within 10 Minutes",
                      "Free initial consultation",
                      "Transparent pricing",
                      "100% satisfaction guarantee",
                      "Ongoing support & maintenance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        Thank you for reaching out! I'll get back to you within
                        2 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-[#e67e22] font-semibold hover:underline"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                          Tell Me About Your Project
                        </h2>
                        <p className="text-gray-600">
                          Fill out the form and I'll respond within 2 hours
                        </p>
                      </div>

                      {/* Name and Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-4 py-3 border ${
                                errors.name
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all`}
                              placeholder="John Doe"
                            />
                          </div>
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-4 py-3 border ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all`}
                              placeholder="john@example.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone and Service */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all"
                              placeholder="+234 905 290 9859"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${
                              errors.service
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all`}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Budget and Timeline */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all"
                          >
                            <option value="">Select your budget</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="timeline"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all"
                          >
                            <option value="">When do you need this?</option>
                            {timelines.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Project Details *
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className={`w-full pl-12 pr-4 py-3 border ${
                              errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all resize-none`}
                            placeholder="Tell me about your project, goals, and any specific requirements..."
                          ></textarea>
                        </div>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-[#e67e22] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#d35400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Your Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e67e22]/10 flex items-center justify-center text-[#e67e22] font-bold flex-shrink-0">
                      ?
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#e67e22] to-[#d35400] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Secure & Confidential</h4>
                <p className="text-sm text-white/80">
                  Your information is safe
                </p>
              </div>
              <div>
                <Zap className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Fast Response</h4>
                <p className="text-sm text-white/80">Reply within 2 hours</p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Quality Guaranteed</h4>
                <p className="text-sm text-white/80">100% satisfaction</p>
              </div>
              <div>
                <Star className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-bold mb-2">5-Star Rated</h4>
                <p className="text-sm text-white/80">Trusted by clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't hesitate to reach out. I'm always happy to chat about your
              project, even if you're just exploring options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2349039977439"
                className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/2349039977439"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center justify-center gap-2"
              >
                <IconBrandWhatsapp className="w-5 h-5" />
                WhatsApp Me
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
