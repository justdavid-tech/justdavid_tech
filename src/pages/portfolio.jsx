import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="container py-20">
        <h1 className="text-4xl font-bold text-center mb-6">My Portfolio</h1>
        <p className="text-gray-600 text-center mb-10">
          A collection of projects I’ve worked on — from web apps to mobile
          designs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border rounded overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={`/images/project-${item}.jpg`}
                alt={`Project ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Project {item}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  A modern project showcasing my development and design skills.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
