"use client";
import React from "react";

export default function FitnessInspirationSection() {
  return (
    <section className="relative w-full h-screen bg-[#2B2F34] overflow-hidden">
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
      <div className="absolute top-[38%] w-full overflow-hidden whitespace-nowrap z-3">
        <h2 className="animate-leftToRight text-[8vw] font-extrabold uppercase tracking-tight leading-none text-white/90">
          Daily Fitness Inspiration • Follow Us For Daily Fitness Inspiration •
        </h2>
      </div>

      {/* 🔹 SECOND MOVING TEXT (Overlaps Right Image) */}
      <div className="absolute top-[58%] w-full overflow-hidden whitespace-nowrap z-20">
        <h2 className="animate-rightToLeft text-[8vw] font-extrabold uppercase tracking-tight leading-none">
          <span className="text-[#FFD42A]">Follow Us</span>{" "}
          <span className="text-white">For Daily Fitness Inspiration •</span>{" "}
          <span className="text-[#FFD42A]">Follow Us For Daily Fitness Inspiration •</span>
        </h2>
      </div>

      {/* 🟨 LEFT IMAGE — ABOVE FIRST TEXT */}
      <div
        className="
          absolute
          left-60
          top-[330px]
          z-15
        "
      >
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png"
            alt="Fitness Woman"
            className="w-[380px] h-[380px] object-cover rounded-2xl shadow-lg"
          />
          <span
            className="
              absolute bottom-[25px] left-[25px]
              text-[#FFD42A] font-extrabold uppercase
              text-[36px] leading-none tracking-wide
            "
          >
            Inspiration
          </span>
        </div>
      </div>

      {/* 🏋 RIGHT IMAGE — TEXT SHOULD OVERLAP HERE */}
      <div
        className="
          absolute
          right-60
          top-[250px]
          z-10
        "
      >
        <img
          src="https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png"
          alt="Bodybuilder"
          className="w-[380px] h-[380px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* 🌙 Subtle overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-[#2B2F34]/20 via-transparent to-[#2B2F34]/20 pointer-events-none"></div>
    </section>
  );
}