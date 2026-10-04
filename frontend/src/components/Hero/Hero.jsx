import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTensorflow } from "react-icons/si";

import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] pt-20"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-3xl" />

        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid min-w-0 items-center gap-16 py-20 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Bhagwan
              <span className="block text-[var(--accent)]">
                Golhar.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
              Full Stack Developer
              <span className="text-[var(--muted)]">
                {" "}
                & AI/ML Enthusiast
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I build modern, responsive web applications and intelligent
              solutions using technologies across full-stack development and
              AI/ML.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="#projects">
                View Projects
                <ArrowUpRight size={17} className="ml-2" />
              </Button>

              <Button
                as="a"
                href="/resume.pdf"
                download
                variant="secondary"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/codedbybg"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/bhagwan-golhar-9681b8332/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href="mailto:bhagwangolhar6629@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT PROFILE VISUAL ================= */}
          <motion.div
            className="relative mx-auto flex w-full max-w-lg items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            {/* Large ambient glow */}
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-[var(--accent)]/20 blur-[100px]" />

            {/* Rotating decorative ring */}
            <motion.div
              className="absolute h-[22rem] w-[22rem] rounded-full border border-[var(--accent)]/20 border-dashed"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Outer frame */}
            <div className="relative h-[22rem] w-[22rem] rounded-full border border-[var(--accent)]/30 p-3 shadow-2xl sm:h-[27rem] sm:w-[27rem]">

              {/* Inner image container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border border[var(--border)] bg-[var(--surface)]">

                {/* Image */}
                <img
                  src="/profile/bhagwan-profile.png"
                  alt="Bhagwan Golhar - Full Stack Developer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent" />
              </div>

              {/* Accent corner */}
              <div className="absolute -right-2 top-16 h-5 w-5 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
            </div>

            {/* ================= FLOATING TECH BADGE ================= */}

            {/* React */}
            <motion.div
              className="absolute left-0 top-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 shadow-xl backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaReact
                size={25}
                className="text-[var(--accent)]"
              />
            </motion.div>

            {/* Node */}
            <motion.div
              className="absolute bottom-20 right-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 shadow-xl backdrop-blur-md"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaNodeJs
                size={24}
                className="text-[var(--accent)]"
              />
            </motion.div>

            {/* AI badge */}
            <motion.div
              className="absolute bottom-6 left-6 flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-xl backdrop-blur-md"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles
                size={17}
                className="text-[var(--accent)]"
              />

              <span className="text-xs font-semibold text-[var(--foreground)]">
                AI / ML
              </span>
            </motion.div>

            {/* Availability card */}
            <motion.div
              className="absolute right-0 top-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-xl backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />

                <span className="text-xs font-medium text-[var(--foreground)]">
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* Bottom tech stack */}
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 px-5 py-3 shadow-xl backdrop-blur-md">
              <FaReact size={18} className="text-[var(--muted)]" />
              <FaNodeJs size={18} className="text-[var(--muted)]" />
              <SiMongodb size={18} className="text-[var(--muted)]" />
              <SiTensorflow size={18} className="text-[var(--muted)]" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;
