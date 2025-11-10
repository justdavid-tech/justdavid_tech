// import { useEffect, useState, useRef } from "react";
// import { Smile, Projector, Trophy, BarChart3 } from "lucide-react";
// import "/styles.scss";

// const statsData = [
//   {
//     id: 1,
//     icon: <Smile className="w-10 h-10 text-brand-primary" />,
//     target: 50,
//     label: "Happy Customers",
//     subtext:
//       "Satisfied clients who trust us with their digital presence and continue to work with us for their ongoing projects and referrals.",
//   },
//   {
//     id: 2,
//     icon: <Projector className="w-10 h-10 text-brand-primary" />,
//     target: 150,
//     label: "Projects Completed",
//     subtext:
//       "Successfully delivered websites, web applications, and digital solutions across various industries with 100% completion rate.",
//   },
//   {
//     id: 3,
//     icon: <Trophy className="w-10 h-10 text-brand-primary" />,
//     target: 6,
//     label: "Awards Won",
//     subtext:
//       "Recognition from industry peers and organizations for outstanding web design, development excellence, and innovative solutions.",
//   },
//   {
//     id: 4,
//     icon: <BarChart3 className="w-10 h-10 text-brand-primary" />,
//     target: 5,
//     label: "Years Experience",
//     subtext:
//       "Proven track record of delivering exceptional results with consistent growth, innovation, and adaptation to latest technologies.",
//   },
// ];

// const StatsSection = () => {
//   const [counters, setCounters] = useState(statsData.map(() => 0));
//   const sectionRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   // Counter Animation Logic
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           statsData.forEach((stat, index) => {
//             let start = 0;
//             const end = stat.target;
//             const duration = 2000; // 2 seconds
//             const stepTime = Math.abs(Math.floor(duration / end));

//             const timer = setInterval(() => {
//               start += 1;
//               setCounters((prev) => {
//                 const newCounters = [...prev];
//                 newCounters[index] = start;
//                 return newCounters;
//               });
//               if (start === end) clearInterval(timer);
//             }, stepTime);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   return (
//     <section ref={sectionRef} id="stats" className="py-16 bg-[#f9f9f9]">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
//             Our Achievements
//           </h2>
//         </div>

//         {/* Counter Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {statsData.map((stat, index) => (
//             <div
//               key={stat.id}
//               className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
//             >
//               <div className="mb-4">{stat.icon}</div>
//               <span className="text-5xl font-extrabold text-brand-primary mb-2">
//                 {counters[index]}
//               </span>
//               <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {stat.subtext}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


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
                <i className="fas fa-smile-beam text-4xl text-yellow-500"></i>
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
                <i className="fas fa-project-diagram text-4xl text-yellow-500"></i>
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
                <i className="fas fa-trophy text-4xl text-yellow-600"></i>
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
                <i className="fas fa-chart-line text-4xl text-yellow-500"></i>
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
