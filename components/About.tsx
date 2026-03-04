"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiCheck } from "react-icons/fi";

const highlights = [
    "Leading manufacturer of construction materials in Uganda",
    "Advanced machinery ensuring precision and durability",
    "Serving residential and commercial projects",
    "Committed to sustainability and eco-friendly practices",
    "Skilled team with years of industry experience",
];

export default function About() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="about"
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 overflow-x-hidden ${isDark ? "bg-[#0D1B2A]" : "bg-white"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 xl:gap-28 items-center">

                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="relative pb-16 lg:pb-0"
                    >
                        {/* Red accent bar — lg+ only, never bleeds on mobile */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#E31E24] -translate-x-3 hidden lg:block" />

                        {/* Main image */}
                        <div className="relative z-10 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1657007508392-d68322544f70?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw=800&q=85"
                                alt="Majis Concepts concrete block production"
                                className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Floating badge — anchored inside, no negative right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute bottom-0 right-0 bg-[#E31E24] text-white p-5 sm:p-6 z-20"
                        >
                            <div className="text-[48px] sm:text-[56px] font-black leading-none font-['Barlow_Condensed']">10+</div>
                            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase font-['Barlow_Condensed'] mt-1 opacity-80">
                                Years of<br />Excellence
                            </div>
                        </motion.div>

                        {/* Second image — lg+ only so negative offset is safe */}
                        <div className="absolute -bottom-10 -left-6 w-44 h-44 overflow-hidden z-0 hidden lg:block border-4 border-white dark:border-[#0D1B2A]">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1676154517862-3d39720f63f5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&q=80"
                                alt="Pavers and bricks"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="lg:pt-4"
                    >
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-10 bg-[#E31E24]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                                About Us
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                            text-[44px] sm:text-[52px] lg:text-[58px] xl:text-[64px]
                            mb-7 ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                        >
                            Uganda's Trusted
                            <span className="block text-[#E31E24]">Construction</span>
                            Material Partner
                        </h2>

                        {/* Body text */}
                        <p className={`text-[15px] leading-[1.85] font-['Poppins'] font-light mb-5 ${isDark ? "text-white/60" : "text-[#0D1B2A]/65"}`}>
                            Majis Concepts Ltd is a leading manufacturer and supplier specializing in high-quality construction materials. Our product lineup includes poles, stones, stone dust, blocks, pavers, slabs, and culverts — designed to meet the needs of both residential and commercial construction projects.
                        </p>

                        <p className={`text-[15px] leading-[1.85] font-['Poppins'] font-light mb-9 ${isDark ? "text-white/60" : "text-[#0D1B2A]/65"}`}>
                            We pride ourselves on our commitment to excellence and innovation. Our skilled professionals work tirelessly to ensure every product meets the highest standards of durability, functionality, and aesthetic appeal.
                        </p>

                        {/* Highlights list */}
                        <ul className="space-y-3.5 mb-10">
                            {highlights.map((h, i) => (
                                <motion.li
                                    key={h}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#E31E24]">
                                        <FiCheck size={11} className="text-white" />
                                    </span>
                                    <span className={`text-[14px] font-['Poppins'] font-light leading-relaxed ${isDark ? "text-white/70" : "text-[#0D1B2A]/70"}`}>
                                        {h}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[#0D1B2A] dark:bg-white text-white dark:text-[#0D1B2A] px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase font-['Barlow_Condensed'] hover:bg-[#E31E24] dark:hover:bg-[#E31E24] dark:hover:text-white transition-colors"
                        >
                            Contact Us Today
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}