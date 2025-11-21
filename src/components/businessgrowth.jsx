import React from 'react';
import { TrendingUp, Target, Sparkles, Users } from 'lucide-react';

export default function BusinessGrowthSection() {
  const features = [
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      title: "Increasing Traffic",
      description: "Our marketing team partners with you to identify your target market and go to work by providing comprehensive digital marketing services."
    },
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Powerful Advertising",
      description: "Our marketing team crafts PPC, display, geotargeted and remarketing campaigns engineered for success. Experience results from digital advertising that have a real impact on the bottom line."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Website Design That Dazzles!",
      description: "The interactive team lays the creative groundwork for your website with stunning, conversion-focused designs."
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Expanding Your Commercial Reach",
      description: "Our social media team are experts in creating and executing a social media management plan that gets the right message in front of your desired audience."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#e67e22] font-bold text-sm tracking-wider uppercase">
                Business Growth
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                How Justdavid_tech Web Design Creates Business Growth.
              </h1>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#e67e22] bg-opacity-10 flex items-center justify-center text-[#e67e22] group-hover:bg-opacity-20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-2 text-gray-900">
                        {feature.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Social Media Marketing.jpeg"
                  alt="Business growth analytics and marketing"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-[-20px] bg-white rounded-xl shadow-lg p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="text-xs font-semibold text-gray-600 mb-1">Total Clicks</p>
                <h4 className="text-2xl font-bold text-[#e67e22]">26.6K</h4>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <p className="text-xs font-semibold text-gray-600 mb-1">Avg CTR</p>
                <h4 className="text-2xl font-bold text-[#e67e22]">4%</h4>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#e67e22] opacity-5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}