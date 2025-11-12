import React from 'react';
import { Smartphone, Code, Zap, Shield, Users, TrendingUp, Check, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MobileAppDevelopment = () => {

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

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for MVPs and simple apps",
      features: [
        "Up to 5 screens",
        "Basic UI/UX design",
        "User authentication",
        "Push notifications",
        "iOS & Android",
        "30 days support",
        "App store submission"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$5,000",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 screens",
        "Custom UI/UX design",
        "Advanced features",
        "API integration",
        "Database management",
        "Admin panel",
        "90 days support",
        "Analytics integration"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For complex, large-scale apps",
      features: [
        "Unlimited screens",
        "Premium UI/UX design",
        "Complex functionalities",
        "Third-party integrations",
        "Real-time features",
        "Backend development",
        "6 months support",
        "Dedicated team"
      ],
      highlighted: false
    }
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", 
    "Firebase", "Node.js", "MongoDB", "AWS"
  ];

  const portfolio = [
    {
      title: "Fitness Tracking App",
      category: "Health & Fitness",
      image: "https://via.placeholder.com/600x400/e67e22/ffffff?text=Fitness+App",
      description: "Full-featured workout and nutrition tracking"
    },
    {
      title: "E-commerce Mobile App",
      category: "Retail",
      image: "https://via.placeholder.com/600x400/34495e/ffffff?text=Shopping+App",
      description: "Seamless shopping experience with payment integration"
    },
    {
      title: "Food Delivery Platform",
      category: "Food & Beverage",
      image: "https://via.placeholder.com/600x400/e67e22/ffffff?text=Food+Delivery",
      description: "Real-time order tracking and delivery management"
    },
    {
      title: "Social Networking App",
      category: "Social Media",
      image: "https://via.placeholder.com/600x400/34495e/ffffff?text=Social+App",
      description: "Connect users with messaging and content sharing"
    }
  ];

  return (
    <>
<Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#e67e22]/10 text-[#e67e22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Mobile App Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Ideas Into Powerful Mobile Apps
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build stunning, high-performance mobile applications that engage users and drive business growth. From concept to launch, we're with you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </button>
                <button className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Schedule a Call
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#e67e22] rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="/images/mobileapp.jpg" 
                alt="Mobile App Development" 
                className="relative rounded-3xl shadow-2xl"
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your needs and budget
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
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See some of the mobile apps we've brought to life
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
            <button className="bg-white text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              Get Free Quote <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#e67e22] transition-colors inline-flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default MobileAppDevelopment;