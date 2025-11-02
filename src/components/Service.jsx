"use client";
import React from "react";

const services = [
  {
    name: "Window Tinting",
    img: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png",
  },
  {
    name: "Stereo Fitting",
    img: "https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png",
  },
  {
    name: "Reverse Camera",
    img: "https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png",
  },
  {
    name: "Parking Sensors",
    img: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
  },
  {
    name: "Dashcams",
    img: "https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg",
  },
  {
    name: "Commercial Window",
    img: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
  },
  {
    name: "Residential Tinting",
    img: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-black text-white py-20 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 text-3xl font-extrabold uppercase mb-3 tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We offer professional automotive and tinting services to upgrade and
          protect your vehicle or property.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center items-center gap-0 w-full max-w-[1600px] mx-auto overflow-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-1/4 min-w-[300px] h-[550px] transform transition-transform duration-500 hover:scale-[1.03]"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Text */}
            <h3 className="absolute inset-0 flex items-center justify-center text-center px-2 text-2xl font-bold uppercase tracking-wide">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
