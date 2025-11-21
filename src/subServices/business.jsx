import React from 'react';
import { Globe, Rocket, Palette, Search, Users, BarChart, Check, ArrowRight, Menu, X, MessageCircle, Monitor, Smartphone, Code2 } from 'lucide-react';
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {  HashLink } from 'react-router-hash-link';

const BusinessWebsite = () => {

  const handleWhatsApp = () => {
    const phone = "2349039977439"; // change to your number
    const message = "Hello! I want a business website";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  };

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Design",
      description: "Unique, professional designs that reflect your brand identity and stand out from competitors."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Perfect display on all devices - desktop, tablet, and mobile. Your site looks great everywhere."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Loading Speed",
      description: "Optimized for lightning-fast performance. Quick load times mean better user experience and SEO."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built with search engines in mind. Get found by your ideal customers on Google."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Friendly CMS",
      description: "Easy content management system. Update your website without technical knowledge."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Integration",
      description: "Track your visitors, understand behavior, and make data-driven decisions."
    }
  ];

  const benefits = [
    {
      title: "Establish Credibility",
      description: "A professional website builds trust and positions your business as an industry leader."
    },
    {
      title: "24/7 Availability",
      description: "Your website works around the clock, providing information and generating leads while you sleep."
    },
    {
      title: "Reach More Customers",
      description: "Expand your market beyond local boundaries and connect with customers worldwide."
    },
    {
      title: "Showcase Your Work",
      description: "Display your products, services, and portfolio to attract and convert potential clients."
    },
    {
      title: "Cost-Effective Marketing",
      description: "More affordable than traditional advertising with measurable results and better ROI."
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors who lack online presence or have outdated websites."
    }
  ];

  const websiteTypes = [
    {
      title: "Corporate Website",
      description: "Professional sites for established businesses to showcase services and build authority",
      features: ["Multi-page design", "About & Services pages", "Contact forms", "Team showcase"]
    },
    {
      title: "Small Business Site",
      description: "Perfect for startups and small businesses looking to establish online presence",
      features: ["5-7 pages", "Service highlights", "Testimonials", "Call-to-action sections"]
    },
    {
      title: "Professional Portfolio",
      description: "Showcase your work, skills, and expertise to attract clients and opportunities",
      features: ["Project gallery", "Case studies", "Client testimonials", "Contact section"]
    },
    {
      title: "Service-Based Business",
      description: "Ideal for consultants, agencies, and service providers",
      features: ["Service pages", "Booking system", "Pricing tables", "FAQ section"]
    }
  ];

  // Both sections are for pricing and showcase of the websites. But I don't need them at the moment. 
  // const packages = [
  //   {
  //     name: "Starter Business",
  //     price: "$1,500",
  //     description: "Perfect for small businesses starting out",
  //     features: [
  //       "5 custom pages",
  //       "Mobile responsive design",
  //       "Contact form",
  //       "Social media integration",
  //       "Basic SEO setup",
  //       "1 month support",
  //       "Google Analytics",
  //       "SSL certificate"
  //     ],
  //     highlighted: false
  //   },
  //   {
  //     name: "Professional",
  //     price: "$3,000",
  //     description: "Ideal for growing businesses",
  //     features: [
  //       "10 custom pages",
  //       "Premium design",
  //       "Advanced contact forms",
  //       "Blog/News section",
  //       "Advanced SEO optimization",
  //       "3 months support",
  //       "Speed optimization",
  //       "Content management system",
  //       "Email integration"
  //     ],
  //     highlighted: true
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "Custom",
  //     description: "For established businesses with complex needs",
  //     features: [
  //       "Unlimited pages",
  //       "Custom functionality",
  //       "Advanced integrations",
  //       "Multi-language support",
  //       "Premium SEO package",
  //       "6 months support",
  //       "Custom animations",
  //       "Dedicated account manager",
  //       "Priority updates"
  //     ],
  //     highlighted: false
  //   }
  // ];

  const process = [
    {
      step: "01",
      title: "Discovery Meeting",
      description: "We learn about your business, goals, target audience, and gather all necessary information."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Creating sitemap, wireframes, and content strategy aligned with your business objectives."
    },
    {
      step: "03",
      title: "Design Mockups",
      description: "Designing beautiful, on-brand mockups for your review and feedback before development."
    },
    {
      step: "04",
      title: "Development",
      description: "Building your website with clean code, ensuring functionality and performance excellence."
    },
    {
      step: "05",
      title: "Content & Testing",
      description: "Adding content, testing across devices and browsers, and optimizing for search engines."
    },
    {
      step: "06",
      title: "Launch & Training",
      description: "Going live with your website and providing training on how to manage your content."
    }
  ];

  // const portfolio = [
  //   {
  //     title: "Legal Firm Website",
  //     category: "Professional Services",
  //     image: "https://via.placeholder.com/600x400/2c3e50/ffffff?text=Legal+Firm+Site",
  //     description: "Sophisticated website for law practice"
  //   },
  //   {
  //     title: "Consulting Agency",
  //     category: "Business Services",
  //     image: "https://via.placeholder.com/600x400/e67e22/ffffff?text=Consulting+Agency",
  //     description: "Modern site showcasing expertise and services"
  //   },
  //   {
  //     title: "Real Estate Company",
  //     category: "Real Estate",
  //     image: "https://via.placeholder.com/600x400/2c3e50/ffffff?text=Real+Estate+Site",
  //     description: "Property listings with advanced search"
  //   },
  //   {
  //     title: "Healthcare Practice",
  //     category: "Healthcare",
  //     image: "https://via.placeholder.com/600x400/e67e22/ffffff?text=Healthcare+Site",
  //     description: "Patient-friendly medical practice website"
  //   }
  // ];

  const faqs = [
    {
      question: "How long does it take to build a business website?",
      answer: "Typically 2-4 weeks for a standard business website, depending on complexity and content readiness. More complex sites may take 6-8 weeks."
    },
    {
      question: "Do I need to provide content for my website?",
      answer: "While you know your business best, we can help write or polish your content. We offer content writing services as an add-on."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Absolutely! We build websites with user-friendly content management systems and provide training so you can easily make updates."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can handle everything including domain registration, hosting setup, and ongoing maintenance if needed."
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden pt-32 pb-20 px-6">

{/* Glowing Animated Circle */}
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ 
    scale: [1, 1.25, 1],
    opacity: [0.15, 0.35, 0.15]
  }}
  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
  className="absolute top-[10%] left-1/2 w-[700px] h-[700px] rounded-full bg-[#e67e22] blur-[160px] opacity-30 -translate-x-1/2"
