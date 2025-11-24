"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-[50vh] w-full flex flex-col items-center justify-center py-32 px-8 md:px-16 lg:px-32"
        >
            <motion.h1 
                className="text-4xl sm:text-6xl text-text-primary font-bold mb-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Contact Me
            </motion.h1>

            <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={{
                    hidden: { opacity: 1 },
                    show: {
                        opacity: 1,
                        transition: {
                            delayChildren: 0.4,
                            staggerChildren: 0.3,
                        },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4  } }
                    }}
                >
                    <a href="mailto:eytan.mobilio@gmail.com">
                        <Button variant={"primary"}>Email Me</Button>
                    </a>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4  } }
                    }}
                >
                    <Button variant={"outline"} href={"/documents/Eytan-Mobilio-Resume.pdf"}>View Resume</Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
