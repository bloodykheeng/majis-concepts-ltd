"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function WhatsAppButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white shadow-2xl w-[280px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <FaWhatsapp size={22} className="text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm font-['Poppins']">Majis Concepts Ltd</div>
                                <div className="text-white/70 text-[11px] font-['Poppins'] font-light">Typically replies instantly</div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="ml-auto text-white/70 hover:text-white"
                            >
                                <FiX size={18} />
                            </button>
                        </div>

                        {/* Message */}
                        <div className="p-5 bg-[#ECE5DD]">
                            <div className="bg-white rounded-lg p-3 shadow-sm text-[13px] font-['Poppins'] font-light text-[#0D1B2A] leading-relaxed">
                                Hello! 👋 Welcome to Majis Concepts Ltd. How can we help with your construction materials needs?
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-4">
                            <a
                                href="https://wa.me/256771587461?text=Hello%20Majis%20Concepts%20Ltd!%20I'm%20interested%20in%20your%20construction%20materials."
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 text-[12px] font-semibold tracking-[0.1em] uppercase font-['Poppins'] hover:bg-[#1fb558] transition-colors"
                            >
                                <FaWhatsapp size={16} />
                                Start Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-xl hover:bg-[#1fb558] transition-colors relative"
                aria-label="Contact on WhatsApp"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <FiX size={24} className="text-white" />
                        </motion.span>
                    ) : (
                        <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <FaWhatsapp size={28} className="text-white" />
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Pulse ring */}
                {!open && (
                    <span className="absolute inset-0 animate-ping bg-[#25D366] opacity-30 rounded-none" />
                )}
            </motion.button>
        </div>
    );
}
