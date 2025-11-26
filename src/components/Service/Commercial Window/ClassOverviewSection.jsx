"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 text-center">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-red-500 mb-6">
            Service Overview
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] max-w-4xl mx-auto text-gray-300">
            <p>
              Our Commercial Window Tinting Service is designed to enhance your building’s comfort, privacy, and energy efficiency. Using high-performance architectural films and precision installation techniques, we provide a flawless finish that reduces heat, blocks harmful UV rays, and improves the appearance of any workspace. From offices and shopfronts to warehouses and retail units, every project is completed with accuracy and long-lasting quality.
            </p>
            <p>
              This service blends modern solar-control technology with professional craftsmanship, giving your business improved indoor climate control, enhanced privacy, and a cleaner, more professional look. Whether you want a cooler workspace, reduced glare, or a sleek external appearance, our tinting delivers consistent results and long-term savings.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text Column */}
          <div className="flex flex-col gap-8">
            {/* Key Benefits */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Reduce heat and maintain a cooler indoor environment</li>
                <li>Block up to 99% of harmful UV rays to protect people and furnishings</li>
                <li>Lower energy costs by improving temperature regulation</li>
                <li>Increase privacy without darkening your workspace</li>
                <li>Reduce glare on screens and improve employee comfort</li>
                <li>Enhance building aesthetics with a clean, uniform finish</li>
                <li>Protect interiors from fading, cracking, and sun damage</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Offices needing reduced glare and improved working conditions</li>
                <li>Retail stores and shopfronts wanting privacy and heat control</li>
                <li>Gyms, salons, and clinics looking for a professional, clean appearance</li>
                <li>Restaurants and cafés wanting better comfort and sun protection</li>
                <li>Warehouses and commercial units seeking energy-efficiency upgrades</li>
                <li>Property managers and landlords aiming to protect and modernise buildings</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="s27.jpg"
              alt="Commercial Window Tinting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
