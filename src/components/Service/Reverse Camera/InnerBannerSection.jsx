"use client";
import React from "react";

export default function InnerBannerSection() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background Decorative SVG */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl mt-10 font-extrabold text-red-500 leading-tight mb-4">
          Premium Reverse Camera Installation
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Drive and park with confidence using a high-definition rear camera,
          seamless vehicle integration, and professional installation for a safer ride.
        </p>

        {/* Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s9.jpg"
            alt="Reverse Camera Installation"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
