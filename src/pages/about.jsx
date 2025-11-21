import React from 'react';
import { Code, Palette, Rocket, Users, Award, Coffee, Clock, Heart, CheckCircle, Zap, Target, TrendingUp } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SkillsetSection from '../components/skillSet';

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Rocket className="w-6 h-6 text-white" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="w-6 h-6 text-white" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6 text-white" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6 text-white" /> }
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95, icon: <Code className="w-5 h-5 text-white" /> },
    { name: "UI/UX Design", percentage: 90, icon: <Palette className="w-5 h-5 text-white" /> },
    { name: "Backend Development", percentage: 85, icon: <Code className="w-5 h-5 text-white" /> },
    { name: "Digital Marketing", percentage: 88, icon: <TrendingUp className="w-5 h-5 text-white" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and design trends to give you a competitive edge."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Quality & Passion",
      description: "Every project receives our full attention and dedication. We're passionate about creating exceptional digital experiences."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Reliability",
      description: "Timely delivery, transparent communication, and consistent support. You can count on us every step of the way."
    }
  ];

const journey = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Started my journey as a self-taught developer, building websites for local businesses and learning the fundamentals of web development."
  },
  {
    year: "2022",
    title: "Growing Skills",
    description: "Expanded my expertise to full-stack development, mastering React, Node.js, and modern design principles."
  },
  {
    year: "2023",
    title: "Building a Brand",
    description: "Launched Justdavid_tech as a freelance business, focusing on delivering high-quality digital solutions to businesses."
  },
  {
    year: "2024",
    title: "Expanding Services",
    description: "Added digital marketing, SEO, and branding services to help clients achieve complete online success."
  },
  {
    year: "2025",
    title: "Thought Leadership & Specialization",
    description: "Deepening focus into AI/ML integration and advanced cloud architecture, while expanding the community by sharing daily tutorials and code snippets as a dedicated 'Thought Leader' in the tech space."
  }
];

  return (
    <>
    <Navbar/>
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="absolute top-24 left-12 w-72 h-72 bg-[#e67e22] rounded-full blur-[130px] animate-pulse"></div>
    <div
      className="absolute bottom-24 right-12 w-96 h-96 bg-[#e67e22] rounded-full blur-[150px] animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
  </div>

  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div className="space-y-6 text-center lg:text-left">
        <div className="inline-block bg-[#e67e22]/20 text-[#e67e22] px-5 py-2 rounded-full text-sm font-semibold tracking-wide border border-[#e67e22]/40">
          About Me
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-[#e67e22]">Justdavid_tech</span>
          <span className="block text-white mt-2">Web Developer & Designer</span>
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          I'm a passionate full-stack developer and designer dedicated to building stunning,
          high-performing websites that elevate brands and help businesses grow. I blend modern
          technologies with user-focused design to turn ideas into digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
          <a
            href="/portfolio"
            className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d35400] transition-all transform hover:-translate-y-1 shadow-xl"
          >
            View Portfolio
          </a>
          <a
            href="/contact"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative">
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#e67e22] opacity-20 blur-3xl rounded-full"></div>

          {/* Main Image */}
          <div className="relative w-96 h-96 md:w-96 md:h-96 rounded-4xl overflow-hidden border-[10px] border-[#e67e22]/30 shadow-2xl">
            <img
              src="/images/me.jpg"
              alt="David - Web Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div
            className="absolute -top-4 -right-4 bg-white text-gray-900 px-6 py-3 rounded-full shadow-xl font-bold flex flex-col items-center animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <Coffee className="w-6 h-6 text-[#e67e22] mb-1" />
            <span className="text-xs">Available</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 -mt-16 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e67e22] bg-opacity-10 rounded-full text-[#e67e22] mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-[#e67e22]">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              From curious beginner to professional developer, here's how I got to where I am today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e67e22] to-transparent"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <span className="inline-block bg-[#e67e22] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-6 h-6 bg-[#e67e22] rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


<SkillsetSection />


      <section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Mission Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          My <span className="text-[#e67e22]">Missions</span> & <span className="text-[#e67e22]">Values</span></h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          At <strong className='text-[#e67e22]'>Justdavid_tech</strong> agency, the mission is simple, to help people and businesses
          grow in the digital age through creativity, knowledge, and technology.
          I believe that with the right guidance and tools, anyone can build
          something powerful online.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Every day, I share <strong className='text-[#e67e22]'>practical web design and front-end tutorials</strong> that
          empower developers, creators, and business owners to bring their ideas
          to life. My focus is on simplifying complex topics, creating real-world
          solutions, and inspiring consistency through learning.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Through determination, creativity, and community, I aim to shape a
          future where learning web development is not intimidating but
          exciting and where every project I work on reflects clarity,
          growth, and purpose.
        </p>
      </div>

      {/* Right: Values Section */}
      <div className="space-y-8">
        {/* Value 1: Trust & Transparency */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src="/images/icons8-diamond-80.png"
              alt="Trust Icon"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Trust & Transparency
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Everything I build or teach starts with trust. I stay true to my
              word, deliver what I promise, and ensure every tutorial or project
              I share adds real value to the community.
            </p>
          </div>
        </div>

        {/* Value 2: Passion to Grow & Win */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src="/images/icons8-win-80.png"
              alt="Passion Icon"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Passion to Grow & Win
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Growth is my biggest motivation — whether it’s learning a new
              framework, helping someone fix a bug, or seeing my audience improve.
              I believe consistency and curiosity are the real wins.
            </p>
          </div>
        </div>

        {/* Value 3: Planning & Purpose */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src="/images/icons8-planning-80.png"
              alt="Planning Icon"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Planning & Purpose
            </h4>
            <p className="text-gray-700 leading-relaxed">
              I approach every design, post, or tutorial with intention. A clear
              plan leads to cleaner code, better creativity, and results that
              last beyond trends.
            </p>
          </div>
        </div>

        {/* Value 4: Continuous Learning */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src="/images/icons8-guarantee-80.png"
              alt="Learning Icon"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-1">
              Continuous Learning
            </h4>
            <p className="text-gray-700 leading-relaxed">
              I stay committed to learning every day — not just for myself but
              for everyone who follows my journey. My tutorials are my way of
              growing with the community and sharing what I discover.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

1

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-[#e67e22]">Skills</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Technologies and tools I use to bring your ideas to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#e67e22] bg-opacity-10 rounded-lg flex items-center justify-center text-[#e67e22]">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-[#e67e22] font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#e67e22] to-[#d35400] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-[#e67e22]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide my work and relationships with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-[#e67e22] bg-opacity-10 rounded-xl flex items-center justify-center text-[#e67e22] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e67e22] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-[#e67e22] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d35400] transition-all transform hover:-translate-y-1 shadow-lg">
              Get In Touch
            </a>
            <a href="/portfolio" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg">
              See My Work
            </a>
          </div>
        </div>
      </section>
    </div>
<Footer />
    </>
  );
}