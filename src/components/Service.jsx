"use client";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Window Tinting",
    img: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png",
    link: "/windowtinting",
  },
  {
    name: "Stereo Fitting",
    img: "https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png",
    link: "/stereofitting",
  },
  {
    name: "Reverse Camera",
    img: "https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png",
    link: "/reversecamera",
  },
  {
    name: "Parking Sensors",
    img: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
    link: "/parkingsensors",
  },
  {
    name: "Dashcams",
    img: "https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg",
    link: "/dashcams",
  },
  {
    name: "Commercial Window",
    img: "https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg",
    link: "/commercialwindow",
  },
  {
    name: "Residential Tinting",
    img: "https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png",
    link: "/residentialtinting",
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
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">
                {service.name}
              </h3>
              <Link
                to={service.link}
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg uppercase text-sm hover:bg-yellow-500 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
