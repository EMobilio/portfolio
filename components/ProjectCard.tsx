"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProjectCard({
    title,
    description,
    image,
    tech,
    github,
    demo,
}: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    demo?: string;
}) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [flipped, setFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);    

    // check if user is on mobile device to only allow tap to flip on mobile
    useEffect(() => {
        const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
        setIsMobile(mq.matches);
    }, []);

    // check for tap outside of card to flip card back over
    useEffect(() => {
        if (!isMobile || !flipped) return;
    
        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setFlipped(false);
            }
        };
    
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isMobile, flipped]);

    // create 3D tilt on mouse movement
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
        setPos({ x: mouseX, y: mouseY });
    };

    // reset tilt on mouse leave
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            ref={cardRef}
            className="relative group w-full h-115 sm:w-[450px] sm:h-95 transition perspective-[1000px]"
            onClick={isMobile ? () => setFlipped(!flipped) : undefined}
            
        >
            {/* 3D tilt wrapper */}
            <motion.div
                className="w-full h-full"
                onMouseMove={isMobile ? undefined : handleMouseMove}
                onMouseLeave={isMobile ? undefined : handleMouseLeave}
                style={isMobile 
                    ? { rotateX: "0deg", rotateY: "0deg", transformStyle: "preserve-3d" }
                    : { rotateX, rotateY, transformStyle: "preserve-3d" }
                }
            >
                {/* Inner flip card wrapper */}
                <motion.div 
                    className={
                        `relative w-full h-full rounded-2xl bg-surface group-hover:bg-gradient-to-br group-hover:from-primary/30 \
                        group-hover:to-accent/20 border-[2px] border-border group-hover:border-accent transform-3d transition-transform duration-800 \
                        group-hover:rotate-y-180 ${flipped && "rotate-y-180 !border-accent !bg-gradient-to-br !from-primary/30 !to-accent/20"}`
                    }
                >    
                    {/* Spotlight */}
                    <div 
                        className={
                            "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100\
                            transition duration-300 rounded-2xl group-hover:rotate-y-180"
                        }
                        style={{
                            background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.35), transparent 60%)`,
                        }}
                    />
                    
                    {/* Front */}
                    <div 
                        className={
                            `flex flex-col items-center w-full h-full group-hover:bg-background/60 group-hover:backdrop-blur-xl rounded-2xl \
                            absolute inset-0 backface-hidden ${flipped && "!bg-background/60 !backdrop-blur-xl"}`
                        }
                    >
                        <div className="w-full h-100 mb-4 relative">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className={
                                    `object-cover ${image === "/images/crowdcast.gif" && "sm:object-fill"} rounded-t-2xl border-b-[2px] border-border \
                                    group-hover:border-accent ${flipped && "!border-accent"}`
                                }
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-text-primary mb-4">
                            {title}
                        </h2>
                    </div>

                    {/* Back */}
                    <div 
                        className={
                            `flex flex-col justify-between w-full h-full group-hover:bg-background/60 group-hover:backdrop-blur-xl rounded-2xl \
                            p-7 absolute inset-0 backface-hidden rotate-y-180 ${flipped && "!bg-background/60 !backdrop-blur-xl"}`
                        }
                    >
                        <div>
                            {/* Project title */}
                            <h2 className="text-2xl font-bold text-text-primary mb-3">
                                {title}
                            </h2>

                            {/* Project description */}
                            <p className="text-text-secondary text-md leading-relaxed w-full mb-4">
                                {description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap items-center gap-2 w-full mb-4">
                                {tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-md rounded-full bg-accent/20 text-accent border border-primary/20"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* GitHub and demo links */}
                        <div className="flex gap-4">
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    className={
                                        "inline-flex text-nowrap items-center justify-center rounded-full w-28 px-2 py-1 font-semibold cursor-pointer \
                                        transition duration-400 hover:-translate-y-1 active:-translate-y-1 border border-primary text-primary  \
                                        overflow-hidden before:absolute before:inset-0 before:bg-primary/10 before:scale-x-0 before:origin-left  \
                                        before:transition-transform before:duration-400 hover:before:scale-x-100 active:before:scale-x-100 \
                                        hover:shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
                                    }
                                >
                                    <span className="relative z-10">GitHub →</span>
                                </a>
                            )}

                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    className={
                                        "inline-flex text-nowrap items-center justify-center rounded-full w-28 px-2 py-1 font-semibold cursor-pointer \
                                        transition duration-400 hover:-translate-y-1 active:-translate-y-1 border border-primary text-primary\
                                        overflow-hidden before:absolute before:inset-0 before:bg-primary/10 before:scale-x-0 before:origin-left \
                                        before:transition-transform before:duration-400 hover:before:scale-x-100 active:before:scale-x-100 \
                                        hover:shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
                                    }
                                >
                                    <span className="relative z-10">Demo →</span>
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};