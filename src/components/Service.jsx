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
    name: "Residential Tinting",
    media: "/residential window tinting services page.mp4",
    type: "video",
    link: "/residentialtinting",
  },
   {
    name: "Commercial Window",
    media: "/s28.jpg",
    type: "image",
    link: "/commercialwindow",
  },
  {
  name: "Interior Vinyl Wrapping",
  media: "/s8.jpg",
  type: "image",
  link: "/interiorVinylWrapping",
},
{
  name: "Car Vinyl Wrapping",
  media: "/s17.jpg",
  type: "image",
  link: "/CarVinylWrapping",
},
{
  name: "Sun Visors",
  media: "/sun visor video.mp4",
  type: "video",
  link: "/sunVisors",
},
{
  name: "Headlight & Taillight Tinting",
  media: "/s18.jpg",
  type: "image",
  link: "/headlightTaillightTinting",
},
  {
    name: "Dashcams",
    media: "/newstereo.mp4",
    type: "video",
    link: "/dashcams",
  },
   {
    name: "Reverse Camera",
    media: "/s9.jpg",
    type: "image",
    link: "/reversecamera",
  },
 {
    name: "Parking Sensors",
    media: "/Parking.mp4",
    type: "video",
    link: "/parkingsensors",
  },
 
  {
    name: "Stereo Fitting",
    media: "/newstereo.mp4",
    type: "video",
    link: "/stereofitting",
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
    <section className="w-full bg-black text-white py-12 sm:py-16 md:py-20 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4" data-aos="fade-up">
        <h2 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-2 sm:mb-3 tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          We offer professional automotive and tinting services to upgrade and
          protect your vehicle or property.
        </p>
      </div>

      {/* Service Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 lg:grid-cols-3 xl:grid-cols-4  w-full max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="relative w-full h-[400px] transform transition-transform duration-500 hover:scale-[1.02] lg:hover:scale-[1.03] group"
          >
            {/* Media: Image or Video */}
            {service.type === "image" ? (
              <img
                src={service.media}
                alt={service.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            ) : (
              <video
                src={service.media}
                className="w-full h-full object-cover rounded-xl shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-4 sm:mb-5 md:mb-6">
                {service.name}
              </h3>
              <Link
                to={service.link}
                className="bg-red-500 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg uppercase text-xs sm:text-sm hover:bg-red-600 transition-colors duration-300 shadow-lg"
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