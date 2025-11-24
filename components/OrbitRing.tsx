"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function OrbitRing({
    icons,
    radius,
    duration,
    direction,
}: {
    icons: React.ReactNode[];
    radius: number;
    duration: number;
    direction: number;
}) {
    const ref = useRef(null);
    const [mounted, setMounted] = useState(false);
    const iconsControls = useAnimation();
    const isInView = useInView(ref, { once: true });
    const diameter = radius * 2;

    useEffect(() => {
        setMounted(true);
    }, [])

    useEffect(() => {
        if (isInView) {
            iconsControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            className={`relative w-full h-full flex items-center justify-center`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ rotate: 360 * direction }}
            transition={{
                rotate: { repeat: Infinity, duration: duration, ease: "linear" },
                default: { duration: 1, ease: "easeOut" },
            }}
        >

            {/* Orbit ring outline */}
            <div 
                className="absolute rounded-full border border-border z-0"
                style={{ width: diameter, height: diameter }}
            />

            {/* Orbitting icons */}
            {mounted && icons.map((icon, i) => {
                const angle = (i / icons.length) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={i}
                        className="absolute text-3xl z-1"
                        variants={{
                            hidden: { opacity: 0, x: x * 2, y: y * 2 },
                            visible: { opacity: 0.5, x, y, transition: { duration: 1, ease: "easeOut" } }
                        }}
                        initial="hidden"
                        animate={iconsControls}
                    >
                        <motion.div
                            animate={{ rotate: -360 * direction }}
                            transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
                        >
                            {icon}
                        </motion.div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};