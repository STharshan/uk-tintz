"use client";
import React from "react";

export default function InnerBannerSection() {
  const tags = [
    {
      name: "MoveFast",
      icon: "https://framerusercontent.com/images/f1PRfD5Uxe55WYuC6fWEJVDypA.svg",
    },
    {
      name: "AgilityTraining",
      icon: "https://framerusercontent.com/images/CHCVeiB1ujTRQAPQK3xYLcMiZ8.svg",
    },
    {
      name: "ReactionSpeed",
      icon: "https://framerusercontent.com/images/6zSK36f8nPc0YDZURvTVaj3Y.svg",
    },
    {
      name: "QuickFeet",
      icon: "https://framerusercontent.com/images/gKavYaGgysPZA7KY5btL71nGBE.svg",
    },
  ];

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* 🌀 Background Decorative SVG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover object-left opacity-40"
        />
      </div>

      {/* 🧠 Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 leading-tight mb-4 mt-10">
          Premium Window Tinting Service
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Enhance your vehicle’s style, comfort, and protection with high-quality UV-shielding tinting solutions.
        </p>

        {/* 🖼 Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s4.jpg"
            alt="Vehicle Tinting"
            className="w-full h-[460px] object-cover rounded-xl shadow-xl"
          />

          {/* 🏷 Labels */}
          {/* Uncomment if you want tags */}
          {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center space-x-4">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-[#CFE7CB] rounded-full shadow-md hover:scale-105 transition-transform duration-300 whitespace-nowrap"
              >
                <img
                  src={tag.icon}
                  alt={tag.name}
                  className="w-5 h-5 object-contain"
                />
                <span className="font-semibold text-black">{tag.name}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
