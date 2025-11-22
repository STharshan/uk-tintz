"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 md:pr-20">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-red-500 mb-6">
            Service Overview
          </h2>

          <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-gray-300">
            <p>
              Our Parking Sensor Installation Service is designed to give you greater confidence and safety while manoeuvring in tight spaces. Using high-quality ultrasonic sensors and precise installation techniques, we ensure accurate distance detection and seamless integration with your vehicle. From selecting the right sensor setup to clean wiring and factory-style placement, every detail is handled with professional care.
            </p>
            <p>
              This service combines modern safety technology with expert automotive installation, giving you clearer spatial awareness, reduced reversing risks, and a smoother parking experience. Whether you drive a compact car or a large van, our parking sensors provide reliable, real-time alerts to help you avoid obstacles with ease.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text Column */}
          <div className="flex flex-col gap-8">
            {/* Key Benefits */}
            <div className="bg-[#111111] border border-red-500/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Improve parking accuracy and reduce collision risks</li>
                <li>Ultrasonic sensors detect obstacles not visible in mirrors</li>
                <li>Audio and visual alerts for safer manoeuvring</li>
                <li>Clean installation with factory-style finish</li>
                <li>Perfect for tight streets, car parks, and driveways</li>
                <li>Boost overall vehicle safety and driver confidence</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-[#111111] border border-red-500/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Drivers who park in tight or busy areas</li>
                <li>New drivers wanting added safety and reversing support</li>
                <li>Owners of vans, SUVs, and long vehicles with limited visibility</li>
                <li>Families seeking extra protection in driveways and school zones</li>
                <li>Businesses and fleet owners looking to reduce parking damage</li>
                <li>Anyone wanting a simple upgrade to enhance safety</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden shadow-xl flex items-stretch h-full hover:scale-105 transition-transform duration-500">
            <img
              src="s4.jpg"
              alt="Parking Sensor Installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
