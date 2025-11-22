"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* 🧠 Top Section */}
        <div className="mb-12 pe-0 md:pe-90">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-red-500 mb-6">
            Service Overview
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] text-gray-300">
            <p>
              Our Window Tinting Service is designed to elevate your vehicle’s comfort, appearance, and protection. By using high-quality films and precision installation techniques, we ensure a flawless finish that enhances privacy, reduces heat, and protects your interior from harmful UV rays. From shade selection to expert application, every step is carried out with accuracy and attention to detail.
            </p>
            <p>
              This service blends craftsmanship and modern technology, giving your vehicle a cleaner aesthetic while improving long-term durability. Whether you’re looking for a sleek, premium look or improved cabin comfort, our tinting service delivers consistent, high-level results you’ll feel every time you drive.
            </p>
          </div>
        </div>

        {/* ⚡ Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 🔹 Text Column */}
          <div className="flex flex-col gap-8">
            {/* Key Benefits */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Reduce interior heat and create a cooler driving environment</li>
                <li>Block up to 99% of harmful UV rays to protect skin and interiors</li>
                <li>Increase privacy without sacrificing visibility</li>
                <li>Prevent fading, cracking, and sun damage to upholstery and dashboard</li>
                <li>Enhance vehicle appearance with a clean, premium finish</li>
                <li>Improve safety by reducing glare and strengthening glass structure</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Drivers who want a sleek, stylish upgrade to their vehicle’s appearance</li>
                <li>Anyone looking to reduce glare and increase driving comfort</li>
                <li>Families wanting added UV protection for children and passengers</li>
                <li>Car enthusiasts who prefer a customised, premium aesthetic</li>
                <li>Professionals who want more privacy and reduced visibility into their vehicle</li>
                <li>Owners looking to protect and preserve their interior for long-term value</li>
              </ul>
            </div>
          </div>

          {/* 🔹 Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="uk1.png"
              alt="Vehicle Tinting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
