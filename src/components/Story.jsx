"use client";
import React, { useEffect } from "react";

import { Star } from "lucide-react";

export default function StatsSection() {


  // Carbon Fiber Style (your original style preserved)
  const carbonFiberStyle = {
    backgroundImage:
      "repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 4px, #111 4px, #111 8px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
    borderRadius: "1rem",
    padding: "2rem",
  };

  // Glow wrapper classes (handles hover and mobile tap)
  const glowWrapper =
    "transition-all duration-300 transform cursor-pointer " +
    "hover:scale-105 active:scale-105 focus-visible:scale-105 " +
    "hover:shadow-[0_0_30px_rgba(239,68,68,0.85)] " +
    "active:shadow-[0_0_30px_rgba(239,68,68,0.85)] " +
    "focus-visible:shadow-[0_0_30px_rgba(239,68,68,0.85)]";

  return (
    <section
      className="relative w-full bg-black py-24 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background arrows */}
      <div className="absolute inset-0 flex justify-between opacity-[0.04] pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[260px] md:w-[360px] rotate-90 object-contain"
           loading="lazy"
        />
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[260px] md:w-[360px] -rotate-90 object-contain"
           loading="lazy"
        />
      </div>

      {/* Stats Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-white">

        {/* 1️⃣ Experience Years */}
        <div className={glowWrapper} data-aos="fade-up" data-aos-delay="100">
          <div style={carbonFiberStyle}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              20+ <span className="text-red-500">Years</span>
            </h3>
            <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg px-2 leading-relaxed">
              A trusted name in tinting for decades — delivering excellence across
              Nottingham and beyond.
            </p>
          </div>
        </div>

        {/* 2️⃣ 5-Star Rating */}
        <div className={glowWrapper} data-aos="fade-up" data-aos-delay="300">
          <div style={carbonFiberStyle}>
            <h3 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold">
              5 <Star className="w-6 h-6 text-red-500" />
              <span className="text-red-500">Rated</span>
            </h3>
            <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg px-2 leading-relaxed">
              Proudly recognised for our unmatched quality and customer
              satisfaction — every project, perfectly finished.
            </p>
          </div>
        </div>

        {/* 3️⃣ Completed Jobs */}
        <div className={glowWrapper} data-aos="fade-up" data-aos-delay="500">
          <div style={carbonFiberStyle}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              10,000+ <span className="text-red-500">Jobs</span>
            </h3>
            <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg px-2 leading-relaxed">
              Thousands of vehicles and properties transformed with precision,
              care, and lasting results.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
