'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BRAND_GOLD = 'red'; // your logo color

export default function GallerySlider() {
    // Combined list of images and videos
    const mediaItems = [
        { type: 'video', src: '/uk1.mp4', poster: '/s10.jpg' },
        { type: 'image', src: '/s11.jpg' },
        { type: 'video', src: '/uk2.mp4', poster: '/s12.jpg' },
        { type: 'image', src: '/s12.jpg' },
        { type: 'video', src: '/uk3.mp4', poster: '/s13.jpg' },
        { type: 'image', src: '/s13.jpg' },
        { type: 'video', src: '/uk5.mp4', poster: '/s14.jpg' },
        { type: 'image', src: '/s15.jpg' },
        { type: 'image', src: '/s16.jpg' },
        { type: 'image', src: '/s17.jpg' },
        { type: 'image', src: '/s18.jpg' },
        { type: 'image', src: '/s21.jpg' },
        { type: 'image', src: '/s20.jpg' },
    ];

    return (
        <section
            id='gallery'
            className="transition-colors scroll-m-20 duration-700 bg-black py-10 px-4"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Logo */}
                <div className="flex justify-center mb-8" data-aos="fade-down">
                    <img
                        src="/logo.png"
                        alt="UK Tintz Logo"
                        className="w-[150px] md:w-[200px] object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Swiper Gallery */}
                <div data-aos="zoom-in" data-aos-delay="200">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="rounded-xl"
                    >
                        {mediaItems.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="overflow-hidden rounded-xl shadow-md border border-white/10 bg-zinc-900 transition-colors duration-500">
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            poster={item.poster}
                                            className="w-full h-[350px] object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={`Gallery Item ${idx + 1}`}
                                            className="w-full h-[350px] object-cover"
                                            loading="lazy"
                                        />
                                    )}
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
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px !important;
                    font-weight: bold;
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    color: white !important;
                }
            `}</style>
        </section>
    );
}