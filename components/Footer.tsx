"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

const products = [
    "Concrete Blocks",
    "Pavers",
    "Slabs",
    "Culverts",
    "Poles",
    "Stones",
    "Stone Dust",
];

export default function Footer() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const year = new Date().getFullYear();

    return (
        <footer className={`${isDark ? "bg-[#060F1A]" : "bg-[#0D1B2A]"} text-white`}>
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">

                {/* Brand */}
                <div className="lg:col-span-1">
                    <div className="mb-6">
                        <img
                            src="/logos/majis-logo-dark-removebg-preview.png"
                            alt="Majis Concepts Ltd"
                            className="h-12 w-auto object-contain"
                        />
                    </div>
                    <p className="text-[13px] font-['Poppins'] font-light text-white/50 leading-[1.8] mb-7">
                        Uganda's leading manufacturer and supplier of high-quality construction materials. Built strong. Built right.
                    </p>
                    <div className="flex gap-3">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
                            <a
                                key={i}
                                href={i === 3 ? "https://wa.me/256771587461" : "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/50 hover:bg-[#E31E24] hover:border-[#E31E24] hover:text-white transition-all"
                            >
                                <Icon size={13} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-['Barlow_Condensed'] font-black text-base uppercase tracking-[0.15em] mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {quickLinks.map((l) => (
                            <li key={l.label}>
                                <a
                                    href={l.href}
                                    className="text-[13px] font-['Poppins'] font-light text-white/50 hover:text-[#E31E24] transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-3 h-[1px] bg-[#E31E24]/40 group-hover:w-5 transition-all" />
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-['Barlow_Condensed'] font-black text-base uppercase tracking-[0.15em] mb-6">
                        Our Products
                    </h4>
                    <ul className="space-y-3">
                        {products.map((p) => (
                            <li key={p}>
                                <span className="text-[13px] font-['Poppins'] font-light text-white/50 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[#E31E24] inline-block flex-shrink-0" />
                                    {p}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-['Barlow_Condensed'] font-black text-base uppercase tracking-[0.15em] mb-6">
                        Contact Info
                    </h4>
                    <div className="space-y-5">
                        <a href="tel:+256771587461" className="flex items-start gap-3 group">
                            <FiPhone size={14} className="mt-0.5 text-[#E31E24] flex-shrink-0" />
                            <div>
                                <div className="text-[13px] font-['Poppins'] font-light text-white/60 group-hover:text-white transition-colors">+256 771 587 461</div>
                                <div className="text-[13px] font-['Poppins'] font-light text-white/60 group-hover:text-white transition-colors">+256 704 782 590</div>
                            </div>
                        </a>
                        <a href="mailto:info@majisconcepts.com" className="flex items-start gap-3 group">
                            <FiMail size={14} className="mt-0.5 text-[#E31E24] flex-shrink-0" />
                            <span className="text-[13px] font-['Poppins'] font-light text-white/60 group-hover:text-white transition-colors break-all">
                                info@majisconcepts.com
                            </span>
                        </a>
                        <div className="flex items-start gap-3">
                            <FiMapPin size={14} className="mt-0.5 text-[#E31E24] flex-shrink-0" />
                            <span className="text-[13px] font-['Poppins'] font-light text-white/60">
                                Sseguku, Katale<br />Uganda
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/8">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] font-['Poppins'] font-light text-white/30">
                        © {year} Majis Concepts Ltd. All rights reserved.
                    </span>
                    <span className="text-[11px] font-['Poppins'] font-light text-white/30">
                        Sseguku, Katale, Uganda
                    </span>
                </div>
            </div>
        </footer>
    );
}