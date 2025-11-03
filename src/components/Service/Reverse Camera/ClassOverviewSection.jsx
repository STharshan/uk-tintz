"use client";
import React from "react";

export default function ClassOverviewSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* 🧠 Top Section */}
        <div className="mb-12 pe-0 md:pe-90">
          <h2 className="text-[36px] md:text-[40px] font-semibold text-[#111827] mb-6">
            Class Overview
          </h2>

          <div className="space-y-5 text-[16px] leading-[1.8] text-[#1f2937]">
            <p>
              Our Agility & Quickness Drills class is built to elevate your
              athleticism by improving reaction time, directional changes, and
              multi-directional speed. Through ladder drills, cone work, and
              cognitive reaction exercises, you’ll sharpen your footwork and
              enhance your ability to change direction with precision and
              control.
            </p>
            <p>
              This class blends physical and neurological training, helping you
              develop faster reflexes and superior body awareness on and off the
              field. Whether you’re an athlete preparing for high-level
              competition or someone seeking to move more efficiently, this
              class will challenge your mind-muscle connection and improve your
              coordination.
            </p>
          </div>
        </div>

        {/* ⚡ Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 🔹 Text Column */}
          <div className="flex flex-col gap-8">
            {/* Key Benefits */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-[#111827] mb-5">
                Key Benefits
              </h3>
              <ul className="space-y-3 list-disc list-inside text-[#374151]">
                <li>Enhance agility and reactive speed</li>
                <li>Improve balance and proprioception</li>
                <li>Increase acceleration and deceleration control</li>
                <li>Boost coordination and body control under fatigue</li>
                <li>
                  Strengthen ankle, knee, and hip stabilizers to prevent injuries
                </li>
                <li>
                  Improve cognitive focus and split-second decision-making
                </li>
              </ul>
            </div>

            {/* Who This Program Is Perfect For */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl shadow-sm p-8">
              <h3 className="text-[20px] font-semibold text-[#111827] mb-5">
                Who This Program Is Perfect For
              </h3>
              <ul className="space-y-3 list-disc list-inside text-[#374151]">
                <li>
                  Competitive athletes in sports like soccer, basketball, tennis,
                  and football
                </li>
                <li>
                  Youth athletes developing foundational athletic skills
                </li>
                <li>
                  Weekend warriors and general fitness clients wanting to move
                  better
                </li>
                <li>
                  Coaches and teams looking for advanced agility programming
                </li>
                <li>
                  Anyone aiming to enhance speed and agility for daily activities
                  or sports
                </li>
              </ul>
            </div>
          </div>

          {/* 🔹 Image Column */}
          <div className="rounded-xl overflow-hidden shadow-md h-full flex items-stretch">
            <img
              src="https://framerusercontent.com/images/B22DbI7v97CFuGsS7OSuqRjI.jpg"
              alt="Athlete training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
