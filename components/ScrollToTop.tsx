"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-24 right-6 z-50 w-11 h-11 bg-[#E31E24] text-white flex items-center justify-center hover:bg-[#c01a1f] transition-colors shadow-lg"
                    aria-label="Scroll to top"
                >
                    <FiArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
