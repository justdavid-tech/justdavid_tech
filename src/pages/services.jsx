import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="container py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">My Services</h1>
        <p className="text-gray-600 mb-10">
          I offer top-notch digital solutions to help your business grow and
          thrive online.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Build responsive, fast, and modern websites using React, Next.js,
              and Node.js.
            </p>
          </div>

          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p className="text-gray-600">
              Create smooth, high-performing mobile apps using Flutter or React
              Native.
            </p>
          </div>

          <div className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Craft clean, user-friendly, and visually appealing interfaces that
              captivate users.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
