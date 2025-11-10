"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroCurasol = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      id: "1",
      title: "Automotive Window Tint",
      category: "Sleek Protection",
      snippet:
        "The Automotive Window Tint Project focused on enhancing both the comfort and style of our client’s vehicle. By applying premium-grade window films, we reduced glare, improved privacy, and blocked harmful UV rays — all while giving the car a sleek, modern appearance.",
      beforeImage: "/s5.jpg",
      afterImage: "/s24.jpg",
      link: "/projects/flooring-makeover-project",
    },
    {
      id: "2",
      title: "Commercial Window Tint",
      category: "Professional Clarity",
      snippet:
        "The Commercial Window Tint Project was designed to elevate workplace efficiency and protection. Our installation reduced heat and glare across office spaces, cutting energy costs and creating a more comfortable working environment. The tinting also provided an added layer of privacy and security, ensuring both practicality and professional appeal.",
      beforeImage: "/s27.jpg",
      afterImage: "/s28.jpg",
      link: "/projects/fixture-fixer-operation",
    },
    {
      id: "3",
      title: "Car Vinyl Wrap",
      category: "Custom Expression",
      snippet:
        "The Car Vinyl Wrap Project transformed the vehicle’s entire look, reflecting the client’s personality and brand identity. Using high-quality, durable vinyl, we achieved a flawless finish that not only enhanced aesthetics but also protected the original paintwork from scratches and sun damage.",
      beforeImage: "/s1.jpg",
      afterImage: "/s13.jpg",
      link: "/projects/renovation-revamp-venture",
    },
    {
      id: "4",
      title: "Interior Dash Vinyl Wrap",
      category: "Refined Detail",
      snippet:
        "The Interior Dash Vinyl Wrap Project brought a refined touch to the vehicle’s cabin, combining durability with design precision. We wrapped key interior panels with textured or glossy finishes, upgrading the look and feel of the dashboard while safeguarding it from everyday wear and tear.",
      beforeImage: "/s5.jpg",
      afterImage: "/s6.jpg",
      link: "/projects/carpentry-solutions-project",
    },
    {
      id: "5",
      title: "Residential Window Tint",
      category: "Comfort Living",
      snippet:
        "The Residential Window Tint Project focused on improving home comfort, privacy, and energy efficiency. By applying high-performance tint films to household windows, we reduced heat buildup, minimised glare, and protected interiors from harmful UV rays — all while maintaining clear, natural light.",
      beforeImage: "/s26.jpg",
      afterImage: "/s23.jpg",
      link: "/projects/electrical-upgrade-initiative",
    },
  ];

  const displayOrder = [1, 2, 3, 4, 0];

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const cardElements = container.querySelectorAll(".project-card");
    const targetCard = cardElements[index];

    if (targetCard) {
      const cardWidth = targetCard.offsetWidth;
      const scrollPosition =
        targetCard.offsetLeft - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const centerPosition = scrollLeft + containerWidth / 2;

      const cardElements = container.querySelectorAll(".project-card");
      let closestIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(centerPosition - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);

    setTimeout(() => scrollToCard(displayOrder[0]), 300);

    const initialDelay = setTimeout(() => {
      let orderIndex = 0;
      const autoScroll = setInterval(() => {
        const nextIndex = displayOrder[orderIndex];
        scrollToCard(nextIndex);
        orderIndex = (orderIndex + 1) % displayOrder.length;
      }, 4000);

      container.autoScrollInterval = autoScroll;
    }, 4000);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(initialDelay);
      if (container.autoScrollInterval)
        clearInterval(container.autoScrollInterval);
    };
  }, []);

  return (
    <div
      className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div data-aos="fade-down">
          <p className="text-xs sm:text-sm text-center text-gray-400 uppercase tracking-wider">
            Our Projects
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 text-center font-bold leading-tight">
            Discover Our Completed Projects
          </h1>
        </div>

        {/* Projects Carousel */}
        <div
          className="relative py-6"
          style={{ perspective: "1500px" }}
          data-aos="zoom-in-up"
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 py-10 md:gap-8 overflow-x-auto overflow-visible scrollbar-hide scroll-smooth pb-6 sm:pb-8"
            style={{
              scrollSnapType: "x mandatory",
              paddingLeft: "10vw",
              paddingRight: "10vw",
            }}
          >
            <div className="shrink-0 w-[10vw]"></div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card shrink-0 w-[70vw] sm:w-[60vw] md:w-[400px] lg:w-[380px] transition-all duration-700 ease-out cursor-pointer group"
                style={{
                  transform:
                    index === activeIndex
                      ? "scale(1.05) translateZ(80px) translateY(-20px)"
                      : "scale(0.88) translateZ(0px) translateY(0px)",
                  opacity: index === activeIndex ? 1 : 0.5,
                  zIndex: index === activeIndex ? 50 : 10,
                  scrollSnapAlign: "center",
                }}
                onClick={() => scrollToCard(index)}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className={`bg-zinc-900 rounded-3xl overflow-hidden transition-all duration-500 border ${
                    index === activeIndex
                      ? "border-zinc-700 shadow-2xl shadow-red-600/20"
                      : "border-zinc-800 shadow-lg"
                  }`}
                  style={{ minHeight: "480px" }}
                >
                  {/* ✅ Two Different Images */}
                  <div className="grid grid-cols-2 gap-3 p-5">
                    <div className="rounded-2xl overflow-hidden bg-zinc-800 aspect-4/3">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} before`}
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-zinc-800 aspect-4/3">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} after`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-base leading-relaxed mb-4 sm:mb-6">
                      {project.snippet}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                        <span className="text-white font-medium text-sm">
                          {project.category}
                        </span>
                      </div>
                      <button className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-all duration-300">
                        <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="shrink-0 w-[10vw]"></div>
          </div>

          {/* Pagination Dots */}
          <div
            className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-red-600 w-6 sm:w-8"
                    : "bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HeroCurasol;
