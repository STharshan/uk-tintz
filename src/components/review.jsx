
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(cards, { yPercent: 30, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          end: "+=" + cards.length * 400,
          scrub: 1.5,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i], { opacity: 1, yPercent: 0, duration: 1 }, i * 0.5);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      text: "I’ve had multiple cars tinted with UkTints and the service is always great! They have always got me booked in within a timely manner and I’m always satisfied with the end results! Prices are fair. Communication is great. I would highly recommend and I wouldn’t take my cars anywhere else personally! Thank you UKTints and Pete and keep up the good work ",
      name: "Louise Knight",
      initials: "LK",
      bg: "#FFD7D7",
    },
    {
      text: "Just had the windows tinted on my Skyline GT-R, super happy with their work, would recommend to anyone thumbs up from me",
      name: "Bobby radwan",
      initials: "BR",
      bg: "#D7FFD7",
    },
    {
      text: "Great Job, highly recommend, quick turnaround, helpful / knowledgeable, Rear windows / sunstrip, cheers ",
      name: "Lance Ash",
      initials: "LA",
      bg: "#D7E0FF",
    },
    {
      text: "Excellent service and great value for money. Been to Pete for a few of my cars now and always does an outstanding job. Highly recommend ",
      name: "Katy Smith",
      initials: "KS",
      bg: "#FFF5D7",
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
      id="review"
    >
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="logo.png"
          alt="Hear it from our clients"
          className="w-full  max-w-6xl object-contain "
          loading="lazy"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center pt-32 pb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#D20000]">
          Hear it from our clients
        </h2>
      </div>

      {/* Testimonials */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8 pb-20"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 
            shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6 md:p-8 opacity-0 transform translate-y-8"
          >
            <p className="text-sm md:text-base opacity-80 mb-4">{item.text}</p>
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                style={{ backgroundColor: item.bg, color: "#360802" }}
              >
                {item.initials}
              </span>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* === CTA BUTTON TO GOOGLE REVIEWS === */}
      <div className="relative z-10 pb-28 text-center">
        <a
          href="https://www.google.com/search?q=UKTintz+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 text-lg font-semibold rounded-full 
    bg-[#D20000] hover:bg-white text-black transition-all duration-300 shadow-lg"
        >
          Google Review
        </a>
      </div>
    </section>
  );
}