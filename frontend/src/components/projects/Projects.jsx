import { motion } from "framer-motion";

import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

import { projectsData } from "../../data/projects";

function Projects(){
    return(
        <section
            id="projects"
            className="bg-[var(--background)] py-24 sm:py-28"
        >
            <Container>
                <SectionHeading
                    eyebrow="Projects"
                    title="Things I've built."
                    description="A selection of projects that showcase my experience across full-stack development, modern frontend technologies and AI/ML."
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                        >
                            <Card className="group h-full overflow-hidden p-0">
                                {/* Project Visual */}
                                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[var(--surface-elevated)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent opacity-60" />

                                    <div className="relative text-center">
                                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                                        {project.category}
                                    </p>

                                        <h3 className="mt-3 px-6 text-2xl font-bold">
                                            {project.title}
                                        </h3>
                                </div>

                                {project.featured && (
                                    <span className="absolute right-5 top-5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 sm:p-8">
                                <p className="leading-7 text-[var(--muted)]">
                                    {project.description}
                                </p>

                            {/* Technologies */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/50"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    <FaGithub size={16} />
                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                                >
                                <ExternalLink size={16} />
                                    Live Demo
                                </a>

                                <ArrowUpRight
                                    size={20}
                                    className="ml-auto text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                                />
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Container>
    </section>

    );
}

export default Projects;