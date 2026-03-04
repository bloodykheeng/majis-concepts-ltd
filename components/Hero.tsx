"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import Typewriter from "typewriter-effect";

const slides = [
    {
        img: "https://images.unsplash.com/photo-1631719606912-e90abc91683b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&q=90",
        label: "Concrete Blocks",
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1666985732128-b8acafd17652?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&q=90",
        label: "Paving Materials",
    },
    {
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=90",
        label: "Building Compounds",
    },
];

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [current, setCurrent] = useState(0);
    const [headlineDone, setHeadlineDone] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const t = setInterval(nextSlide, 5500);
        return () => clearInterval(t);
    }, [nextSlide]);

    useEffect(() => {
        const t = setTimeout(() => setHeadlineDone(true), 2200);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            id="home"
            className={`relative w-full min-h-dvh overflow-hidden flex items-center ${isDark ? "bg-[#0D1B2A]" : "bg-[#F4F1EC]"}`}
        >
            {/* Background slideshow */}
            <div className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[current].img}
                            alt={slides[current].label}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className={`absolute inset-0 ${isDark
                    ? "bg-gradient-to-r from-[#0D1B2A]/96 via-[#0D1B2A]/82 to-[#0D1B2A]/25"
                    : "bg-gradient-to-r from-[#F4F1EC]/98 via-[#F4F1EC]/86 to-[#F4F1EC]/15"
                    }`} />
            </div>

            {/* Left accent strip */}
            <div className="absolute top-0 left-0 w-[5px] h-full" style={{ background: "#E31E24" }} />

            {/* Geometric corner accent */}
            <div
                className="absolute top-0 right-0 w-0 h-0 border-t-[100px] sm:border-t-[130px] border-r-[100px] sm:border-r-[130px] border-t-transparent"
                style={{ borderRightColor: "#E31E24" }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-28 md:pt-36 md:pb-32">
                <div className="max-w-xl lg:max-w-2xl">

                    {/* Location tag */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8 md:mb-10"
                    >
                        <div className="h-px w-8 bg-[#E31E24] flex-shrink-0" />
                        <span className="text-[10px] font-bold tracking-[0.35em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                            Sseguku, Katale — Uganda
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.9] tracking-tight
                            text-[72px] sm:text-[92px] lg:text-[108px] xl:text-[120px]
                            ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                    >
                        <span className="block">Built</span>
                        <span className="block text-[#E31E24]">Strong.</span>
                        <span className="block">Built</span>
                        <span className="block">Right.</span>
                    </motion.h1>

                    {/* Typewriter paragraph */}
                    <div className={`mt-8 md:mt-10 text-[15px] sm:text-[16px] leading-[1.8] font-['Poppins'] font-light min-h-[80px] max-w-lg ${isDark ? "text-white/65" : "text-[#0D1B2A]/65"}`}>
                        {headlineDone && (
                            <Typewriter
                                options={{
                                    strings: "Majis Concepts Ltd — Uganda's trusted manufacturer of premium concrete blocks, pavers, slabs, culverts, poles, stones & stone dust. Quality built for every project.",
                                    autoStart: true,
                                    loop: false,
                                    cursor: "",
                                    delay: 22,
                                }}
                            />
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-10 md:mt-12 flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 bg-[#E31E24] text-white px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase font-['Barlow_Condensed'] hover:bg-[#c01a1f] transition-colors group"
                        >
                            Get Free Quote
                            <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="tel:+256771587461"
                            className={`inline-flex items-center gap-2.5 border-2 px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase font-['Barlow_Condensed'] transition-colors
                                ${isDark
                                    ? "border-white/30 text-white hover:border-white hover:bg-white/5"
                                    : "border-[#0D1B2A]/30 text-[#0D1B2A] hover:border-[#0D1B2A] hover:bg-[#0D1B2A]/5"
                                }`}
                        >
                            <FiPhone size={13} />
                            Call Now
                        </a>
                    </motion.div>

                    {/* Product tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="mt-10 md:mt-12 flex flex-wrap gap-2"
                    >
                        {["Blocks", "Pavers", "Slabs", "Culverts", "Poles", "Stones", "Stone Dust"].map((p) => (
                            <span
                                key={p}
                                className={`px-3 py-1.5 text-[9px] font-semibold tracking-[0.2em] uppercase font-['Poppins'] border
                                    ${isDark
                                        ? "border-white/15 text-white/50 bg-white/5"
                                        : "border-[#0D1B2A]/15 text-[#0D1B2A]/50 bg-[#0D1B2A]/5"
                                    }`}
                            >
                                {p}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 flex gap-2.5">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`transition-all duration-300 h-[3px] ${i === current ? "w-8 bg-[#E31E24]" : "w-3 bg-white/30"}`}
                        />
                    ))}
                </div>

                {/* Slide label */}
                <div className="absolute bottom-9 right-6 sm:right-10 lg:right-16">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={current}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className={`text-[10px] font-semibold tracking-[0.25em] uppercase font-['Poppins'] ${isDark ? "text-white/40" : "text-[#0D1B2A]/40"}`}
                        >
                            {slides[current].label}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}