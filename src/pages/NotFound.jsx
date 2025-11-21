import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e67e22]/10 to-white text-gray-800 px-6 py-20 relative overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e67e22]/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#e67e22]/30 rounded-full blur-3xl opacity-40 animate-pulse delay-300"></div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="w-20 h-20 text-[#e67e22] animate-bounce" />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Oops! This page wandered off the map.
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
          The link you followed may be broken or the page has been moved. Don't
          worry — you're still on the right website.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#e67e22] text-white px-6 py-3 rounded-xl text-lg font-medium shadow-xl hover:bg-[#cf6d10] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" /> Go Home
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-2 border border-[#e67e22] text-[#e67e22] px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#e67e22]/10 transition-all duration-300"
          >
            <Compass className="w-5 h-5" /> Explore Projects
          </Link>
        </div>
      </div>

      {/* Footer small text */}
      <p className="absolute bottom-6 text-gray-500 text-sm">
        Designed with ❤️ and #e67e22
      </p>
    </div>
  );
}