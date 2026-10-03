import { motion } from "framer-motion";
import { Download, FileText, ArrowUpRight } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

function Resume() {
  return (
    <section id="resume" className="bg-[var(--surface)] py-24 sm:py-28">
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
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 sm:p-12"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <FileText size={23} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                Resume
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Want to know more about my experience?
              </h2>

              <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
                Explore my resume for a detailed overview of my education,
                technical skills, projects and development experience.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary" className="w-full">
                  View Resume
                  <ArrowUpRight size={17} className="ml-2" />
                </Button>
              </a>

              <a href="/resume.pdf" download className="inline-flex">
                <Button className="w-full">
                  <Download size={17} className="mr-2" />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Resume;
