"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiStar } from "react-icons/fi";

const testimonials = [
    {
        name: "Samuel Otieno",
        role: "Civil Engineer, Kampala",
        text: "Majis Concepts has been our go-to supplier for concrete blocks on every project. The quality and consistency is unmatched in Uganda.",
        stars: 5,
    },
    {
        name: "Grace Nalubega",
        role: "Property Developer",
        text: "We've used their pavers on three residential estate projects. The finish is excellent and they always deliver on schedule.",
        stars: 5,
    },
    {
        name: "James Mugisha",
        role: "Contractor, Entebbe",
        text: "Reliable, professional and their stone dust and aggregate quality is top notch. Strong recommendation for any serious builder.",
        stars: 5,
    },
    {
        name: "Patricia Akello",
        role: "Architect",
        text: "The culverts we ordered for a drainage project exceeded specifications. Majis Concepts truly delivers on their quality promise.",
        stars: 5,
    },
];

export default function Testimonials() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 ${isDark ? "bg-[#142033]" : "bg-white"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 sm:mb-16 lg:mb-20"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-px w-10 bg-[#E31E24]" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                            Testimonials
                        </span>
                    </div>
                    <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                        text-[44px] sm:text-[52px] lg:text-[60px] xl:text-[68px]
                        ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                    >
                        What Clients
                        <span className="block text-[#E31E24]">Say About Us</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: i * 0.09, duration: 0.6 }}
                            className={`p-7 sm:p-8 border-t-[3px] border-[#E31E24] ${isDark ? "bg-[#0D1B2A]" : "bg-[#F4F1EC]"}`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <FiStar key={j} size={12} className="text-[#E31E24] fill-[#E31E24]" />
                                ))}
                            </div>

                            {/* Quote mark */}
                            <div className="text-[60px] leading-none font-['Barlow_Condensed'] font-black text-[#E31E24]/20 -mt-4 mb-3 select-none">
                                "
                            </div>

                            <p className={`text-[13px] sm:text-[14px] font-['Poppins'] font-light leading-[1.75] mb-7 ${isDark ? "text-white/65" : "text-[#0D1B2A]/65"}`}>
                                {t.text}
                            </p>

                            <div>
                                <div className={`font-['Barlow_Condensed'] font-black text-base uppercase tracking-wide ${isDark ? "text-white" : "text-[#0D1B2A]"}`}>
                                    {t.name}
                                </div>
                                <div className="text-[11px] font-['Poppins'] text-[#E31E24] mt-1">
                                    {t.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
