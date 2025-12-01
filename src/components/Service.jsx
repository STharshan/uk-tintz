"use client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    name: "Window Tinting",
    media: "/tint.mp4",
    type: "video",
    link: "/windowtinting",
  },
  {
    name: "Stereo Fitting",
    media: "/stero.mp4",
    type: "video",
    link: "/stereofitting",
  },
  {
    name: "Reverse Camera",
    media: "/s9.jpg",
    type: "image",
    link: "/reversecamera",
  },
  {
    name: "Parking Sensors",
    media: "/s17.jpg",
    type: "image",
    link: "/parkingsensors",
  },
  {
    name: "Dashcams",
    media: "/s3.jpg",
    type: "image",
    link: "/dashcams",
  },
  {
    name: "Commercial Window",
    media: "/s28.jpg",
    type: "image",
    link: "/commercialwindow",
  },
  {
    name: "Residential Tinting",
    media: "/s26.jpg",
    type: "image",
    link: "/residentialtinting",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-red-500 text-3xl font-extrabold uppercase mb-3 tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We offer professional automotive and tinting services to upgrade and
          protect your vehicle or property.
        </p>
      </div>

      {/* Service Cards */}
      <div
        className="flex flex-wrap justify-center items-center gap-0 w-full max-w-[1600px] mx-auto overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative w-1/4 min-w-[300px] h-[550px] transform transition-transform duration-500 hover:scale-[1.03]"
          >
            {/* Media: Image or Video */}
            {service.type === "image" ? (
              <img
                src={service.media}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={service.media}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-6">
                {service.name}
              </h3>
              <Link
                to={service.link}
                className="bg-red-500 text-black font-semibold px-6 py-3 rounded-lg uppercase text-sm hover:bg-red-600 transition-colors duration-300"
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
