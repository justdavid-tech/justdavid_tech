import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ShoppingCart, Smartphone, Zap, Shield, Search, CreditCard, BarChart, Headphones, Check, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Ecommerce = () => {
//   const [selectedPackage, setSelectedPackage] = useState(null);

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Complete Shopping Experience",
      description: "Product catalogs, cart systems, and seamless checkout flows that convert browsers into buyers"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Over 70% of online shopping happens on mobile. Your store will look perfect on every device"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payment Integration",
      description: "Stripe, Paystack, PayPal, and more. Multiple payment options to maximize conversions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized loading speeds that keep customers engaged and boost your SEO rankings"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help customers find your products on Google"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "SSL certificates, secure checkout, and data protection for peace of mind"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics Ready",
      description: "Track sales, customer behavior, and product performance with integrated analytics"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Post-launch support to ensure your store runs smoothly as your business grows"
    }
  ];

  const packages = [
    {
      name: "Starter Store",
      price: "Contact for Quote",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 50 products",
        "Mobile responsive design",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Basic SEO setup",
        "Contact form",
        "2 rounds of revisions",
        "30 days post-launch support"
      ],
      popular: false
    },
    {
      name: "Professional Store",
      price: "Contact for Quote",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Up to 200 products",
        "Custom design & branding",
        "Advanced product filters",
        "Multiple payment options",
        "Advanced SEO optimization",
        "Customer accounts & wishlist",
        "Email marketing integration",
        "Product reviews system",
        "4 rounds of revisions",
        "60 days post-launch support"
      ],
      popular: true
    },
    {
      name: "Enterprise Store",
      price: "Contact for Quote",
      description: "For established businesses needing premium features",
      features: [
        "Unlimited products",
        "Premium custom design",
        "Advanced inventory management",
        "Multi-currency support",
        "Analytics dashboard",
        "Customer loyalty program",
        "Live chat integration",
        "Blog & content marketing",
        "Subscription/recurring payments",
        "Social media integration",
        "Unlimited revisions",
        "90 days post-launch support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your business goals, target audience, products, and brand vision to create a strategic roadmap"
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "I craft a stunning design that reflects your brand and optimizes the shopping experience"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Building your store with clean code, payment gateways, and all necessary functionalities"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices and browsers, then launching your store to the world"
    },
    {
      step: "05",
      title: "Support & Growth",
      description: "Ongoing support and optimization to help your online business thrive"
    }
  ];


  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Luxe Fashion Boutique",
      text: "Justdavid_tech transformed our online presence. Sales have tripled since launching our new store. The design is beautiful and customers love how easy it is to shop!",
      rating: 5
    },
    {
      name: "Michael Odeh",
      business: "TechGear Pro",
      text: "Working with Justdavid_tech was seamless. They understood our vision and delivered a high-performance store that handles our large product catalog perfectly.",
      rating: 5
    },
    {
      name: "Blessing Sani",
      business: "Green Earth Organics",
      text: "Not only did we get a stunning website, but the subscription feature has been a game-changer for our business model. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white text-black">
      {/* Animated Background Elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#e67e22]` rounded-full opacity-10 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-[#e67e22] rounded-full opacity-10 blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-black pt-32 overflow-hidden">
  {/* Glowing Background Circles */}
  <div className="absolute -top-40 -left-32 w-[550px] h-[550px] rounded-full bg-[#e67e22] blur-[200px] opacity-20 animate-pulse"></div>
  <div 
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#e67e22] blur-[170px] opacity-20 animate-pulse"
    style={{ animationDelay: "1.3s" }}
  ></div>

  <div className="relative max-w-6xl mx-auto text-center text-white">
    
    {/* BADGE */}
    <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-6 py-2 rounded-full font-semibold mb-6">
      E-COMMERCE SOLUTIONS
    </div>

    {/* HEADING */}
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Transform Your Products Into  
      <span className="text-[#e67e22]"> Profitable Sales</span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
      Custom e-commerce websites built for performance and conversions.  
      From first click to final checkout. I create online stores that turn visitors into loyal customers.
    </p>

    {/* CTA BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="#packages" 
        className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-colors inline-flex items-center justify-center gap-2"
      >
        View Packages <ArrowRight size={20} />
      </a>

      <Link to="/portfolio" 
        className="border-2 border-[#e67e22] text-[#e67e22] px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] hover:text-white transition-colors"
      >
        See My Work
      </Link>
    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      <div className="p-6">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">50+</div>
        <div className="text-gray-300">Stores Launched</div>
      </div>

      <div className="p-6">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">98%</div>
        <div className="text-gray-300">Client Satisfaction</div>
      </div>

      <div className="p-6">
        <div className="text-4xl font-bold text-[#e67e22] mb-2">$1.2M+</div>
        <div className="text-gray-300">Revenue Generated</div>
      </div>
    </div>

  </div>
</section>


      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything Your Store Needs to Succeed</h2>
            <p className="text-xl text-gray-600">Built-in features that drive sales and delight customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-[#e67e22] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Build Your Store</h2>
            <p className="text-xl text-gray-400">A proven process that delivers results every time</p>
          </div>
          <div className="space-y-12">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="text-6xl font-bold text-[#e67e22]/20">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Perfect Package</h2>
            <p className="text-xl text-gray-600">Flexible options to match your business needs and budget</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'border-4 border-[#e67e22] scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e67e22] text-white px-6 py-2 rounded-full font-bold">
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
                        <Check className="w-5 h-5 text-[#e67e22] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                <button
  onClick={() =>
    window.open(
      `https://wa.me/2349039977439?text=Hello%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package%20for%20e-commerce%20development.`,
      "_blank"
    )
  }
  className={`w-full py-4 rounded-lg font-semibold cursor-pointer transition-colors ${
    pkg.popular
      ? "bg-[#e67e22] text-white hover:bg-[#d35400] cursor-pointer"
      : "border-2 border-[#e67e22] text-[#e67e22] hover:bg-[#e67e22] hover:text-white cursor-pointer"
  }`}
>
  Get Started
</button>

                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">Need something custom? <Link to = "/contact" className="text-[#e67e22] font-semibold cursor-pointer hover:underline">Let's talk about your unique requirements</Link></p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real business owners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#e67e22] text-[#e67e22]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
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
      <section className="py-20 px-6 bg-[#e67e22] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's turn your products into profits. Get a free consultation and quote today.
          </p>
          <HashLink smooth to = "/contact#ContactForm" className="bg-white text-[#e67e22] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={24} />
          </HashLink>
          <p className="mt-6 opacity-75">No commitment required • Free initial consultation • Quick response time</p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Ecommerce;