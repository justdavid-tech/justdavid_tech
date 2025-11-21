import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { HashLink } from "react-router-hash-link";
import { Palette, Eye, Layers, Users, TrendingUp, Smartphone, Zap, Heart, CheckCircle, ArrowRight, Sparkles, Star, Monitor, Layout, Pen } from 'lucide-react';


const WebDesignServicePage = () => {
  const [activeTab, setActiveTab] = useState('ui-ux');

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Excellence",
      description: "Stunning, modern designs that capture attention and leave lasting impressions on your visitors"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed around your users' needs, ensuring seamless navigation and engagement"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Approach",
      description: "Designs optimized for mobile devices first, ensuring perfect experience across all screen sizes"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Consistency",
      description: "Cohesive design language that reinforces your brand identity across every page and element"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Conversion Focused",
      description: "Strategic design elements that guide users toward taking action and achieving your goals"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Loading Design",
      description: "Optimized graphics and layouts that look amazing while loading lightning fast"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Accessibility First",
      description: "Inclusive designs that work for everyone, meeting WCAG accessibility standards"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsive Layouts",
      description: "Flexible grid systems that adapt beautifully to any device or screen resolution"
    }
  ];

  const designServices = {
    'ui-ux': {
      title: "UI/UX Design",
      items: [
        "User research & personas",
        "Wireframing & prototyping",
        "User flow mapping",
        "Interactive prototypes",
        "Usability testing",
        "Design systems"
      ]
    },
    'visual': {
      title: "Visual Design",
      items: [
        "Custom graphic design",
        "Typography selection",
        "Color palette creation",
        "Icon design",
        "Image selection & editing",
        "Brand integration"
      ]
    },
    'responsive': {
      title: "Responsive Design",
      items: [
        "Mobile-first layouts",
        "Tablet optimization",
        "Desktop experiences",
        "Cross-browser testing",
        "Retina display support",
        "Touch-friendly interfaces"
      ]
    }
  };

  const designTools = [
    { name: "Figma", category: "Design Tool" },
    { name: "Adobe XD", category: "Design Tool" },
    { name: "Sketch", category: "Design Tool" },
    { name: "Photoshop", category: "Graphics" },
    { name: "Illustrator", category: "Graphics" },
    { name: "InVision", category: "Prototyping" },
    { name: "Framer", category: "Prototyping" },
    { name: "After Effects", category: "Animation" }
  ];

  const packages = [
    {
      name: "Landing Page Design",
      price: "Contact for Quote",
      description: "Perfect for product launches and campaigns",
      features: [
        "Single page design",
        "Hero section design",
        "Call-to-action elements",
        "Mobile responsive",
        "Stock image selection",
        "2 design concepts",
        "3 rounds of revisions",
        "Source files included"
      ],
      popular: false
    },
    {
      name: "Complete Website Design",
      price: "Contact for Quote",
      description: "Ideal for businesses needing full sites",
      features: [
        "Up to 10 page designs",
        "Custom UI/UX design",
        "Interactive prototypes",
        "Design system creation",
        "Mobile & tablet designs",
        "3 design concepts",
        "Unlimited revisions",
        "Developer handoff files",
        "30 days support"
      ],
      popular: true
    },
    {
      name: "Enterprise Design System",
      price: "Contact for Quote",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Complete design system",
        "Component library",
        "Advanced prototypes",
        "User testing sessions",
        "Accessibility audit",
        "Design documentation",
        "Team training",
        "90 days support",
        "Priority revisions"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding your brand, target audience, competitors, and business goals to create a strategic design foundation."
    },
    {
      step: "02",
      title: "Wireframing & Structure",
      description: "Creating low-fidelity wireframes to map out the user journey, content hierarchy, and overall layout structure."
    },
    {
      step: "03",
      title: "Visual Design Concepts",
      description: "Developing 2-3 unique design concepts with different styles, colors, and approaches for you to choose from."
    },
    {
      step: "04",
      title: "Design Refinement",
      description: "Perfecting the chosen design direction with your feedback, ensuring every pixel is purposeful and polished."
    },
    {
      step: "05",
      title: "Prototyping & Testing",
      description: "Creating interactive prototypes to test user flows and validate design decisions before development."
    },
    {
      step: "06",
      title: "Handoff & Support",
      description: "Delivering final designs with complete documentation, assets, and support for smooth development transition."
    }
  ];

