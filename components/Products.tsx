"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";

const products = [
    {
        title: "Concrete Blocks",
        desc: "High-strength standard and hollow concrete blocks for walls, foundations, and structural applications. Built for durability and load bearing.",
        img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=700&q=80",
        tag: "Structural",
    },
    {
        title: "Pavers",
        desc: "Interlocking concrete pavers in various shapes and colours for driveways, pathways, plazas, and landscaping projects.",
        img: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=700&q=80",
        tag: "Landscaping",
    },
    {
        title: "Slabs",
        desc: "Precast concrete slabs for flooring, roofing, and paving. Precision-cast for consistent thickness and exceptional strength.",
        img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=700&q=80",
        tag: "Flooring",
    },
    {
        title: "Culverts",
        desc: "Reinforced concrete culverts for drainage and water management systems. Engineered for maximum flow and structural integrity.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
        tag: "Drainage",
    },
    {
        title: "Poles",
        desc: "Concrete utility and fencing poles manufactured to precise specifications, resistant to weather and heavy loads.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80",
        tag: "Utility",
    },
    {
        title: "Stones & Stone Dust",
        desc: "Natural aggregate stones and fine stone dust for concrete mixing, foundations, backfilling, and road construction.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
        tag: "Aggregate",
    },
];

export default function Products() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="products"
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 ${isDark ? "bg-[#0D1B2A]" : "bg-[#F4F1EC]"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="flex-shrink-0"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-[#E31E24]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                                Our Products
                            </span>
                        </div>
                        <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                            text-[44px] sm:text-[52px] lg:text-[60px] xl:text-[68px]
                            ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                        >
                            What We
                            <span className="block text-[#E31E24]">Manufacture</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                        className={`max-w-sm text-[15px] font-['Poppins'] font-light leading-[1.8] ${isDark ? "text-white/55" : "text-[#0D1B2A]/55"}`}
                    >
                        Every product crafted with advanced machinery and premium materials — from small residential builds to large commercial developments.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                    {products.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className={`group relative overflow-hidden cursor-pointer transition-all duration-500 shadow-sm hover:shadow-2xl ${isDark ? "bg-[#142033]" : "bg-white"}`}
                        >
                            {/* Image */}
                            <div className="relative h-52 sm:h-56 overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <span className="absolute top-4 right-4 bg-[#E31E24] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 font-['Poppins']">
                                    {p.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-7">
                                <h3 className={`font-['Barlow_Condensed'] font-black text-xl sm:text-2xl uppercase tracking-wide mb-3 ${isDark ? "text-white" : "text-[#0D1B2A]"}`}>
                                    {p.title}
                                </h3>
                                <p className={`text-[13px] sm:text-[14px] font-['Poppins'] font-light leading-[1.75] ${isDark ? "text-white/55" : "text-[#0D1B2A]/60"}`}>
                                    {p.desc}
                                </p>

                                <div className={`mt-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase font-['Barlow_Condensed'] transition-colors ${isDark ? "text-[#E31E24]/60 group-hover:text-[#E31E24]" : "text-[#0D1B2A]/40 group-hover:text-[#E31E24]"}`}>
                                    Enquire Now
                                    <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#E31E24] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
