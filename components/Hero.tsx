"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
    const [displayed, setDisplayed] = useState("");
    const fullText = "Hi, I'm Eytan.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 75)
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen w-full flex flex-col gap-8 items-start justify-center py-32 px-8 md:px-16 lg:px-32">
            <h1 className="text-6xl sm:text-8xl text-text-primary font-bold">
                {displayed}
                <span className="border-r-2 border-text-primary animate-blink ml-1"></span>
            </h1>

            <motion.h2
                className="text-xl sm:text-2xl text-text-secondary max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            >
                I'm a developer who loves to build meaningful, interactive, data-driven apps.
            </motion.h2>

            <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                variants={{
                    hidden: { opacity: 1 },
                    show: {
                        opacity: 1,
                        transition: {
                            delayChildren: 1.8,
                            staggerChildren: 0.3,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4  } }
                    }}
                >
                    <Button variant={"primary"} sectionId={"about"}>Learn More</Button>
                </motion.div>
                
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <Button variant={"outline"} sectionId={"projects"}>View Projects</Button>
                </motion.div>
                
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <Button variant={"accent"} href={"/documents/Eytan-Mobilio-Resume.pdf"}>View Resume</Button>
                </motion.div>
            </motion.div>
        </section>
    );
};