//   const projects = [
//     {
//       id: 1,
//       title: "Fintech Dashboard",
//       category: "Web Application UI",
//       image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Fintech+Dashboard",
//       tools: ["Figma", "Adobe XD"],
//       results: "40% increase in user engagement"
//     },
//     {
//       id: 2,
//       title: "E-learning Platform",
//       category: "Educational Design",
//       image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=E-learning+Platform",
//       tools: ["Sketch", "InVision"],
//       results: "95% user satisfaction score"
//     },
//     {
//       id: 3,
//       title: "Travel Booking Site",
//       category: "Booking System",
//       image: "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Travel+Booking",
//       tools: ["Figma", "Framer"],
//       results: "2x conversion rate improvement"
//     },
//     {
//       id: 4,
//       title: "Restaurant Website",
//       category: "Hospitality Design",
//       image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Restaurant+Site",
//       tools: ["Adobe XD", "Photoshop"],
//       results: "300% more online orders"
//     }
//   ];

  const testimonials = [
    {
      name: "Grace David",
      business: "Startup Founder",
      text: "The design Justdavid_tech created for our app is absolutely stunning. Our users constantly compliment the interface, and our engagement metrics have never been better!",
      rating: 5
    },
    {
      name: "Robert Martinez",
      business: "Marketing Director",
      text: "Working with Justdavid_tech was a dream. They understood our vision immediately and delivered designs that exceeded our expectations. The attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      business: "E-commerce Owner",
      text: "Our conversion rate doubled after the redesign. The new design is not just beautiful, it's strategically crafted to guide users exactly where we want them to go.",
      rating: 5
    }
  ];

  const benefits = [
    "Unlimited design revisions",
    "Source files (Figma, XD, Sketch)",
    "Style guide & brand guidelines",
    "Icon set & custom graphics",
    "Stock photo recommendations",
    "Mobile & desktop versions",
    "Interactive prototypes",
    "Developer documentation"
  ];

  return (
    <>
        <Navbar />
    <div className="min-h-screen bg-white text-black">
      {/* Animated Background Elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22]/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

   {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center px-6 pt-32 bg-black overflow-hidden">

{/* Glowing Brand Shapes */}
<div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[200px] opacity-20 animate-pulse"></div>
<div
  className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[170px] opacity-20 animate-pulse"
  style={{ animationDelay: '1.2s' }}
></div>

<div className="relative max-w-7xl mx-auto text-center">
  
  {/* Tag */}
  <div className="inline-flex items-center gap-2 bg-[#e67e22]/20 text-[#e67e22] px-6 py-2 rounded-full font-semibold mb-6">
    <Sparkles size={16} />
    WEB DESIGN SERVICES
  </div>

  {/* Headline */}
  <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
    Designs That Make  
    <span className="text-[#e67e22]"> Users Fall in Love</span>
  </h1>

  {/* Description */}
  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
    Beautiful, user-focused web designs crafted to elevate your brand, 
    create unforgettable experiences, and convert visitors into loyal customers.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <HashLink smooth to ="#packages"
      className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2"
    >
      View Packages <ArrowRight size={20} />
    </HashLink>
    <HashLink smooth to = "/portfolio#websites" className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors inline-flex items-center justify-center">See Our Designs</HashLink>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 text-gray-300">
    <div className="p-6">
      <div className="text-4xl font-bold text-[#e67e22] mb-2">50+</div>
      <div className="">Designs Created</div>
    </div>
    <div className="p-6">
      <div className="text-4xl font-bold text-[#e67e22] mb-2">98%</div>
      <div className="">Client Satisfaction</div>
    </div>
    <div className="p-6">
      <div className="text-4xl font-bold text-[#e67e22] mb-2">150%</div>
      <div className="">Avg. Conversion Boost</div>
    </div>
    <div className="p-6">
      <div className="text-4xl font-bold text-[#e67e22] mb-2">5–7</div>
      <div className="">Days Turnaround</div>
    </div>
  </div>

</div>
</section>


      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Our Designs Stand Out</h2>
            <p className="text-xl text-gray-600">Every pixel crafted with purpose and precision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
                <div className="text-[#e67e22] mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#e67e22] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services Tabs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Design Services</h2>
            <p className="text-xl text-gray-600">Comprehensive design solutions for every need</p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.keys(designServices).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-[#e67e22] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {designServices[key].title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">{designServices[activeTab].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designServices[activeTab].items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#e67e22]/10 transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#e67e22] flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tools We Master</h2>
            <p className="text-xl text-gray-600">Industry-leading design software for professional results</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {designTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-[#e67e22]">
                <span className="font-semibold text-gray-800">{tool.name}</span>
                <span className="text-xs text-gray-500 ml-2">• {tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Design Projects</h2>
            <p className="text-xl text-gray-600">Designs that drive real business results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="text-[#e67e22] text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-3">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 flex items-center gap-2">
                    <TrendingUp size={16} />
                    {project.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-400">From concept to pixel-perfect execution</p>
          </div>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-[#e67e22]/30">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Pen className="text-[#e67e22]" size={24} />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-white/90">Everything you need for design success</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Design Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your project</p>
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
                  <button
            onClick={() =>
              window.open(
                `https://wa.me/2349039977439?text=Hello!%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`,
                '_blank'
              )
  }
  className={`w-full py-4 rounded-lg font-semibold transition-colors cursor-pointer ${
    pkg.popular
      ? 'bg-[#e67e22] text-white hover:bg-[#d35400]'
      : 'border-2 border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white cursor-pointer'
  }`}
>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied clients</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's transform your vision into a stunning design that captivates and converts.
          </p>
          <button
  onClick={() =>
    window.open(
      "https://wa.me/2349039977439?text=Hello!%20I%20would%20like%20to%20start%20a%20new%20design%20project.",
      "_blank"
    )
  }
  className="bg-[#e67e22] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#d35400] transition-colors inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer "
>
  Start Your Design Project <ArrowRight size={24} />
</button>

          <p className="mt-6 text-gray-400">Free consultation • Quick turnaround • Unlimited revisions</p>
        </div>
      </section>

        <Footer />
    </div>
    </>
  );
};

export default WebDesignServicePage;


