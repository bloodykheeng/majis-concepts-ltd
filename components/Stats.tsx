"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";

const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Years in Business" },
    { value: 7, suffix: "", label: "Product Categories" },
    { value: 1000, suffix: "+", label: "Happy Clients" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(value / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section className="relative py-20 sm:py-24 overflow-hidden bg-[#E31E24]">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(0,0,0,0.15) 10px,
                        rgba(0,0,0,0.15) 11px
                    )`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-0 lg:divide-x lg:divide-white/20">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="text-center lg:px-8"
                        >
                            <div className="font-['Barlow_Condensed'] font-black text-[52px] sm:text-[60px] lg:text-[72px] leading-none text-white">
                                <AnimatedNumber value={s.value} suffix={s.suffix} />
                            </div>
                            <div className="mt-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase font-['Poppins'] text-white/70">
                                {s.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
