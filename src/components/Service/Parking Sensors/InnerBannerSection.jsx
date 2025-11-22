"use client";
import React from "react";

export default function InnerBannerSection() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-60 object-left"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 leading-tight mb-4 mt-10">
          Premium Parking Sensor Installation
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Make parking effortless and safe with precision sensors, audible alerts, and professional installation for a stress-free driving experience.
        </p>

        {/* Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s17.jpg"
            alt="Parking Sensor Installation"
            className="w-full h-[340px] md:h-[480px] lg:h-[520px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
