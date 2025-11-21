import "/styles.scss";


export default function AboutMeSection() {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="section-title achievement-title py-4 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4" style={{color: "#fff"}}>About Me</h2>
        </div>
  
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate, detail‑driven and innovative developer who transforms bold ideas
            into modern digital experiences. I combine creativity with technical excellence to
            deliver fast, scalable and visually stunning solutions.
          </p>
  
          <div className="mt-10 flex justify-center">
            <a
              href="/about"
              className="group inline-flex items-center gap-3 bg-white text-black font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-lg">Learn More About Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
  
          <div className="pt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-sm text-gray-400">
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">Front-End</div>
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">Back-End</div>
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">Mobile Apps</div>
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">UI/UX Design</div>
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">E-commerce</div>
            <div className="p-4 bg-gray-800/40 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition">Problem Solving</div>
          </div>
        </div>
      </section>
    );
  }
  