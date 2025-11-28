"use client";
import React from "react";

export default function InnerBannerSection({ data }) {
  return (
    <section className={`relative w-full ${data.bgColor} py-20`}>
      <div className="max-w-5xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl mt-10 font-extrabold leading-tight mb-4 ${data.textColor}`}
        >
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          {data.subtitle}
        </p>

        {/* Image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src={data.image}
            alt={data.imageAlt}
            className="w-full h-[300px] sm:h-[380px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
