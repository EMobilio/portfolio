"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="w-full py-8 px-8 md:px-16 mt-20 flex flex-col items-center gap-4 border-t border-border bg-surface"
        >
            <div className="flex gap-6 text-text-secondary text-4xl box-border">
                <motion.a 
                    href="https://www.linkedin.com/in/eytan-mobilio/" 
                    target="_blank" 
                    className={
                        "hover:text-[#ffffff] hover:bg-[#0077B5] active:text-[#ffffff] active:bg-[#0077B5] border-2 border-surface \
                        hover:border-accent active:border-accent transition-colors overflow-hidden"
                    }
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.25 }}
                >
                    <FaLinkedinIn />
                </motion.a>

                <motion.a 
                    href="https://github.com/EMobilio" 
                    target="_blank" 
                    className={
                        "hover:text-[#24292e] hover:bg-[#fafbfc] active:text-[#24292e] active:bg-[#fafbfc] border-2 border-surface \
                        hover:border-accent active:border-accent transition-colors rounded-full"
                    }
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.25 }}
                >
                    <FaGithub />
                </motion.a>
            </div>
            
            <p className="text-text-secondary text-md">
                &copy; {new Date().getFullYear()} Eytan Mobilio
            </p>
        </footer>
    );
};