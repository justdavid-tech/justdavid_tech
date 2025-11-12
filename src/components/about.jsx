import React from "react";
import "/styles.scss"; // ✅ keep your custom SCSS styles

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center ">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="/images/me-color.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 write-up">
            <div className="section-title mb-4">
              <h2>About Me</h2>
            </div>

            <p className="mb-4">
              I'm <strong className="text-[#e67e22]">David Sani</strong>, known as <strong className="text-[#e67e22]">justdavid_tech</strong>. 
              A professional software engineer proficient in both front-end and 
              back-end technologies, allowing me to build robust and user-friendly 
              web and mobile applications. With a keen eye for detail and a 
              commitment to quality, I strive to deliver exceptional results.
            </p>

            <h4 className="font-semibold text-lg mb-2">My Skillset:</h4>

            <p><strong className="text-[#e67e22]">Front-End Development:</strong> HTML5, CSS, JavaScript, React.js, Vue.js, Next.js, TailwindCSS, Bootstrap5</p>
            <p><strong className="text-[#e67e22]">Back-End Development:</strong> Node.js, PHP, Python</p>
            <p><strong className="text-[#e67e22]">Mobile App Development:</strong> Flutter, React Native</p>
            <p><strong className="text-[#e67e22]">UI/UX Design:</strong> Figma, Sketch, Adobe XD</p>
            <p><strong className="text-[#e67e22]">Databases:</strong> MySQL, MongoDB, PostgreSQL</p>
            <p><strong className="text-[#e67e22]">E-commerce:</strong> WooCommerce, Shopify, Custom Solutions, WordPress</p>
            <p><strong className="text-[#e67e22]">Tools:</strong> Git, Webpack, Docker, AWS</p>
            <p><strong className="text-[#e67e22]">Problem-Solving and Critical Thinking:</strong> Identifying and resolving complex technical challenges</p>

            <p className="mt-4">
              I'm excited to collaborate with clients to bring their ideas to life. 
              Let's build something amazing together!
            </p>

            <a href="/html/portfolio.html">
              <button className="btn-12 mt-5">
                <span>Portfolio</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
