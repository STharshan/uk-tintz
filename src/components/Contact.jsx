"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/s22.jpg')", // 👈 Replace with your image
      }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        data-aos="fade-in"
        data-aos-delay="100"
      ></div>

      <div
        className="relative z-10 w-full max-w-md text-center text-white"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {/* Heading */}
        <p
          className="uppercase text-red-500 font-semibold tracking-widest mb-2"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Contact
        </p>
        <h2
          className="text-3xl sm:text-4xl font-extrabold mb-10 leading-tight"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Lets Get Customising
        </h2>

        {/* Form */}
        <form
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-sm mx-auto text-left space-y-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div data-aos="fade-right" data-aos-delay="600">
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-red-500 outline-none"
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="700">
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-red-500 outline-none"
            />
          </div>

          <div data-aos="fade-right" data-aos-delay="800">
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="I want the best to do my tints..."
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-red-500 outline-none"
            ></textarea>
          </div>

          {/* Styled Submit Button */}
          <button
            type="submit"
            className="relative w-full flex items-center justify-between bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <span className="ml-4">Submit</span>
            <span className="absolute right-0.5 flex items-center justify-center bg-white text-red-600 rounded-full w-10 h-10">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>
            <p className="text-xs text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}
