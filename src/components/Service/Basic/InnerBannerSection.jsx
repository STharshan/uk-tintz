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
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* 🌀 Background Decorative SVG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover object-left opacity-60"
        />
      </div>

      {/* 🧠 Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Schedule Tag */}
        <div className="inline-block bg-[#CFE7CB] text-[#376131] font-semibold text-sm px-5 py-2 rounded-full mb-6">
          Wednesdays at 6:00 PM, Fridays at 5:00 PM
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4">
          Agility & Quickness Drills
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Train your body and mind to react faster, move sharper, and outmaneuver
          the competition.
        </p>

        {/* 🖼 Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="https://framerusercontent.com/images/cLQx5GnwMFcU0Y20UyhLIJLroYw.jpg"
            alt="Agility Training"
            className="w-full h-[460px] object-cover rounded-xl shadow-xl"
          />

          {/* 🏷 Labels */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center space-x-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
