"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiAward, FiTruck, FiShield, FiUsers, FiSettings } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const reasons = [
    {
        icon: FiAward,
        title: "Premium Quality",
        desc: "Every product meets rigorous quality standards. We use advanced manufacturing equipment and tested raw materials.",
    },
    {
        icon: FiTruck,
        title: "Reliable Delivery",
        desc: "We understand project timelines matter. Our logistics ensure materials arrive on time, every time.",
    },
    {
        icon: FiShield,
        title: "Proven Durability",
        desc: "Our products are engineered to withstand Uganda's climate and heavy structural demands for decades.",
    },
    {
        icon: FiUsers,
        title: "Customer-Focused",
        desc: "We work closely with clients to deliver tailor-made solutions that meet specific project requirements.",
    },
    {
        icon: FiSettings,
        title: "Modern Technology",
        desc: "Advanced machinery and precision casting processes ensure consistent dimensions and strength across every batch.",
    },
    {
        icon: FaLeaf,
        title: "Eco-Friendly Practices",
        desc: "We integrate sustainable manufacturing practices and source materials responsibly from the local community.",
    },
];

export default function WhyChooseUs() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="why-us"
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 relative overflow-hidden ${isDark ? "bg-[#142033]" : "bg-white"}`}
        >
            {/* Background watermark */}
            <div
                className={`absolute -right-8 top-1/2 -translate-y-1/2 text-[200px] lg:text-[280px] font-black font-['Barlow_Condensed'] leading-none select-none pointer-events-none
                    ${isDark ? "text-white/[0.02]" : "text-[#0D1B2A]/[0.025]"}`}
            >
                WHY
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14 sm:mb-16 lg:mb-20 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-[#E31E24]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                            text-[44px] sm:text-[52px] lg:text-[60px] xl:text-[68px]
                            ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                        >
                            The Majis
                            <span className="block text-[#E31E24]">Difference</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                        className={`text-[15px] font-['Poppins'] font-light leading-[1.8] ${isDark ? "text-white/55" : "text-[#0D1B2A]/55"}`}
                    >
                        With years of experience in the industry, Majis Concepts Ltd is known for its reliability, innovation, and customer satisfaction — making us the go-to partner for construction materials.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E31E24]/15">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: i * 0.09, duration: 0.6 }}
                            className={`group p-8 sm:p-9 transition-colors duration-300 ${isDark
                                ? "bg-[#142033] hover:bg-[#1C2D42]"
                                : "bg-white hover:bg-[#F4F1EC]"
                                }`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-[#E31E24]/10 group-hover:bg-[#E31E24] transition-colors duration-300 mb-6">
                                <r.icon
                                    size={20}
                                    className="text-[#E31E24] group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <h3 className={`font-['Barlow_Condensed'] font-black text-xl sm:text-2xl uppercase tracking-wide mb-3 ${isDark ? "text-white" : "text-[#0D1B2A]"}`}>
                                {r.title}
                            </h3>
                            <p className={`text-[13px] sm:text-[14px] font-['Poppins'] font-light leading-[1.75] ${isDark ? "text-white/55" : "text-[#0D1B2A]/60"}`}>
                                {r.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
