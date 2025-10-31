import React from "react";
import { CheckCircle, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 gap-10">
        {/* Left content */}
        <div className="max-w-lg text-center lg:text-left space-y-6">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Empower – Personal Trainer Template
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            YOUR TRUSTED <br />
            <span className="text-orange-500">PERSONAL TRAINER</span>
          </h1>
          <p className="text-gray-400 text-base">
            Professional personal training and online coaching.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Book a session
          </button>

          {/* Key points */}
          <div className=" space-y-3 sm:justify-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={18} />
              <span>Over 200 clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={18} />
              <span>10 years of experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={18} />
              <span>5 years of competitions</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full max-w-md">
          <img
            src="/trainer.png" // replace with your image path
            alt="Personal Trainer"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0f0f0f] py-16 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            review:
              "Peter is really an awesome coach. The results we achieved in just 2 months are beyond what I expected.",
          },
          {
            review:
              "My progress has been astonishing. I feel empowered and motivated like never before.",
          },
          {
            review:
              "This journey has been incredibly rewarding. I am so thankful for the guidance and support.",
          },
        ].map((item, i) => (
          <div key={i} className="space-y-3">
            <div className="flex justify-center">
              {Array(5)
                .fill(0)
                .map((_, j) => (
                  <Star key={j} size={18} className="text-orange-500 fill-orange-500" />
                ))}
            </div>
            <p className="text-gray-300">{item.review}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
