"use client";
import React from "react";

export default function InnerBannerSection() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl mt-10 font-extrabold text-red-500 leading-tight mb-4">
          Premium Commercial Window Tinting Service
        </h1>

        {/* Sub Text */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Reduce glare, protect interiors, enhance privacy, and improve comfort with
          professional commercial window tinting tailored for your business vehicles or offices.
        </p>

        {/* Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s28.jpg"
            alt="Commercial Window Tinting"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
