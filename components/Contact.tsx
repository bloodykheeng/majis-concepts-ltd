"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hello Majis Concepts Ltd!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0AMessage: ${form.message}`;
        window.open(`https://wa.me/256771587461?text=${msg}`, "_blank");
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const inputClass = `w-full px-4 py-3.5 text-[14px] font-['Poppins'] outline-none border transition-colors focus:border-[#E31E24]
        ${isDark
            ? "bg-[#142033] border-white/10 text-white placeholder:text-white/30 focus:bg-[#1C2D42]"
            : "bg-[#F4F1EC] border-[#0D1B2A]/10 text-[#0D1B2A] placeholder:text-[#0D1B2A]/30 focus:bg-white"
        }`;

    return (
        <section
            id="contact"
            className={`py-24 sm:py-28 lg:py-36 xl:py-40 ${isDark ? "bg-[#0D1B2A]" : "bg-[#F4F1EC]"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Top row: heading + description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-[#E31E24]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase font-['Barlow_Condensed'] text-[#E31E24]">
                                Contact Us
                            </span>
                        </div>
                        <h2 className={`font-['Barlow_Condensed'] font-black uppercase leading-[0.93]
                            text-[44px] sm:text-[52px] lg:text-[60px] xl:text-[68px]
                            ${isDark ? "text-white" : "text-[#0D1B2A]"}`}
                        >
                            Get In
                            <span className="block text-[#E31E24]">Touch</span>
                        </h2>
                    </div>
                    <p className={`max-w-sm text-[15px] font-['Poppins'] font-light leading-[1.8] ${isDark ? "text-white/55" : "text-[#0D1B2A]/55"}`}>
                        Ready to start your project? Get in touch for a free quote. We supply materials for projects of all sizes across Uganda.
                    </p>
                </motion.div>

                {/* Bottom row: contact cards + form */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-4"
                    >
                        {[
                            {
                                icon: FiPhone,
                                label: "Phone",
                                value: "+256 771 587 461",
                                sub: "+256 704 782 590",
                                href: "tel:+256771587461",
                            },
                            {
                                icon: FiMail,
                                label: "Email",
                                value: "info@majisconcepts.com",
                                sub: null,
                                href: "mailto:info@majisconcepts.com",
                            },
                            {
                                icon: FiMapPin,
                                label: "Location",
                                value: "Sseguku, Katale",
                                sub: "Uganda",
                                href: "https://maps.google.com/?q=Sseguku+Katale+Uganda",
                            },
                        ].map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.label === "Location" ? "_blank" : undefined}
                                rel="noreferrer"
                                className={`flex items-start gap-4 p-5 border transition-colors group ${isDark
                                    ? "border-white/8 hover:border-[#E31E24]/50 bg-[#142033]/50"
                                    : "border-[#0D1B2A]/8 hover:border-[#E31E24]/50 bg-white"
                                    }`}
                            >
                                <span className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-[#E31E24]/10 group-hover:bg-[#E31E24] transition-colors">
                                    <c.icon size={16} className="text-[#E31E24] group-hover:text-white transition-colors" />
                                </span>
                                <div>
                                    <div className={`text-[10px] font-semibold tracking-[0.25em] uppercase font-['Poppins'] mb-1 ${isDark ? "text-white/40" : "text-[#0D1B2A]/40"}`}>
                                        {c.label}
                                    </div>
                                    <div className={`text-[14px] font-['Poppins'] font-medium ${isDark ? "text-white" : "text-[#0D1B2A]"}`}>
                                        {c.value}
                                    </div>
                                    {c.sub && (
                                        <div className={`text-[13px] font-['Poppins'] font-light ${isDark ? "text-white/50" : "text-[#0D1B2A]/50"}`}>
                                            {c.sub}
                                        </div>
                                    )}
                                </div>
                            </a>
                        ))}

                        {/* WhatsApp card */}
                        <a
                            href="https://wa.me/256771587461"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-5 bg-[#25D366] text-white group hover:bg-[#1fb558] transition-colors"
                        >
                            <span className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white/20 group-hover:bg-white/30 transition-colors">
                                <FaWhatsapp size={20} className="text-white" />
                            </span>
                            <div>
                                <div className="text-[10px] font-semibold tracking-[0.25em] uppercase font-['Poppins'] mb-0.5 opacity-70">
                                    WhatsApp
                                </div>
                                <div className="text-[14px] font-['Poppins'] font-semibold">
                                    Chat with us on WhatsApp
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className={`block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5 font-['Poppins'] ${isDark ? "text-white/50" : "text-[#0D1B2A]/50"}`}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5 font-['Poppins'] ${isDark ? "text-white/50" : "text-[#0D1B2A]/50"}`}>
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+256 ..."
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5 font-['Poppins'] ${isDark ? "text-white/50" : "text-[#0D1B2A]/50"}`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className={`block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5 font-['Poppins'] ${isDark ? "text-white/50" : "text-[#0D1B2A]/50"}`}>
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={7}
                                    placeholder="Describe your project requirements, materials needed, quantities..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2.5 bg-[#E31E24] text-white py-4 text-[11px] font-bold tracking-[0.25em] uppercase font-['Poppins'] hover:bg-[#c01a1f] transition-colors group"
                            >
                                {sent ? "Message Sent via WhatsApp!" : "Send Message via WhatsApp"}
                                <FiSend size={14} className="transition-transform group-hover:translate-x-1" />
                            </button>

                            <p className={`text-center text-[12px] font-['Poppins'] font-light ${isDark ? "text-white/30" : "text-[#0D1B2A]/30"}`}>
                                Clicking submit opens WhatsApp with your message pre-filled.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}