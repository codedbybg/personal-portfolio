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
      className="min-w-0 bg-[var(--background)] py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Certificates"
          title="Learning backed by practice."
          description="A collection of certifications and learning achievements from my development journey."
        />

        <div className="mt-14 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Card className="group flex h-full min-w-0 flex-col">
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Award size={22} />
                  </div>

                  <span className="max-w-full shrink-0 text-sm text-[var(--muted)]">
                    {certificate.date}
                  </span>
                </div>

                <h3 className="mt-6 min-w-0 max-w-full break-words text-xl font-semibold">
                  {certificate.title}
                </h3>

                <p className="mt-2 min-w-0 max-w-full break-words text-sm font-medium text-[var(--accent)]">
                  {certificate.issuer}
                </p>

                <p className="mt-4 min-w-0 max-w-full flex-1 break-words leading-7 text-[var(--muted)]">
                  {certificate.description}
                </p>

                <div className="mt-6 flex min-w-0 flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="max-w-full break-words rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex max-w-full shrink-0 items-center gap-2 self-start text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  <span className="min-w-0">View Certificate</span>

                  <ExternalLink
                    size={15}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
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