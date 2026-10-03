import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { journeyData } from "../../data/journey";

const iconMap = {
  Education: GraduationCap,
  Learning: BookOpen,
  Development: Code2,
  Project: BrainCircuit,
};

function Journey() {
  return (
    <section
      id="journey"
      className="min-w-0 bg-[var(--surface)] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="My journey so far."
          description="A timeline of my education, development journey and continuous learning."
        />

        <div className="relative mt-16 min-w-0">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--border)] sm:left-1/2 sm:block" />

          <div className="min-w-0 space-y-12">
            {journeyData.map((item, index) => {
              const Icon = iconMap[item.type] || BriefcaseBusiness;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  className="relative min-w-0 sm:grid sm:grid-cols-2 sm:gap-12"
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 z-10 hidden h-9 w-9 shrink-0 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[var(--surface)] bg-[var(--accent)] text-white sm:left-1/2 sm:flex">
                    <Icon size={15} className="shrink-0" />
                  </div>

                  {/* Content */}
                  <div
                    className={`min-w-0 sm:col-span-1 ${
                      isRight ? "sm:col-start-2" : "sm:col-start-1"
                    }`}
                  >
                    <div className="min-w-0 max-w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] sm:p-7">
                      {/* Year and Type */}
                      <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
                        <span className="shrink-0 text-sm font-semibold text-[var(--accent)]">
                          {item.year}
                        </span>

                        <span className="max-w-full rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                          {item.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 min-w-0 max-w-full text-xl font-semibold sm:text-2xl">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="mt-2 min-w-0 max-w-full text-sm font-medium text-[var(--muted)]">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="mt-4 min-w-0 max-w-full leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Journey;