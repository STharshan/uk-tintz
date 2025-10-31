"use client";
import React from "react";
import { Star } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative w-full bg-[#14181E] py-24 overflow-hidden">
      {/* 🔹 Background arrows (left & right shapes) */}
      <div className="absolute inset-0 flex justify-between opacity-[0.04] pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[360px] rotate-90 object-contain"
        />
        <img
          src="https://framerusercontent.com/images/ZEh9xZnnCBZe9ERkdh9UXNmGAYQ.png"
          alt="Shape"
          className="w-[360px] -rotate-90 object-contain"
        />
      </div>

      {/* 🔹 Stats Content */}
      <div className="relative z-10 container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        {/* 1️⃣ Active Users */}
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold">
            124K<span className="text-[#FFD42A]">+</span>
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            Trusted by thousands—join us and experience the benefits today!
          </p>
        </div>

        {/* 2️⃣ Rating */}
        <div>
          <h3 className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-extrabold">
            4.9
            <Star className="w-6 h-6 text-[#FFD42A] fill-[#FFD42A]" />
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            Highly rated by Pulse users worldwide! Explore the reviews here.
          </p>
        </div>

        {/* 3️⃣ Workouts */}
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold">
            100<span className="text-[#FFD42A]">+</span>
          </h3>
          <p className="text-gray-300 mt-3 text-base md:text-lg max-w-[280px] mx-auto">
            Countless workouts available now, with more being added! Shape your
            bright future today.
          </p>
        </div>
      </div>
    </section>
  );
}