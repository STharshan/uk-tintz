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
      {/* Background Decorative SVG */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <img
          src="https://framerusercontent.com/images/9DURixdLAKuMtn1bnVxkx4C5Y78.svg"
          alt="Background pattern"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-10 text-red-500 leading-tight mb-4">
          Premium Dashcam Installation
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Protect your vehicle and capture every drive with high-definition
          dashcams, seamless integration, and professional installation for
          peace of mind on the road.
        </p>

        {/* Main Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src="s3.jpg"
            alt="Dashcam Installation"
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
