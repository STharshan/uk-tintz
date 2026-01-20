"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";


const HeroCurasol = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollContainerRef = useRef(null);

  // ⭐ Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [popupImages, setPopupImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  // ⭐ OPEN POPUP WITH ALL IMAGES
  const openPopup = (project) => {
    const images = [];

    // Always add beforeImage and afterImage first
    if (project.beforeImage) images.push(project.beforeImage);
    if (project.afterImage) images.push(project.afterImage);

    // Then add any extra popup images, avoiding duplicates
    if (project.popupImage && project.popupImage.length > 0) {
      project.popupImage.forEach((img) => {
        if (!images.includes(img)) images.push(img);
      });
    }

    setPopupImages(images);
    setSlideIndex(0);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);
  const nextSlide = () => setSlideIndex((slideIndex + 1) % popupImages.length);
  const prevSlide = () =>
    setSlideIndex((slideIndex - 1 + popupImages.length) % popupImages.length);

 

  const projects = [
    {
      id: "1",
      title: "Automotive Window Tint",
      category: "Sleek Protection",
      snippet: "Enhanced comfort & style by applying premium-grade window films.",
      beforeImage: "/s5.jpg",
      afterImage: "/s4.jpg",
      popupImage: ["/s5.jpg", "/s4.jpg"],
      link: "/projects/flooring-makeover-project",
    },
    {
      id: "2",
      title: "Commercial Window Tint",
      category: "Professional Clarity",
      snippet: "Reduce glare and heat while improving privacy and security.",
      beforeImage: "/s27.jpg",
      afterImage: "/s28.jpg",
      popupImage: ["/s27.jpg", "/s28.jpg",'commercial tinting1.jpeg','commercial tinting2.jpeg','commercial tinting3.jpeg'],
      link: "/projects/fixture-fixer-operation",
    },
    {
      id: "3",
      title: "Residential Window Tint",
      category: "Comfort Living",
      snippet: "Improve home comfort, privacy, and energy efficiency.",
      beforeImage: "/After residential tints.jpeg",
      afterImage: "/before residential tints.jpeg",
       popupImage: [
        'residential.jpeg',
        'residential1.jpeg',
        'residential2.jpeg',
        'residential3.jpeg',
        'residential4.jpeg',
        "/s26.jpg",
        "/s23.jpg",
        "/r1.jpeg",
        "/r2.jpeg",
        "/r3.jpeg",
        "/r4.jpeg",
        "/r5.jpeg",
        "/r6.jpeg",
      ],
      link: "/projects/electrical-upgrade-initiative",
    },
    {
      id: "4",
      title: "Car Vinyl Wrap",
      category: "Custom Expression",
      snippet: "Transform your vehicle with high-quality, durable vinyl.",
      beforeImage: "/s1.jpg",
      afterImage: "/s13.jpg",
      popupImage: ["/s1.jpg", "/s13.jpg"],
      link: "/projects/renovation-revamp-venture",
    },
    {
      id: "5",
      title: "Interior Dash Vinyl Wrap",
      category: "Refined Detail",
      snippet: "Dashboard wrapped with textured and glossy finishes.",
      beforeImage: "/s5.jpg",
      afterImage: "/s6.jpg",
      popupImage: [
        "/s5.jpg",
        "/s6.jpg",
        'interior vinyl.jpeg',
        'interior vinyl1.jpeg',
        'interior vinyl2.jpeg',
       
      ],
      link: "/projects/carpentry-solutions-project",
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
      if (container.autoScrollInterval) clearInterval(container.autoScrollInterval);
    };
  }, []);

  return (
    <div
      id="ourproject"
      className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-m-10"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
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
  className={`rounded-3xl overflow-hidden transition-all duration-500 border ${
    index === activeIndex
      ? "border-white/30 shadow-2xl shadow-red-600/20"
      : "border-white/20 shadow-lg"
  }`}
  style={{
    minHeight: "480px",
    backgroundImage:
      "repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 4px, #111 4px, #111 8px)",
    boxShadow: index === activeIndex ? "0 20px 50px rgba(255,0,0,0.2)" : "0 6px 18px rgba(0,0,0,0.45)",
  }}
>
  {/* Images */}
  <div className="grid grid-cols-2 gap-3 p-5">
    <div className="rounded-2xl overflow-hidden bg-white/10 aspect-4/3">
      <img
        src={project.beforeImage}
        alt=""
        className="w-full h-full object-cover opacity-70"
         loading="lazy"
      />
    </div>
    <div className="rounded-2xl overflow-hidden bg-white/10 aspect-4/3">
      <img
        src={project.afterImage}
        alt=""
        className="w-full h-full object-cover"
         loading="lazy"
      />
    </div>
  </div>

  {/* Content */}
  <div className="px-6 pb-6">
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase tracking-tight leading-snug">
      {project.title}
    </h3>
    <p className="text-gray-200 text-sm sm:text-base md:text-base leading-relaxed mb-4 sm:mb-6">
      {project.snippet}
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
        <span className="text-white font-medium text-sm">
          {project.category}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          openPopup(project);
        }}
        className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-all duration-300"
      >
        <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
      </button>
    </div>
  </div>
</div>

              </div>
            ))}

            <div className="shrink-0 w-[10vw]"></div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
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

      {/* ⭐ POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-9999 p-6">
          <div className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl overflow-visible shadow-xl border border-zinc-700">
            <button
              onClick={closePopup}
              className="absolute -top-4 -right-4 z-50 bg-white text-black p-3 rounded-full shadow-xl hover:bg-gray-200"
            >
              <X size={22} />
            </button>

            <div className="relative w-full h-[380px] sm:h-[450px] bg-black flex items-center justify-center rounded-t-2xl overflow-hidden">
              <img
                src={popupImages[slideIndex]}
                alt="slide"
                className="w-full h-full object-cover"
                 loading="lazy"
              />

              <button
                onClick={prevSlide}
                className="absolute left-3 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full z-40"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full z-40"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex justify-center gap-2 py-4 bg-zinc-900 rounded-b-2xl">
              {popupImages.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    slideIndex === i ? "bg-red-600" : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

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
