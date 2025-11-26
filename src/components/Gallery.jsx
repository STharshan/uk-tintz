"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";

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

      {/* IMAGE + ICON CONTAINER */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 w-[90%] max-w-[1400px] z-10"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* LEFT IMAGE */}
        <div className="relative top-[0vh] md:top-[10vh]" data-aos="fade-right">
          <img
            src="/uk1.png"
            alt="Fitness Woman"
            className="w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-2xl shadow-lg"
          />
          <span className="absolute bottom-[20px] left-[20px] text-red-500 font-extrabold uppercase text-[24px] md:text-[36px] leading-none tracking-wide">
            Car Inspiration
          </span>
        </div>

        {/* INSTAGRAM ICON (Centered always + 2px up) */}
        <a
          href="https://www.instagram.com/uktintz/"
          target="_blank"
          className="translate-y-[-2px]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div
            className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center
                       bg-gradient-to-br from-[#FEDA75] via-[#FA7E1E] via-[#D62976] to-[#962FBF]
                       shadow-xl cursor-pointer transition-transform duration-300
                       hover:scale-110"
          >
            <FaInstagram className="text-white text-[35px] md:text-[42px]" />
          </div>
        </a>

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
