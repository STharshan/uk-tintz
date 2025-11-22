"use client";
import React from "react";

export default function InnerBannerSection() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-10 text-red-500 leading-tight mb-4">
          Premium Stereo Fitting Service
        </h1>

        {/* Sub text */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Upgrade your vehicle with precision-engineered audio solutions for
          richer sound and a flawless installation.
        </p>

        {/* Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="/s6.jpg"
            alt="Stereo Fitting"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
