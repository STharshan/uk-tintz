"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="mb-12 pe-0 md:pe-90">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-red-500 mb-6">
            Service Overview
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] text-gray-300">
            <p>
              Our Reverse Camera Installation Service is designed to enhance your driving
              safety, confidence, and visibility. Using high-quality camera systems and
              precise installation techniques, we ensure you get a clear, reliable rear view
              every time you reverse. From selecting the right camera type to integrating it
              seamlessly with your vehicle’s dashboard or screen, every step is handled with
              expert care.
            </p>
            <p>
              This service blends modern technology with professional automotive installation,
              giving you improved awareness, reduced blind spots, and a smarter, safer driving
              experience. Whether your vehicle lacks a factory camera or you’re upgrading to a
              higher-resolution system, we deliver a clean and flawless setup.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Text Column */}
          <div className="flex flex-col gap-8">
            
            {/* Key Benefits */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-md p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>

              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Significantly improve rear visibility and reduce blind spots</li>
                <li>Increase parking accuracy and confidence in tight spaces</li>
                <li>Reduce the risk of minor collisions and reversing accidents</li>
                <li>Seamless integration with existing screens or aftermarket displays</li>
                <li>High-resolution cameras with night vision for low-light clarity</li>
                <li>Clean, professional installation with hidden wiring</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-md p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>

              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>New drivers who want added safety and reversing assistance</li>
                <li>Parents wanting better visibility around children and driveways</li>
                <li>Owners of vans, SUVs, and larger vehicles with limited rear view</li>
                <li>Drivers of older vehicles lacking modern safety features</li>
                <li>Fleet owners looking to improve driver safety and reduce accidents</li>
                <li>Anyone wanting convenient, stress-free parking</li>
              </ul>
            </div>

          </div>

          {/* Image Column */}
          <div className="rounded-xl overflow-hidden shadow-xl h-full flex items-stretch">
            <img
              src="s2.jpg"
              alt="Reverse Camera Installation"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
