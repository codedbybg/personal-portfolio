// import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              BG<span className="text-[var(--accent)]">.</span>
            </a>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/codedbybg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/bhagwan-golhar-9681b8332/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:bhagwangolhar6629@gmail.com"
              target="_blank"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            © {currentYear} Bhagwan Golhar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
