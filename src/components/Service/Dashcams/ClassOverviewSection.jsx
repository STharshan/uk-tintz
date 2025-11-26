"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* 🧠 Top Section */}
        <div className="mb-12 text-center">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-red-500 mb-6">
            Service Overview
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] max-w-4xl mx-auto text-gray-300">
            <p>
              Our Dashcam Installation Service is designed to give you complete peace of mind on the road with crystal-clear video recording and seamless integration. Using high-quality front or front-and-rear dashcam systems, we install every device with hidden wiring, secure mounting, and perfect positioning for maximum coverage. Whether you want accident protection, parking surveillance, or enhanced security, we ensure a clean and reliable setup.
            </p>
            <p>
              This service blends modern safety technology with expert automotive workmanship, giving you continuous recording, smart app connectivity, and evidence-ready footage whenever you need it. From power management to optimal camera angles, every part of the installation is done with precision.
            </p>
          </div>
        </div>

        {/* ⚡ Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* 🔹 Text Column */}
          <div className="flex flex-col gap-8">
            
            {/* Key Benefits */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Record every journey with HD or 4K clarity</li>
                <li>Protect yourself with reliable evidence during accidents or disputes</li>
                <li>Continuous loop recording with motion detection</li>
                <li>Parking mode to monitor your vehicle when left unattended</li>
                <li>Clean, hidden wiring for a factory-style finish</li>
                <li>Easy access to footage through Wi-Fi, apps, or SD card</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Daily drivers wanting peace of mind and accident evidence</li>
                <li>New drivers and families wanting extra safety monitoring</li>
                <li>Rideshare and delivery drivers needing reliable video proof</li>
                <li>Business owners and fleets looking to protect vehicles and drivers</li>
                <li>Owners of high-value cars wanting 24/7 vehicle surveillance</li>
                <li>Anyone who wants a clean, professional installation with no visible cables</li>
              </ul>
            </div>
          </div>

          {/* 🔹 Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="s13.jpg"
              alt="Dashcam installation"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
