"use client";
import React, { useState } from "react";

export default function MembershipSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic Membership",
      price: isYearly ? "299.99" : "29.99",
      description: "Perfect for beginners & casual fitness enthusiasts",
      features: [
        "Full access to gym & training zones",
        "Standard group fitness classes",
        "Locker room & shower facilities",
        "Member-exclusive fitness tips & guides",
      ],
    },
    {
      title: "Premium Membership",
      price: isYearly ? "499.99" : "49.99",
      description: "For those looking to take their training to the next level",
      features: [
        "Everything in Basic, plus:",
        "Access to specialized training areas",
        "Advanced group fitness programs",
        "Discounts on personal training",
      ],
    },
    {
      title: "Elite Membership",
      price: isYearly ? "799.99" : "79.99",
      description: "For athletes and serious fitness enthusiasts",
      features: [
        "Everything in Premium, plus:",
        "Unlimited personal training sessions",
        "Exclusive performance coaching",
        "Access to recovery zones",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white text-center font-['Inter']">
      {/* Section Header */}
      <p className="text-[#376131] text-sm font-medium mb-3">Membership</p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
        Your path to peak{" "}
        <span className="font-extrabold">physical and mental performance.</span>
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#cfe7cb] rounded-full flex items-center p-1 w-[180px] shadow-inner">
          <button
            onClick={() => setIsYearly(false)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              !isYearly ? "bg-[#376131] text-white" : "text-[#376131]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isYearly ? "bg-[#376131] text-white" : "text-[#376131]"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 pt-6"
          >
            {/* Floating Label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cfe7cb] text-[#376131] px-4 py-1 text-sm font-semibold rounded-full shadow-md border border-[#b8dcb0]">
              {plan.title}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col">
              <div className="flex items-end justify-center mb-2">
                <span className="text-4xl font-bold text-[#1A311F]">
                  ${plan.price}
                </span>
                <span className="text-gray-600 ml-1 text-sm mb-1">
                  /month
                </span>
              </div>
              <p className="text-red-500/20 text-sm mb-6">{plan.description}</p>

              <ul className="text-left space-y-3 text-gray-800">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#376131] text-lg font-bold">✓</span>
                    <span className="text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button (Always Bottom Aligned) */}
            <div className="bg-[#f8f9f8] px-6 py-6 flex justify-center mt-auto rounded-b-xl">
              <button className="w-full bg-[#376131] text-white py-3 rounded-full font-semibold hover:bg-[#2b4d25] transition-all duration-300 shadow-md hover:shadow-lg">
                Join now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
