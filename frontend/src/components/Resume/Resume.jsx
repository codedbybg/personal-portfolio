import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

function Resume() {
  return (
    <section
      id="resume"
      className="min-w-0 bg-[var(--surface)] py-24 sm:py-28"
    >
      <Container>
        <motion.div
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
            duration: 0.6,
          }}
          className="relative min-w-0 max-w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 sm:p-12"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative flex min-w-0 flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="min-w-0 max-w-2xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <FileText size={23} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Resume
              </p>

              <h2 className="mt-3 min-w-0 max-w-full break-words text-3xl font-bold tracking-tight sm:text-4xl">
                Want to know more about my experience?
              </h2>

              <p className="mt-5 min-w-0 max-w-full break-words text-base leading-7 text-[var(--muted)] sm:text-lg">
                Explore my resume for a detailed overview of my education,
                technical skills, projects and development experience.
              </p>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View Resume
              </Button>

              <Button
                as="a"
                href="/resume.pdf"
                download
                className="w-full sm:w-auto"
              >
                <Download size={17} className="mr-2 shrink-0" />
                Download
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Resume;