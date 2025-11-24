"use client";

import { motion } from "framer-motion";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiCss3, SiDjango, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import SkillsCard from "./SkillCard";
import OrbitRing from "./OrbitRing";
import Image from "next/image";


export default function Skills() {

    const skills = [
        { name: "Python", icon: <Image src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" alt="Python logo" width={27} height={27} /> },
        { name: "Java", icon: <Image src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width={33} height={33} /> },
        { name: "Go", icon: <FaGolang className="text-[#00ADD8]" /> },
        { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F0DB4F]" /> },
        { name: "SQL", icon: <Image src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQLite logo" width={30} height={30} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764abc]" /> },
        { name: "React", icon: <FaReact className="text-[#00ffff]" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#44883E]"/> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#00ed64]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
    ]

    return (
        <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-center py-32 sm:pb-65 px-8 md:px-16 lg:px-32 relative overflow-hidden bg-[#0a0c0d]">
            <motion.h1 
                className="text-4xl sm:text-6xl text-text-primary font-bold mb-20 z-100"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 1}}
                viewport={{ once: true }}
            >
                Skills
            </motion.h1>
            
            <div className="relative flex items-center justify-center w-full">
                {/* Skills icons orbit rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <OrbitRing 
                            icons={skills.slice(7, 16).map((s) => s.icon)} 
                            radius={390} 
                            duration={30}
                            direction={1}
                        />
                    </div>

                    {/* Inner Ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <OrbitRing 
                            icons={skills.slice(0, 7).map((s) => s.icon)} 
                            radius={280} 
                            duration={30}
                            direction={-1}
                        />
                    </div>
                </div>

                {/* Foreground skills cards grid */}
                <div className="relative z-10">
                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                        variants={{
                            hidden: { opacity: 1 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 1/16,
                                },
                            },
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill) => (
                            <motion.div 
                                key={skill.name}
                                className="w-full sm:w-auto h-auto"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                                }}
                            >
                                <SkillsCard name={skill.name} icon={skill.icon} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};