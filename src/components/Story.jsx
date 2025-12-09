"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

export default function StatsSection() {
  // ✅ Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative w-full bg-black py-24 overflow-hidden"
      data-aos="fade-up"
    >
      {/* 🔹 Background arrows (left & right shapes) */}
      <div className="absolute inset-0 flex justify-between opacity-[0.04] pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[360px] rotate-90 object-contain"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[360px] -rotate-90 object-contain"
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>

      {/* 🔹 Stats Content */}
      <div
        className="relative z-10 container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white"
      >
        {/* 1️⃣ Active Users */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-4xl md:text-5xl font-extrabold">
            20+
            <span className="text-red-500">Years</span>
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            A trusted name in tinting for decades — delivering excellence across
            the Nottingham and beyond.
          </p>
        </div>

        {/* 2️⃣ Rating */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-extrabold">
            5
            <Star className="w-6 h-6" />
            <span className="text-red-500">Rated</span>
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            Proudly recognised for our unmatched quality and customer
            satisfaction — every project, perfectly finished.
          </p>
        </div>

        {/* 3️⃣ Workouts */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-4xl md:text-5xl font-extrabold">
            10,000+
            <span className="text-red-500">Jobs</span>
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            Thousands of vehicles and properties transformed with precision,
            care, and lasting results.
          </p>
        </div>
      </div>
    </section>
  );
}
