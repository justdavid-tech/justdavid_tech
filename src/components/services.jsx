import React from "react";
import "/styles.scss"; // ✅ adjust path if needed

const ServicesSection = () => {
  return (
    <section className="services text-center py-5" id="services">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-5">
          <h2>Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {/* Service Item 1 */}
          <div className="service-body p-6 h-full border rounded shadow-sm">
            <div className="icon mb-3 flex justify-center">
              <img
                src="/images/icons8-web-design-66.png"
                width="80"
                alt="Web Design"
              />
            </div>
            <h3 className="service-title font-bold">Website Design</h3>
            <p>
              Creating visually appealing and responsive website layouts with
              user-friendly interfaces and modern designs to enhance user
              experience.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="service-body p-6 h-full border rounded shadow-sm">
            <div className="icon mb-3 flex justify-center">
              <img
                src="/images/icons8-web-development-66.png"
                width="80"
                alt="Web Development"
              />
            </div>
            <h3 className="service-title font-bold">Website Development</h3>
            <p>
              Building fully functional websites with clean code, fast load
              times, scalability, and compatibility across all devices and
              browsers.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="service-body p-6 h-full border rounded shadow-sm">
            <div className="icon mb-3 flex justify-center">
              <img
                src="/images/icons8-app-store-66.png"
                width="80"
                alt="App Development"
              />
            </div>
            <h3 className="service-title font-bold">Mobile App Development</h3>
            <p>
              Developing mobile applications for Android and iOS platforms with
              smooth performance, attractive design, and user-focused features.
            </p>
          </div>

          {/* Service Item 4 */}
          <div className="service-body p-6 h-full border rounded shadow-sm">
            <div className="icon mb-3 flex justify-center">
              <img
                src="/images/icons8-branding-66.png"
                width="80"
                alt="Branding"
              />
            </div>
            <h3 className="service-title font-bold">Branding</h3>
            <p>
              Designing logos, brand identities, and marketing materials that
              reflect your clients' values and help their businesses stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
