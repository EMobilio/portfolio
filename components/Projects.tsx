"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full flex flex-col items-center justify-center py-32 px-2 md:px-16 lg:px-32">
            <motion.h1 
                className="text-4xl sm:text-6xl text-text-primary font-bold mb-20"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h1>

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] justify-items-center gap-x-8 gap-y-14 w-full"
                variants={{
                    hidden: { opacity: 1 },
                    show: {
                        opacity: 1,
                        transition: {
                            delayChildren: 0.6,
                            staggerChildren: 0.3,
                        },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div 
                    className="w-full sm:w-auto h-auto"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4  } }
                    }}
                >
                    <ProjectCard
                        title="MarketDig"
                        image="/images/marketdig.webp"
                        description={
                            "An all-in-one market research platform for aspiring small business owners to analyze\
                            their prospective market's competition, demographics, business environment and more."
                        }
                        tech={["Vite", "React", "Express.js", "MongoDB", "Node.js", "Redux Toolkit"]}
                        demo="https://marketdig.netlify.app/"
                    />
                </motion.div>

                <motion.div 
                    className="w-full sm:w-auto h-auto"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <ProjectCard
                        title="FlickPick"
                        image="/images/flickpick.webp"
                        description={
                            "A film and TV discovery application where users can browse, review, and \
                            recommend titles while receiving personalized recommendations and weekly \
                            trend insights."
                        }
                        tech={["Python", "Django", "SQLite", "Pandas", "Plotly"]}
                        github="https://github.com/EMobilio/cs412/tree/main/project"
                        demo="https://limitless-sierra-80433-a3b989f436f9.herokuapp.com/project/"
                    />
                </motion.div>

                <motion.div 
                    className="w-full sm:w-auto h-auto"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <ProjectCard
                        title="Tetris Agent"
                        image="/images/tetris-agent.gif"
                        description={"A reinforcement learning agent trained with temporal-difference Q-learning to \
                            autonomously play Tetris. Includes custom state encoding, a reward function optimized for \
                            line clears, and a neural network architecture."}
                        tech={["Java"]}
                        github="https://github.com/EMobilio/tetris-agent"
                    />
                </motion.div>

                <motion.div 
                    className="w-full sm:w-auto h-auto"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <ProjectCard
                        title="CrowdCast"
                        image="/images/crowdcast.gif"
                        description={"A machine learning model leveraging XGBoost to predict Major League Baseball \
                            attendance, built through the full data science lifecycle: data collection, cleaning, \
                            EDA, preprocessing, modeling, and evaluation."
                        }
                        tech={["Python", "Beautiful Soup", "Pandas", "scikit-learn"]}
                        github="https://github.com/EMobilio/CrowdCast"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};