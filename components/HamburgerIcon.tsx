"use client";

import { motion } from "framer-motion";

export default function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <motion.svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ cursor: "pointer", overflow: "visible", stroke: "currentColor" }}
        >
            {/* Icon spin */}
            <motion.g
                variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 180 },
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                style={{ transformOrigin: "16px 16px" }}
            >
                <motion.line
                    x1="6" y1="8"
                    x2="26" y2="8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={{
                        closed: { y1: 8, y2: 8, rotate: 0 },
                        open: { y1: 16, y2: 16, rotate: 45 },
                    }}
                    style={{ transformOrigin: "16px 16px" }}
                />

                <motion.line
                    x1="6" y1="16"
                    x2="26" y2="16"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={{
                        closed: { opacity: 1, scaleX: 1 },
                        open: { opacity: 0, scaleX: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: "16px 16px" }}
                />

                <motion.line
                    x1="6" y1="24"
                    x2="26" y2="24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={{
                        closed: { y1: 24, y2: 24, rotate: 0 },
                        open: { y1: 16, y2: 16, rotate: -45 },
                    }}
                    style={{ transformOrigin: "16px 16px" }}
                />
            </motion.g>
        </motion.svg>
    );
};
