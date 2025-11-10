import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Code, Zap, DollarSign, Clock, Shield } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      question: "How long does it take to build a website?",
      answer: "The timeline varies depending on the project complexity. A simple website typically takes 2-3 weeks, while a complex e-commerce or custom web application can take 6-12 weeks. I'll provide you with a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-white" />,
      question: "What are your pricing and payment terms?",
      answer: "Pricing depends on project scope, features, and complexity. I offer flexible payment plans: typically 50% upfront to start development and 50% upon completion. For larger projects, we can arrange milestone-based payments. Contact me for a free quote tailored to your needs."
    },
    {
      icon: <Code className="w-5 h-5 text-white" />,
      question: "What technologies do you use?",
      answer: "I specialize in modern web technologies including React, Next.js, Node.js, Tailwind CSS, HTML5, CSS3, and JavaScript. I also work with popular CMS platforms like WordPress when needed. I choose the best tech stack based on your project requirements to ensure optimal performance and scalability."
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      question: "Will my website be mobile-friendly and SEO optimized?",
      answer: "Absolutely! Every website I build is fully responsive and works seamlessly across all devices (mobile, tablet, desktop). I also implement SEO best practices including proper meta tags, semantic HTML, fast loading speeds, and clean code structure to help your site rank better on search engines."
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      question: "Do you provide website maintenance and support?",
      answer: "Yes! I offer ongoing maintenance and support packages that include regular updates, security patches, backups, and technical support. You'll also receive training on how to manage your website's content. Maintenance packages can be customized based on your needs and budget."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-white" />,
      question: "Can you redesign my existing website?",
      answer: "Definitely! I specialize in website redesigns and modernization. I'll analyze your current site, identify areas for improvement, and create a modern, high-performing website while preserving your brand identity. We can also migrate your existing content seamlessly to the new design."
    },
    {
      icon: <Code className="w-5 h-5 text-white" />,
      question: "Will I be able to update the website myself?",
      answer: "Yes! I build websites with user-friendly content management systems (CMS) or provide easy-to-use admin panels. You'll receive comprehensive training and documentation so you can make updates independently. I'm also always available if you need assistance."
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      question: "Do you offer e-commerce solutions?",
      answer: "Absolutely! I create powerful e-commerce websites with features like product catalogs, shopping carts, secure payment gateways, inventory management, and order tracking. Whether you need a simple online store or a complex multi-vendor marketplace, I've got you covered."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#e67e22] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e67e22] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions? I've got answers! Here are some common questions clients ask about my web development services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-[#e67e22] text-white'
                      : 'bg-[#e67e22] bg-opacity-10 text-[#e67e22] group-hover:bg-opacity-20'
                  }`}>
                    {faq.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-[#e67e22] text-white rotate-180'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#e67e22] to-[#d35400] rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            I'm here to help! Feel free to reach out and I'll get back to you as soon as possible.
          </p>
          <a href="/contact" className="inline-block group">
            <button className="bg-white text-[#e67e22] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}