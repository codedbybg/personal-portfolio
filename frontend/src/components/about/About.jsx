import { motion } from "framer-motion";
import {GraduationCap , Code2 , BrainCircuit } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

function About(){
    const highlights = [
        {
            icon : GraduationCap,
            title : "BCA Student",
            description : "Currently pursuing BCA (Science) and building a strong foundation in software development and computer science.",
        },
        {
            icon : Code2,
            title : "Full Stack Developer",
            description : "Experienced with React , Node.js , Express , MongoDB , and modern frontend technologies.",
        },
        {
            icon : BrainCircuit,
            title : "AI/ML Enthusiast",
            description : "Exploring python , machine learning and AI to build intelligent and practical applications.",
        },

    ];

    return(
        <section
            id = "about"
            className = "bg-[var(--background)] py-24 sm:py-28"
        >
            <Container>
                <SectionHeading
                    eyebrow = "About Me"
                    title = "Building with code, learning with curiosity."
                    description = "I am a developer focused on creating useful digital experiences while continuously expanding my knowledge across full-stack development and AI/ML."
                />

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {
                        highlights.map((highlight , index)=>{
                            const Icon = highlight.icon;

                            return(
                                <motion.div
                                    key = {highlight.title}
                                    initial = {{opacity : 0 , y : 30}}
                                    whileInView = {{opacity : 1 , y : 0}}
                                    viewport = {{once : true , amount : 0.2}}
                                    transition = {{duration : 0.5 , delay : index * 0.1}}
                                >
                                    <Card className = "h-full">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                                            <Icon size = {22} />
                                        </div>

                                        <h3 className="mt-6 text-xl font-semibold">
                                            {highlight.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-[var(--muted)]">
                                            {highlight.description}
                                        </p>
                                    </Card>

                                </motion.div>
                            );
                        })
                    }
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-5">
                    <motion.div
                        initial = {{opacity : 0 , x : -30}}
                        whileInView = {{opacity : 1 , x : 0}}
                        viewport = {{once : true , amount : 0.2}}
                        transition = {{duration : 0.6}}
                        className="lg:col-span-3"
                    >

                        <Card className="h-full">
                            <h3 className="text-2xl font-semibold">
                                My Development Journey
                            </h3>

                            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--muted)]">
                                <p>
                                    My journey in technology started with web development,
                                    where I learned how websites and applications are
                                    designed, developed and connected to backend systems.
                                </p>

                                <p>
                                    Over time, I started working with the MERN stack and
                                    built full-stack applications using React, Node.js,
                                    Express and MongoDB.
                                </p>

                                <p>
                                    Currently, I'm expanding my skills in Python,
                                    machine learning and AI with the goal of building
                                    intelligent applications that solve real-world
                                    problems.
                                </p>
                            </div>
                        </Card>

                    </motion.div>

                    <motion.div
                        initial = {{opacity : 0 , x : 30}}
                        whileInView = {{opacity : 1 , x : 0}}
                        viewport = {{once : true , amount : 0.2}}
                        transition = {{duration : 0.6}}
                        className="lg:col-span-2"
                    >
                        <Card className="h-full">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                                Currently
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                Learning & Building
                            </h3>

                            <ul className="mt-6 space-y-4 text-[var(--muted)]">
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"/>
                                    Backend development with Node.js & Express
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                                    Python, Machine Learning & AI
                                </li>

                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                                    Building production-ready projects
                                </li>
                            </ul>
                        </Card>

                    </motion.div>
                </div>
            </Container>

        </section>
    );
}

export default About;