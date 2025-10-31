import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/gym-bg.jpg')", // 👈 Replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-md text-center text-white">
        {/* Heading */}
        <p className="uppercase text-sm text-orange-500 tracking-widest mb-2">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 leading-tight">
          LET’S SCHEDULE <br /> YOUR FIRST SESSION
        </h2>

        {/* Form */}
        <form className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-sm mx-auto text-left space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="I want to build muscles..."
              className="w-full px-4 py-3 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          {/* Styled Submit Button */}
          <button
            type="submit"
            className="relative w-full flex items-center justify-between bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            <span className="ml-4">Submit</span>
            <span className="absolute right-0.5 flex items-center justify-center bg-white text-orange-600 rounded-full w-10 h-10">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
