"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Star } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // animation happens only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 gap-10">
        {/* Left content */}
        <div
          className="max-w-lg text-center lg:text-left space-y-4"
          data-aos="fade-right"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mt-10">
            UK Tintz – Window Tinting Specialists
          </p>
          <h1
            className="text-4xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Trusted Automotive <br />
            <span className="text-red-500">Tinting Expert</span>
          </h1>
          <p
            className="text-gray-400 text-base mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Professional window tinting, car vinyl wrapping, and commercial
            tinting - delivered with precision and care.
          </p>

          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Get in Touch
          </a>

          {/* Key points */}
          <div
            className="space-y-3 sm:justify-start sm:items-center gap-4 mt-10"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" size={18} />
              <span>Over 10000+ Vehicles Transformed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" size={18} />
              <span>20+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-red-500" size={18} />
              <span>Nottingham Most Trusted Tinting Specialist</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div
          className="w-full max-w-md"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="/s1.jpg" // replace with your image path
            alt="Personal Trainer"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="bg-[#0f0f0f] py-16 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
          <div
            key={i}
            className="space-y-3"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <div className="flex justify-center">
              {Array(5)
                .fill(0)
                .map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="text-red-500 fill-red-500"
                  />
                ))}
            </div>
            <p className="text-gray-300">{item.review}</p>
          </div>
        ))}
      </section> */}
    </div>
  );
}
