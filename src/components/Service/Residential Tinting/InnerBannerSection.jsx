"use client";
import React from "react";

export default function InnerBannerSection() {
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* 🌀 Background Decorative SVG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover object-left opacity-20"
        />
      </div>

      {/* 🧠 Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-10 text-red-500 leading-tight mb-4">
          Premium Residential Window Tinting Service
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Keep your home cooler, protect interiors from UV damage, increase privacy, and enhance comfort with professional residential window tinting.
        </p>

        {/* 🖼 Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s26.jpg"
            alt="Residential Window Tinting"
            className="w-full h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
