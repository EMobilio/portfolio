"use client";

import { motion } from "framer-motion";

export default function SkillsCard({ 
    name, 
    icon 
}: {
    name: string, 
    icon: React.ReactNode 
}) {
    return (
        
        <motion.div
            className={
                "group relative flex flex-col items-center justify-center rounded-xl px-3 py-4 \
                bg-surface border border-border hover:border-accent active:border-accent transition-colors duration-400"
            }
            variants={{ hover: { scale: 1.08 } }}
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
        >
                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-400"
                    style={{
                        background:
                          "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(52,211,153,0.08))",
                        filter: "blur(14px)",
                        zIndex: 0,
                    }}
                />

                <div className="flex flex-col items-center justify-center gap-2 z-10">
                    <motion.div 
                        className="text-3xl w-8 h-8 flex items-center justify-center"
                        variants={{ hover: { rotate: 720 }}}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {icon}
                    </motion.div>

                    <p className="text-text-primary text-sm tracking-wide text-center">{name}</p>
                </div>
        </motion.div>
    );
};