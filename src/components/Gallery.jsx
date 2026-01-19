"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function SocialInspirationSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const tickerText = "Follow us for Car Inspiration • ";

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center" id="social">
      
      {/* FIRST MOVING TEXT (TOP) */}
      <div className="absolute top-[30%] w-full overflow-hidden z-0 pointer-events-none">
        <div className="animate-leftToRight ticker-wrapper">
          <h2 className="text-[5vw] font-extrabold uppercase tracking-tight leading-none text-white/10">
            {tickerText.repeat(8)}
          </h2>
        </div>
      </div>

      {/* SECOND MOVING TEXT (BOTTOM) */}
      <div className="absolute bottom-[35%] w-full overflow-hidden z-20 pointer-events-none">
        <div className="animate-rightToLeft ticker-wrapper">
          <h2 className="text-[5vw] font-extrabold uppercase tracking-tight leading-none">
            <span className="text-orange-600">{tickerText}</span>
            <span className="text-white/20">{tickerText}</span>
            <span className="text-orange-600">{tickerText}</span>
            <span className="text-white/20">{tickerText.repeat(4)}</span>
          </h2>
        </div>
      </div>

      {/* IMAGE + ICONS CONTAINER */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 w-[90%] max-w-[1400px] z-30"
        data-aos="zoom-in"
      >
        {/* LEFT IMAGE */}
        <div className="relative" data-aos="fade-right" data-aos-delay="100">
          <img
            src="/uk1.png"
            alt="Car Interior"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-3xl shadow-2xl border border-white/10"
          />
        </div>

        {/* SOCIAL ICONS CENTER */}
        <div className="flex flex-row items-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/uktintz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#FEDA75] via-[#d12774] to-[#962FBF] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <FaInstagram className="text-white text-[32px] md:text-[40px]" />
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@uktintz"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center bg-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
              <FaTiktok className="text-black text-[32px] md:text-[40px]" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/uktintz.nottingham/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center bg-[#1877F2] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <FaFacebookF className="text-white text-[30px] md:text-[38px]" />
            </div>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <img
            src="/uk2.png"
            alt="Car Exterior"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}