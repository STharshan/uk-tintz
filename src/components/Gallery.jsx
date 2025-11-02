"use client";
import React from "react";

export default function FitnessInspirationSection() {
  return (
    <section className="relative w-full h-screen bg-[#2B2F34] overflow-hidden flex items-center justify-center">
      {/* ✅ CSS Animations */}
      <style>{`
        @keyframes moveLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes moveRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-leftToRight {
          display: inline-block;
          animation: moveLeftToRight 25s linear infinite;
        }
        .animate-rightToLeft {
          display: inline-block;
          animation: moveRightToLeft 25s linear infinite;
        }
      `}</style>

      {/* 🔹 FIRST MOVING TEXT (Behind Both Images) */}
      <div className="absolute top-[30%] w-full overflow-hidden whitespace-nowrap z-0">
        <h2 className="animate-leftToRight text-[5vw] font-extrabold uppercase tracking-tight leading-none text-white/90">
          Daily Fitness Inspiration • Follow Us For Daily Fitness Inspiration •
        </h2>
      </div>

      {/* 🔹 SECOND MOVING TEXT (Overlaps Right Image) */}
      <div className="absolute bottom-[35%] w-full overflow-hidden whitespace-nowrap z-20">
        <h2 className="animate-rightToLeft text-[5vw] font-extrabold uppercase tracking-tight leading-none">
          <span className="text-[#FFD42A]">Follow Us</span>{" "}
          <span className="text-white">For Daily Fitness Inspiration •</span>{" "}
          <span className="text-[#FFD42A]">
            Follow Us For Daily Fitness Inspiration •
          </span>
        </h2>
      </div>

      {/* 🟨 IMAGE CONTAINER (Centered vertically via flex) */}
      <div className="flex items-center justify-between w-[80%] max-w-[1400px] z-10">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png"
            alt="Fitness Woman"
            className="w-[380px] h-[380px] object-cover rounded-2xl shadow-lg"
          />
          <span className="absolute bottom-[25px] left-[25px] text-[#FFD42A] font-extrabold uppercase text-[36px] leading-none tracking-wide">
            Inspiration
          </span>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png"
            alt="Bodybuilder"
            className="w-[380px] h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* 🌙 Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2F34]/30 via-transparent to-[#2B2F34]/30 pointer-events-none"></div>
    </section>
  );
}
