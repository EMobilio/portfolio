"use client";

import Image from "next/image"
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion"; 
import Button from "./Button";

export default function AboutMe() {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <section ref={ref} id="about" className="min-h-screen w-full flex flex-col items-center justify-center py-32 px-8 md:px-16 lg:px-32 bg-[#0a0c0d]">
            <motion.h1 
                className="text-4xl sm:text-6xl text-text-primary font-bold mb-20"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                initial="hidden"
                animate={controls}
            >
                About Me
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl items-center">
                <motion.div
                    className="flex justify-center"
                    variants={{
                        hidden: { opacity: 0, x: -180 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
                    }}
                    initial="hidden"
                    animate={controls}
                >
                    <Image 
                        src="/images/eytan.webp" 
                        alt="Portrait of Eytan Mobilio" 
                        width={350} 
                        height={350}
                        className="rounded-2xl object-cover border border-border shadow-xl"
                    />
                </motion.div>
                
                <motion.div
                    className="flex flex-col gap-6 text-text-secondary leading-relaxed"
                    variants={{
                        hidden: { opacity: 0, x: 180 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }
                    }}
                    initial="hidden"
                    animate={controls}
                >
                    <p className="text-lg md:text-xl">
                        Hello! My name is Eytan, and I'm a recent graduate of Boston University with a Bachelor's
                        in Computer Science. I'm a developer who is passionate about building clean, interactive,
                        and data-driven applications. I love transforming ideas into polished, performant experiences
                        using modern web technologies.
                    </p>

                    <p className="text-lg md:text-xl">
                        Through coursework and personal projects, I've gained valuable experience developing full-stack
                        applications with technologies such as React/Next.js, Python/Django, Node.js/Express.js,
                        MongoDB, and SQL. I also have experience with AI, machine learning, and data-focused projects.
                    </p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }
                        }}
                        initial="hidden"
                        animate={controls}
                    >
                        <Button variant="primary" href={"/documents/Eytan-Mobilio-Resume.pdf"}>View Resume</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}