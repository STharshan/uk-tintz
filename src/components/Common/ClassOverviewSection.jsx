"use client";
import React from "react";

export default function ClassOverviewTemplate({ data }) {
  return (
    <section className={`${data.bgColor} py-20 px-6 md:px-12`}>
      <div className="max-w-6xl mx-auto">

        {/* Title + Description */}
        <div className="mb-12 text-center">
          <h2
            className={`text-[36px] md:text-[40px] font-semibold ${data.textColor} mb-6`}
          >
            {data.overviewTitle}
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] max-w-4xl mx-auto text-gray-300">
            {data.overviewDescription.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-8">

            {/* Benefits */}
            <div
              className="
                bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8
                transform transition duration-300 hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]
                active:scale-95 active:shadow-[0_0_15px_rgba(255,0,0,0.7)]
                cursor-pointer
              "
            >
              <h3 className={`text-[20px] font-semibold ${data.textColor} mb-5`}>
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                {data.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Perfect For */}
            <div
              className="
                bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8
                transform transition duration-300 hover:scale-105
                hover:shadow-[0_0_20px_rgba(255,0,0,0.7)]
                active:scale-95 active:shadow-[0_0_15px_rgba(255,0,0,0.7)]
                cursor-pointer
              "
            >
              <h3 className={`text-[20px] font-semibold ${data.textColor} mb-5`}>
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                {data.perfectFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-md h-full">
            <img
              src={data.overviewImage}
              alt={data.overviewImageAlt}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
