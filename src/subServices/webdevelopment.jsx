// import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Code, Zap, Shield, Smartphone, Globe, Server, Database, Layout, CheckCircle, ArrowRight, Sparkles, Star, ChevronRight } from 'lucide-react';
// import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const WebDevelopmentServicePage = () => {
  // const [selectedPackage, setSelectedPackage] = useState(null);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean, Scalable Code",
      description: "Writing maintainable, well-documented code following industry best practices and standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with lazy loading, code splitting, and efficient asset delivery"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Fully Responsive",
      description: "Perfect display across all devices - desktop, tablet, and mobile with seamless UX"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Built with security in mind - SSL, data encryption, and protection against vulnerabilities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Search engine friendly architecture with proper meta tags, structured data, and performance"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Reliable Hosting",
      description: "Fast, secure hosting solutions with 99.9% uptime guarantee and automatic backups"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Integration",
      description: "Efficient database design and integration for dynamic content and data management"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "CMS Integration",
      description: "Easy content management systems so you can update your site without technical knowledge"
    }
  ];

  const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "REST API", category: "Integration" },
    { name: "GraphQL", category: "Integration" },
    { name: "AWS", category: "Cloud" },
    { name: "Vercel", category: "Deployment" }
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "Contact for Quote",
      description: "Perfect for startups and small businesses",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "SEO basics",
        "Mobile optimization",
        "Social media integration",
        "2 rounds of revisions",
        "30 days support"
      ],
      popular: false
    },
    {
      name: "Professional Website",
      price: "Contact for Quote",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Custom design",
        "CMS integration",
        "Advanced SEO",
        "Blog functionality",
        "Email integration",
        "Analytics setup",
        "Payment gateway",
        "4 rounds of revisions",
        "60 days support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Contact for Quote",
      description: "For complex business needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "User authentication",
        "Admin dashboard",
        "API development",
        "Database design",
        "Performance optimization",
        "Security hardening",
        "Unlimited revisions",
        "90 days support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "We start by understanding your business goals, target audience, technical requirements, and project scope to create a detailed roadmap."
    },
    {
      step: "02",
      title: "Planning & Architecture",
      description: "Mapping out the site structure, database schema, tech stack selection, and creating wireframes for optimal user experience."
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Writing clean, efficient code, implementing features, integrating third-party services, and building the backend infrastructure."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across browsers, devices, and scenarios to ensure everything works flawlessly before launch."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Setting up hosting, configuring domains, deploying the site, and ensuring smooth transition to production."
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, monitoring, and optimization to keep your website running at peak performance."
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      business: "Tech Startup CEO",
      text: "Justdavid_tech built our entire SaaS platform from scratch. The code quality is exceptional and the platform scales beautifully. Couldn't be happier!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      business: "Real Estate Agency Owner",
      text: "Our property portal has transformed our business. The search functionality is lightning fast and the admin panel makes management a breeze.",
      rating: 5
    },
    {
      name: "Dr. James Anderson",
      business: "Medical Practice Director",
      text: "The healthcare dashboard delivered exceeded our expectations. Secure, compliant, and incredibly user-friendly for our staff and patients.",
      rating: 5
    }
  ];

  const benefits = [
    "Full ownership of source code",
    "Lifetime updates and security patches",
    "Free SSL certificate included",
    "Google Analytics integration",
    "Mobile-first approach",
    "Cross-browser compatibility",
    "Documentation provided",
    "Training session included"
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white text-black">
      {/* Animated Background Elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22]/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center px-6 mt-20 bg-black overflow-hidden">

  {/* Glowing Accents */}
  <div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[220px] opacity-20 animate-pulse"></div>
  <div
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[180px] opacity-20 animate-pulse"
    style={{ animationDelay: "1.3s" }}
  ></div>

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Tag */}
    <div className="inline-flex items-center gap-2 mt-10 bg-[#e67e22]/20 text-[#e67e22] px-6 py-2 rounded-full font-semibold mb-6 backdrop-blur-sm">
      <Sparkles size={16} />
      WEB DEVELOPMENT
    </div>

    {/* Headline */}
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
      Build Powerful  
      <span className="text-[#e67e22]"> Web Applications</span> That Scale.
    </h1>

    {/* Subtext */}
    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      We create high-performance, scalable, and visually stunning websites  
      using cutting-edge technologies optimized for speed, SEO, and user experience.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <HashLink smooth to ="#packages"
        className="bg-[#e67e22] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d35400] transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#e67e22]/20"
      >
        View Packages <ArrowRight size={20} />
      </HashLink>

      <Link to ="/portfolio"
        className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-xl font-semibold hover:bg-[#e67e22] hover:text-white transition-all shadow-lg shadow-[#e67e22]/10"
      >
        See Projects
      </Link>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-24">
      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">100+</div>
        <div className="text-gray-300">Websites Built</div>
      </div>

      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">99.9%</div>
        <div className="text-gray-300">Uptime Guarantee</div>
      </div>

      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">&lt;2s</div>
        <div className="text-gray-300">Load Time Speed</div>
      </div>

      <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">24/7</div>
        <div className="text-gray-300">Active Support</div>
      </div>
    </div>

  </div>
</section>



      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-600">Enterprise-grade features for businesses of all sizes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="text-[#e67e22] mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#e67e22] transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Modern tech stack for robust, scalable solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-[#e67e22]">
                <span className="font-semibold text-gray-800">{tech.name}</span>
                <span className="text-xs text-gray-500 ml-2">• {tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-400">A proven methodology that delivers results</p>
          </div>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-[#e67e22]/30">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <ChevronRight className="text-[#e67e22]" />
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#e67e22] to-[#d35400] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-white/90">Comprehensive development package included</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600">Flexible solutions for every budget and requirement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'border-4 border-[#e67e22] scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e67e22] text-white px-6 py-2 rounded-full font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-[#e67e22] mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#e67e22] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() =>
              window.open(
                `https://wa.me/2349039977439?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package%20for%20Website%20Development.`,
                '_blank'
              )
  } className={`w-full py-4 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-[#e67e22] text-white hover:bg-[#d35400]' : 'border-2 border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white cursor-pointer'} cursor-pointer`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from businesses we've helped grow</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#e67e22] text-[#e67e22]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Web Application?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss your project requirements and create something extraordinary together.
          </p>
          <button   onClick={() =>
    window.open(
      "https://wa.me/2349039977439?text=Hello!%20I%20would%20like%20to%20design%20and%20develop%20a%20website.%20",
      "_blank"
    )
  } className="bg-[#e67e22] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#d35400] transition-colors inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer">
            Start Your Project <ArrowRight size={24} />
          </button>
          <p className="mt-6 text-gray-400">Free consultation • No commitment required • Fast turnaround</p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default WebDevelopmentServicePage;