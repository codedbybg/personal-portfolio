import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

import { certificatesData } from "../../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[var(--background)] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Certificates"
          title="Learning backed by practice."
          description="A collection of certifications and learning achievements from my development journey."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.title}
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
              <Card className="group flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Award size={22} />
                  </div>

                  <span className="text-sm text-[var(--muted)]">
                    {certificate.date}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                  {certificate.issuer}
                </p>

                <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">
                  {certificate.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  View Certificate
                  <ExternalLink
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Certificates;
