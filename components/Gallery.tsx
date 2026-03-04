"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    {
        src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=max&w=900&q=85",
        caption: "Concrete Block Production",
    },
    {
        src: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=900&q=85",
        caption: "Interlocking Pavers",
    },
    {
        src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=85",
        caption: "Paving Compounds",
    },
    {
        src: "https://images.unsplash.com/photo-1590725175655-94c6cf2631b4?auto=format&fit=max&w=900&q=85",
        caption: "Half Bricks & Blocks",
    },
    {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85",
        caption: "Construction Site Supply",
    },
    {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85",
        caption: "Building Works",
    },
    {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
        caption: "Wall Construction",
    },
    {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85",
        caption: "Infrastructure Projects",
    },
];

export default function Gallery() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="gallery"
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 overflow-hidden ${isDark ? "bg-[#0D1B2A]" : "bg-[#F4F1EC]"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 sm:mb-16 lg:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-[#E31E24]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                                Our Work
                            </span>
                        </div>
                        <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                            text-[44px] sm:text-[52px] lg:text-[60px] xl:text-[68px]
                            ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                        >
                            Project
                            <span className="block text-[#E31E24]">Gallery</span>
                        </h2>
                    </div>
                    <p className={`max-w-sm text-[15px] font-['Poppins'] font-light leading-[1.8] ${isDark ? "text-white/55" : "text-[#0D1B2A]/55"}`}>
                        A glimpse into the quality and scale of projects we've supplied materials for across Uganda.
                    </p>
                </motion.div>
            </div>

            <div className="px-6 sm:px-10 lg:px-16">
                <style>{`
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: 44px !important;
                        height: 44px !important;
                        background: #E31E24;
                        color: white !important;
                    }
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 14px !important;
                        font-weight: 900;
                    }
                    .swiper-pagination-bullet {
                        background: #E31E24 !important;
                        opacity: 0.4;
                    }
                    .swiper-pagination-bullet-active {
                        opacity: 1 !important;
                    }
                `}</style>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="pb-14"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                className="group relative overflow-hidden"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative h-[280px] sm:h-[300px] lg:h-[320px] overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase font-['Poppins']">
                                            {img.caption}
                                        </span>
                                    </div>
                                </div>
                                {/* Red bottom bar */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E31E24] transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
