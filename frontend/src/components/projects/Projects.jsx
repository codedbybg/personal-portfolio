import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

import { projectsData } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="min-w-0 bg-[var(--background)] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="A selection of projects that showcase my experience across full-stack development, modern frontend technologies and AI/ML."
        />

        <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="min-w-0"
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
              <Card
                className="group h-full min-w-0 overflow-hidden p-0"
                data-cursor="project"
              >
                {/* Project Image */}
                <div
                  className="relative h-56 min-w-0 overflow-hidden bg-[var(--surface-elevated)]"
                  data-cursor="project"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                          {project.category}
                        </p>

                        <h3 className="mt-3 max-w-full px-6 text-2xl font-bold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Accent Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Project Category */}
                  <div className="absolute bottom-5 left-5 max-w-[calc(100%-7rem)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      {project.category}
                    </p>

                    <h3 className="mt-2 max-w-full break-words text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute right-5 top-5 shrink-0 rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                      Featured
                    </span>
                  )}

                  {/* View Indicator */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="min-w-0 p-6 sm:p-8">
                  <p className="min-w-0 break-words leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex min-w-0 flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="max-w-full break-words rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex min-w-0 flex-wrap items-center gap-3">
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="external"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <FaGithub
                        size={16}
                        className="shrink-0"
                      />

                      GitHub
                    </a>

                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="external"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                      <ExternalLink
                        size={16}
                        className="shrink-0"
                      />

                      Live Demo
                    </a>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={20}
                      className="ml-auto shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
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