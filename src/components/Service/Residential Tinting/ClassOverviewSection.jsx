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
              Our Residential Window Tinting Service is designed to improve your home’s comfort, privacy, and energy efficiency. Using high-quality solar-control and privacy films, we provide a clean, seamless finish that reduces heat, blocks harmful UV rays, and enhances the overall look of your home. From living rooms and bedrooms to conservatories and large glass panels, every installation is carried out with precision and care.
            </p>
            <p>
              This service blends advanced window film technology with professional craftsmanship, giving your home better temperature regulation, reduced glare, and improved privacy—without sacrificing natural light. Whether you want a cooler home, added daytime privacy, or protection for your furniture and flooring, our tinting delivers long-lasting comfort and value.
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
                <li>Reduce heat and create a cooler, more comfortable home</li>
                <li>Block up to 99% of UV rays to protect skin and household interiors</li>
                <li>Improve daytime privacy without darkening your space</li>
                <li>Lower energy bills by enhancing insulation and reducing heat gain</li>
                <li>Reduce glare on TVs, screens, and reflective surfaces</li>
                <li>Prevent fading and sun damage to furniture, blinds, and flooring</li>
              </ul>
            </div>

            {/* Who This Service Is Perfect For */}
            <div className="bg-[#111111] border border-red-500/20 rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-red-500 mb-5">
                Who This Service Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                <li>Homeowners wanting added comfort and lower energy costs</li>
                <li>Families seeking UV protection for children and pets</li>
                <li>Homes with large windows, conservatories, or sunrooms</li>
                <li>Anyone wanting daytime privacy without closing blinds or curtains</li>
                <li>New builds and modern homes with large glass areas</li>
                <li>Landlords and property owners wanting long-term protection and efficiency</li>
              </ul>
            </div>
          </div>

          {/* 🔹 Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="s23.jpg"
              alt="Residential Window Tinting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
