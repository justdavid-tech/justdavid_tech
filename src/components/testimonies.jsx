import React, { useState } from 'react';
import { Quote, Star, Filter } from 'lucide-react';
import { IconQuote } from '@tabler/icons-react';

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      category: 'web-design',
      rating: 5,
      text: "David transformed our outdated website into a modern, professional platform. The design is stunning and our customers love the improved user experience. Sales have increased by 40% since the launch!",
      client: {
        initials: 'AM',
        name: 'Adamu Mohammed',
        position: 'CEO, Abuja Fashion House',
        projectType: 'Website Redesign'
      }
    },
    {
      category: 'ecommerce',
      rating: 4,
      text: "Working with JustDavid Tech was a game-changer for our online store. The e-commerce platform is intuitive, fast, and has all the features we needed. Our online sales doubled in just 3 months!",
      client: {
        initials: 'FA',
        name: 'Fatima Aliyu',
        position: 'Founder, NaijaGoods Store',
        projectType: 'E-commerce Platform'
      }
    },
    {
      category: 'web-development',
      rating: 5,
      text: "David's technical expertise is outstanding. He built a custom web application that streamlined our business processes. The system is robust, secure, and exactly what we envisioned.",
      client: {
        initials: 'CO',
        name: 'Chidi Okafor',
        position: 'CTO, TechSolutions Ltd',
        projectType: 'Custom Web App'
      }
    },
    {
      category: 'web-design',
      rating: 4,
      text: "The portfolio website David created for me is absolutely beautiful. It perfectly showcases my work and has helped me attract high-quality clients. Professional, responsive, and SEO-optimized!",
      client: {
        initials: 'KA',
        name: 'Kemi Adebayo',
        position: 'Creative Director',
        projectType: 'Portfolio Website'
      }
    },
    {
      category: 'mobile',
      rating: 4,
      text: "David developed a mobile-responsive web app for our restaurant. Customers can now easily browse our menu and place orders online. The interface is smooth and user-friendly!",
      client: {
        initials: 'IB',
        name: 'Ibrahim Bello',
        position: "Owner, Bello's Kitchen",
        projectType: 'Mobile Web App'
      }
    },
    {
      category: 'web-development',
      rating: 5,
      text: "Excellent communication throughout the project. David delivered on time, within budget, and exceeded our expectations. The website loads fast and looks great on all devices.",
      client: {
        initials: 'GN',
        name: 'Grace Nnamani',
        position: 'Marketing Manager',
        projectType: 'Business Website'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Testimonies
          </h2>
          <div className="w-24 h-1 bg-[#e67e22] mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-[#e67e22] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e67e22] opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Quote Icon */}
              <div className="mb-6 relative">
                <div className="w-12 h-12 bg-[#e67e22] bg-opacity-10 rounded-full flex items-center justify-center">
                  <IconQuote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-[#e67e22] fill-[#e67e22]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#e67e22] to-[#d35400] flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                  {testimonial.client.initials}
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-1">
                    {testimonial.client.name}
                  </h5>
                  <small className="text-gray-500 text-sm block mb-2">
                    {testimonial.client.position}
                  </small>
                  <div className="inline-block bg-[#e67e22] bg-opacity-10 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.client.projectType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No testimonials found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}