"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function FitnessInspirationSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* CSS animations */}
      <style>{`
        @keyframes moveLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes moveRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-leftToRight {
          display: inline-block;
          animation: moveLeftToRight 25s linear infinite;
        }
        .animate-rightToLeft {
          display: inline-block;
          animation: moveRightToLeft 25s linear infinite;
        }
      `}</style>

      {/* FIRST MOVING TEXT */}
      <div className="absolute top-[30%] w-full overflow-hidden whitespace-nowrap z-0">
        <h2
          className="animate-leftToRight text-[5vw] font-extrabold uppercase tracking-tight leading-none text-white/90"
          data-aos="fade-down"
        >
          Follow us for Car Inspiration • Follow us for Car Inspiration •
        </h2>
      </div>

      {/* SECOND MOVING TEXT */}
      <div className="absolute bottom-[35%] w-full overflow-hidden whitespace-nowrap z-20">
        <h2
          className="animate-rightToLeft text-[5vw] font-extrabold uppercase tracking-tight leading-none"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-red-500">Follow Us</span>{" "}
          <span className="text-white">For Daily Fitness Inspiration •</span>{" "}
          <span className="text-red-500">Follow us for Car Inspiration •</span>
        </h2>
      </div>

      {/* IMAGE + ICONS CONTAINER */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 w-[90%] max-w-[1400px] z-10"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* LEFT IMAGE */}
        <div className="relative top-0 md:top-[10vh]" data-aos="fade-right">
          <img
            src="/uk1.png"
            alt="Fitness Woman"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* SOCIAL ICONS (Instagram, TikTok, Facebook) */}
        <div className="flex flex-row items-center gap-6">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/uktintz/"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div
              className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center
                       bg-linear-to-br from-[#FEDA75] via-[#f37a1d] via-[#d12774] to-[#962FBF]
                       shadow-xl cursor-pointer transition-transform duration-300
                       hover:scale-110"
            >
              <FaInstagram className="text-white text-[35px] md:text-[42px]" />
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@uktintz"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div
              className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center
                       bg-white shadow-xl cursor-pointer transition-transform duration-300
                       hover:scale-110"
            >
              <FaTiktok className="text-black text-[35px] md:text-[42px]" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/uktintz.nottingham/?locale=en_GB"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div
              className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center
                       bg-[#1877F2] shadow-xl cursor-pointer transition-transform duration-300
                       hover:scale-110"
            >
              <FaFacebookF className="text-white text-[32px] md:text-[40px]" />
            </div>
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <img
            src="/uk2.png"
            alt="Bodybuilder"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
