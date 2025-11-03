"use client";
import React from "react";
import { Gift } from "lucide-react";

export default function LimitedTimeOffer() {
  return (
    <section className="max-w-6xl mx-auto my-20 rounded-xl overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-2 bg-white">
        {/* 🖤 Text Section */}
        <div className="bg-black text-white flex flex-col justify-center p-10 md:p-14 rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="text-yellow-400 w-10 h-10" />
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Limited-time offer
            </h2>
          </div>

          <p className="text-gray-200 text-base mb-8">
            Sign up today and get <span className="font-semibold">1 FREE personal training session!</span>
          </p>

          <button className="bg-[#376131] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2b4d25] transition-all duration-300 shadow-md w-fit">
            Start your journey now
          </button>
        </div>

        {/* 🏋️ Image Section */}
        <div className="relative">
          <img
            src="https://framerusercontent.com/images/83MkgWL0bWkjdeLkeVHDwSeSwAY.jpg"
            alt="Athlete"
            className="w-full h-full object-cover rounded-b-xl md:rounded-bl-none md:rounded-r-xl"
          />
        </div>
      </div>
    </section>
  );
}