/>

<div className="relative z-10 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-14 items-center">

    {/* TEXT CONTENT */}
    <div>
      <div className="inline-block bg-[#e67e22]/15 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
        Business Website Development
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Build a Website That  
        <span className="text-[#e67e22]"> Grows Your Business</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
        Professional, conversion-focused websites designed to attract customers, 
        establish credibility, and drive meaningful business results.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <HashLink to = "/portfolio" className="bg-[#e67e22] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#cf6f1c] transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#e67e2260]">
          Explore Business websites <ArrowRight size={20} />
        </HashLink>

        <button onClick={handleWhatsApp} className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
          <MessageCircle size={20} /> Let's Talk
        </button>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-8 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Monitor size={20} className="text-[#e67e22]" />
          <span>Fully Responsive</span>
        </div>
        <div className="flex items-center gap-2">
          <Search size={20} className="text-[#e67e22]" />
          <span>SEO Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <Code2 size={20} className="text-[#e67e22]" />
          <span>Clean Code</span>
        </div>
      </div>
    </div>

    {/* IMAGE SIDE */}
    <div className="relative">
      {/* Glow Behind Image */}
      <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-3xl opacity-20"></div>

      <img 
        src="/images/businessWebsite.jpeg"
        alt="Business Website Development"
        className="relative rounded-3xl shadow-2xl border border-white/10"
      />
    </div>

  </div>
</div>
</section>



      {/* Benefits Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Your Business Needs a Professional Website</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In today's digital world, your website is often the first impression customers have of your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#e67e22] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#e67e22] rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included in Every Website</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium features and functionality to ensure your website performs exceptionally
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

      {/* Website Types Section */}
      <section id="types" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Types of Business Websites We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different business needs and industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {websiteTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#e67e22] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Website Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, collaborative approach from concept to launch
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#e67e22]/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent, Value-Driven Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted 
                    ? 'bg-[#e67e22] text-white shadow-2xl scale-105 border-4 border-[#e67e22]' 
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {pkg.highlighted && (
                  <div className="inline-block bg-white text-[#e67e22] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-3xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 ${pkg.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-6 h-6 flex-shrink-0 ${pkg.highlighted ? 'text-white' : 'text-[#e67e22]'}`} />
                      <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  pkg.highlighted 
                    ? 'bg-white text-[#e67e22] hover:bg-gray-100' 
                    : 'bg-[#e67e22] text-white hover:bg-[#d35400]'
                }`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Business Websites</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses establish their online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-[#e67e22] text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our business website services
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#e67e22] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Launch Your Business Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a website that represents your business professionally and drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() =>
      window.open(
        "https://wa.me/2349039977439?text=Hello%20I%27d%20love%20a%20free%20consultation%20about%20your%20business%20services.",
        "_blank"
      )
    }
    className="bg-white text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
  >
    Get Free Consultation <ArrowRight size={20} />
  </button>

  <button
    onClick={() =>
      window.open(
        "https://wa.me/2349039977439?text=Hi%20I%20want%20to%20chat%20with%20you%20about%20your%20business%20services.",
        "_blank"
      )
    }
    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#e67e22] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
  >
    <MessageCircle size={20} /> Chat With Us
  </button>
</div>

        </div>
      </section>
  <Footer />
    </div>
    </>
  );
};

export default BusinessWebsite;