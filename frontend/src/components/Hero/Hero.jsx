import { motion } from "framer-motion";
import { ArrowRight , Mail} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] pt-20"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />
            </div>

            <Container className="relative">
                <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                            Hello I'm
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
                            I build modern, responsive web applications
                            and intelligent solutions using technologies
                            across full-stack development and AI/ML.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button>
                                View Projects
                                <ArrowRight size={17} className="ml-2" />
                            </Button>

                            <Button variant="secondary">
                                Download Resume
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex items-center gap-4">

                        {/* GitHub */}
                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                <FaGithub size={19} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                <FaLinkedinIn size={19} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:your-email@example.com"
                                aria-label="Email"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                <Mail size={19} />
                            </a>
                        </div>
                        
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                        className="relative mx-auto w-full max-w-lg"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl">

                            {/* Card Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" />

                            <div className="relative flex h-full flex-col justify-between">

                                {/* Code Header */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-[var(--muted)]">
                                        developer.json
                                    </span>

                                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                                </div>

                                {/* Developer Object */}
                                <div className="font-mono text-sm leading-8 text-[var(--muted)] sm:text-base">

                                    <p>
                                        <span className="text-[var(--accent)]">
                                            const
                                        </span>{" "}
                                        developer = {"{"}
                                    </p>

                                    <p className="pl-6">
                                        name:{" "}
                                        <span className="text-[var(--foreground)]">
                                            "Bhagwan Golhar"
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        role:{" "}
                                        <span className="text-[var(--foreground)]">
                                            "Full Stack Developer"
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        focus:{" "}
                                        <span className="text-[var(--foreground)]">
                                            "AI/ML"
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        passion:{" "}
                                        <span className="text-[var(--foreground)]">
                                            "Building"
                                        </span>
                                    </p>

                                    <p>
                                        {"}"}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3">

                                    <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                                        <p className="text-xs text-[var(--muted)]">
                                            Stack
                                        </p>

                                        <p className="mt-1 text-sm font-semibold">
                                            MERN
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                                        <p className="text-xs text-[var(--muted)]">
                                            Focus
                                        </p>

                                        <p className="mt-1 text-sm font-semibold">
                                            AI/ML
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;