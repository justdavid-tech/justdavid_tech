import { CheckCircle } from "lucide-react";

export default function SkillsetSection() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-[#e67e22] rounded-full blur-[130px] animate-pulse"></div>
        <div
          className="absolute bottom-10 right-20 w-96 h-96 bg-[#e67e22] rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">My Skillset</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I bring a wide range of technical and creative skills to every project.
            From frontend to backend, design to deployment—I've got you covered.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <SkillCard
            title="Front-End Development"
            items={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Vue.js",
              "Next.js",
              "TailwindCSS",
              "Bootstrap 5",
            ]}
          />

          <SkillCard
            title="Back-End Development"
            items={["Node.js", "PHP", "Python"]}
          />

          <SkillCard
            title="Mobile App Development"
            items={["Flutter", "React Native"]}
          />

          <SkillCard
            title="UI / UX Design"
            items={["Figma", "Sketch", "Adobe XD"]}
          />

          <SkillCard
            title="Databases"
            items={["MySQL", "MongoDB", "PostgreSQL"]}
          />

          <SkillCard
            title="E-commerce Solutions"
            items={["WooCommerce", "Shopify", "Custom Builds", "WordPress"]}
          />

          <SkillCard
            title="Tools & DevOps"
            items={["Git", "Webpack", "Docker", "AWS"]}
          />

          <SkillCard
            title="Problem Solving"
            items={[
              "Critical Thinking",
              "Debugging",
              "Complex Issue Resolution",
            ]}
          />
        </div>

        {/* Footer Note */}
        <div className="text-center mt-20">
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm excited to collaborate with clients to bring their ideas to life.  
            <span className="text-[#e67e22] font-semibold"> Let’s build something amazing together!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* Skill Card Component */
function SkillCard({ title, items }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 transition duration-300">
      <h3 className="text-xl font-semibold mb-6 text-[#e67e22]">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#e67e22]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
