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
              Our Stereo Fitting Service is designed to transform your in-car audio
              experience with clean installation, modern technology, and precision
              tuning. Whether you’re upgrading to a touchscreen unit, enhancing your
              speakers, or adding subwoofers and amplifiers, we ensure every component is
              fitted professionally for peak performance and a seamless factory-quality
              finish.
            </p>
            <p>
              This service blends technical expertise with high-end audio craftsmanship,
              giving you clearer sound, richer bass, and smarter connectivity. From wiring
              and integration to system tuning, we make sure your car audio upgrade looks
              flawless and sounds exceptional every time you drive.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text Column */}
          <div className="flex flex-col gap-8">
            {/* Key Benefits */}
            <div className="bg-gray-900 border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Achieve clearer, higher-quality sound and deeper bass</li>
                <li>Upgrade to Bluetooth, Apple CarPlay, Android Auto & smart connectivity</li>
                <li>Professional wiring ensures clean, safe, and long-lasting installation</li>
                <li>Improve overall audio system performance and reliability</li>
                <li>Enhance driving enjoyment with a custom-tuned sound profile</li>
                <li>Seamless integration with your vehicle’s interior and existing systems</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-gray-900 border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Drivers wanting a modern entertainment system with CarPlay or Android Auto</li>
                <li>Music lovers who want richer sound and more powerful audio</li>
                <li>Owners of older vehicles looking to upgrade outdated stereos</li>
                <li>Car enthusiasts wanting subwoofers, amps, and full audio builds</li>
                <li>Families needing Bluetooth hands-free and safer connectivity</li>
                <li>Anyone wanting a clean, factory-perfect installation with professional tuning</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="s11.png"
              alt="Stereo fitting overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
