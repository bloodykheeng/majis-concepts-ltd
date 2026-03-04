"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const isDark = theme === "dark";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden
                    ${scrolled || menuOpen
                        ? isDark
                            ? "backdrop-blur-md bg-[#0D1B2A]/92 shadow-lg shadow-black/20"
                            : "backdrop-blur-md bg-white/92 shadow-lg shadow-black/8"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-[72px] md:h-[80px]">
                    {/* Logo */}
                    <a href="#home" className="flex-shrink-0">
                        <img
                            src={isDark ? "/logos/majis-logo-dark-removebg-preview.png" : "/logos/majis-logo-light-removebg-preview.png"}
                            alt="Majis Concepts Ltd"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-7 lg:gap-8">
                        {navLinks.map((link) => {
                            const id = link.href.replace("#", "");
                            const isActive = activeSection === id;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`text-[11px] font-bold tracking-[0.18em] uppercase font-['Barlow_Condensed'] transition-colors duration-200 relative group
                                        ${isActive
                                            ? "text-[#E31E24]"
                                            : isDark
                                                ? "text-white/60 hover:text-white"
                                                : "text-[#0D1B2A]/55 hover:text-[#0D1B2A]"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-[#E31E24] transition-all duration-300
                                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </a>
                            );
                        })}

                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            aria-label="Toggle theme"
                            className={`w-9 h-9 flex items-center justify-center transition-colors border
                                ${isDark
                                    ? "border-white/15 text-white/70 hover:bg-white/10 hover:text-white"
                                    : "border-[#0D1B2A]/20 text-[#0D1B2A]/60 hover:bg-[#0D1B2A]/6 hover:text-[#0D1B2A]"
                                }`}
                        >
                            {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            aria-label="Toggle theme"
                            className={`w-9 h-9 flex items-center justify-center border
                                ${isDark ? "border-white/15 text-white/70" : "border-[#0D1B2A]/20 text-[#0D1B2A]/60"}`}
                        >
                            {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={isDark ? "text-white" : "text-[#0D1B2A]"}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                        className={`fixed inset-0 z-40 pt-[72px] md:pt-[80px] ${isDark ? "bg-[#0D1B2A]" : "bg-white"}`}
                    >
                        <div className="flex flex-col items-center px-6 pt-10 gap-1">
                            {navLinks.map((link, i) => {
                                const id = link.href.replace("#", "");
                                const isActive = activeSection === id;
                                return (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => setMenuOpen(false)}
                                        className={`w-full text-center text-3xl font-black font-['Barlow_Condensed'] tracking-[0.1em] uppercase py-5 border-b transition-colors
                                            ${isDark ? "border-white/10" : "border-[#0D1B2A]/10"}
                                            ${isActive ? "text-[#E31E24]" : isDark ? "text-white" : "text-[#0D1B2A]"}`}
                                    >
                                        {link.label}
                                    </motion.a>
                                );
                            })}

                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => setMenuOpen(false)}
                                className="w-full mt-10 py-4 bg-[#E31E24] text-white text-center font-black font-['Barlow_Condensed'] text-lg tracking-[0.2em] uppercase"
                            >
                                Get a Free Quote
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}