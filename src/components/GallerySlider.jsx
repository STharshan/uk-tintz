'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BRAND_GOLD = 'red'; // your logo color

const images = [
    '/s10.jpg',
    '/s11.jpg',
    '/s12.jpg',
    '/s13.jpg',
    '/s14.jpg',
    '/s15.jpg',
    '/s16.jpg',
    '/s17.jpg',
    '/s18.jpg',
    '/s21.jpg',
    '/s20.jpg',
];

export default function GallerySlider() {

    // ✅ Initialize AOS
    useEffect(() => {
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-in-out',
            });
        }, 500); // wait 0.5 seconds before initializing
    }, []);

    return (
        <section
            id='gallery'
            className="transition-colors scroll-m-20 duration-700 bg-black py-10 px-4"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Logo instead of Text */}
                <div className="flex justify-center mb-8" data-aos="fade-down">
                    <img
                        src="/logo.png"
                        alt="UK Tintz Logo"
                        className="w-[150px] md:w-[200px] object-contain"
                    />
                </div>

                {/* Swiper Gallery */}
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="rounded-xl"
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="overflow-hidden rounded-xl shadow-md border transition-colors duration-500">
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        className="w-full h-[350px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Swiper Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #CFCFCF;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: ${BRAND_GOLD} !important;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: ${BRAND_GOLD} !important;
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    color: #C99A2C !important;
                }
            `}</style>
        </section>
    );
}
