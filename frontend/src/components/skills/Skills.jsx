import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

import { skillsData } from "../../data/skills";

function Skills() {
    return (
        <section
            id="skills"
            className="bg-[var(--surface)] py-24 sm:py-28"
        >
            <Container>
                <SectionHeading
                    eyebrow="Skills"
                    title="Technologies I work with."
                    description="A growing toolkit built through projects, experimentation and continuous learning."
                />

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {skillsData.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                >
                                    <Card className="h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                                                <Icon size={21} />
                                            </div>

                                            <h3 className="text-xl font-semibold">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
            </Container>
        </section>
    );
}

export default Skills;