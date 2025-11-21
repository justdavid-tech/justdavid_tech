
import { useEffect, useState, useRef } from "react";
import "/styles.scss";

const CounterSection = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const targets = [50, 150, 6, 5];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          targets.forEach((target, index) => {
            let start = 0;
            const duration = 2000; // 2 seconds
            const step = Math.ceil(target / (duration / 30)); // 30ms per frame
            const interval = setInterval(() => {
              start += step;
              if (start >= target) {
                start = target;
                clearInterval(interval);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated, targets]);

  return (
    <section ref={sectionRef} className="counter-section py-5">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title achievement-title py-10 text-center">
          <h2 className="text-3xl font-bold">Our Achievements</h2>
        </div>

        {/* Counter Grid */}
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Happy Customers */}
          <div className="col-lg-6 col-md-6">
            <div className="counter-box" data-target="50">
              <div className="counter-icon mb-2">
                <i className="fas fa-smile-beam text-4xl text-[#e67e22]"></i>
              </div>
              <span className="counter-number text-5xl font-bold text-brand-primary">
                {counts[0]}
              </span>
              <h4 className="counter-label text-xl font-semibold mt-2">
                Happy Customers
              </h4>
              <p className="counter-subtext text-gray-600 mt-2">
                Satisfied clients who trust us with their digital presence and
                continue to work with us for their ongoing projects and
                referrals.
              </p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="col-lg-6 col-md-6">
            <div className="counter-box" data-target="150">
              <div className="counter-icon mb-2">
                <i className="fas fa-project-diagram text-4xl text-[#e67e22]"></i>
              </div>
              <span className="counter-number text-5xl font-bold text-brand-primary">
                {counts[1]}
              </span>
              <h4 className="counter-label text-xl font-semibold mt-2">
                Projects Completed
              </h4>
              <p className="counter-subtext text-gray-600 mt-2">
                Successfully delivered websites, web applications, and digital
                solutions across various industries with 100% completion rate.
              </p>
            </div>
          </div>

          {/* Awards Won */}
          <div className="col-lg-6 col-md-6">
            <div className="counter-box" data-target="6">
              <div className="counter-icon mb-2">
                <i className="fas fa-trophy text-4xl text-[#e67e22]"></i>
              </div>
              <span className="counter-number text-5xl font-bold text-brand-primary">
                {counts[2]}
              </span>
              <h4 className="counter-label text-xl font-semibold mt-2">
                Awards Won
              </h4>
              <p className="counter-subtext text-gray-600 mt-2">
                Recognition from industry peers and organizations for
                outstanding web design, development excellence, and innovative
                solutions.
              </p>
            </div>
          </div>

          {/* Years Experience */}
          <div className="col-lg-6 col-md-6">
            <div className="counter-box" data-target="5">
              <div className="counter-icon mb-2">
                <i className="fas fa-chart-line text-4xl text-[#e67e22]"></i>
              </div>
              <span className="counter-number text-5xl font-bold text-brand-primary">
                {counts[3]}
              </span>
              <h4 className="counter-label text-xl font-semibold mt-2">
                Years Experience
              </h4>
              <p className="counter-subtext text-gray-600 mt-2">
                Proven track record of delivering exceptional results with
                consistent growth, innovation, and adaptation to latest
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
