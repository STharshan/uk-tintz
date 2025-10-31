"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Window Tinting",
    image:
      "https://images.unsplash.com/photo-1607863680005-c0a4693eec6e?q=80&w=1470&auto=format&fit=crop",
    link: "/window-tinting",
  },
  {
    title: "Stereo Fitting",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop",
    link: "/stereo-fitting",
  },
  {
    title: "Reverse Camera Fitting",
    image:
      "https://images.unsplash.com/photo-1607863680015-80ccbdce1927?q=80&w=1470&auto=format&fit=crop",
    link: "/reverse-camera",
  },
  {
    title: "Parking Sensors",
    image:
      "https://images.unsplash.com/photo-1597004311890-b2f92c3b0e1a?q=80&w=1470&auto=format&fit=crop",
    link: "/parking-sensors",
  },
  {
    title: "Dashcams",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop",
    link: "/dashcams",
  },
  {
    title: "Commercial Window Tinting",
    image:
      "https://images.unsplash.com/photo-1597092418741-07e93c8e3b8b?q=80&w=1470&auto=format&fit=crop",
    link: "/commercial-tinting",
  },
  {
    title: "Residential Tinting",
    image:
      "https://images.unsplash.com/photo-1614332287893-17a0c0a2c23a?q=80&w=1470&auto=format&fit=crop",
    link: "/residential-tinting",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Split services into chunks of 3 per row
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const serviceRows = chunkArray(services, 3);

  return (
    <section
      id="our-services"
      className="relative py-20 px-6 font-['Poppins'] overflow-hidden bg-[#0a0a0a] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
    >
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/95 to-black z-0"></div>

      {/* Heading */}
      <div className="relative text-center mb-14 z-10" data-aos="fade-up">
        <h3 className="text-[#E50914] text-3xl md:text-4xl font-extrabold uppercase tracking-wide drop-shadow-lg">
          Our Services
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
          We offer a wide range of expert automotive and residential services —
          each designed to enhance performance, safety, and style.
        </p>
      </div>

      {/* Service Rows */}
      <div className="relative space-y-10 z-10">
        {serviceRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-6 ${
              row.length === 1
                ? "grid-cols-1 justify-items-center"
                : row.length === 2
                ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
            data-aos="fade-up"
          >
            {row.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="relative group overflow-hidden rounded-lg shadow-lg border border-[#1f1f1f] hover:border-[#E50914] transition-all duration-300 w-full max-w-[420px]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Red Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-[#E50914]/50 transition duration-500"></div>

                {/* Title */}
                <h6 className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-extrabold uppercase tracking-wider text-white transition duration-300 group-hover:text-[#ff4b4b] text-center px-3">
                  {service.title}
                </h6>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;