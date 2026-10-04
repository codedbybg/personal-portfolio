import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-0 border-t border-[var(--border)] py-10">
      <Container>
        <div className="flex min-w-0 flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="min-w-0 text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold"
            >
              CODEDBYBG<span className="text-[var(--accent)]">.</span>
            </a>

            <p className="mt-2 max-w-full text-sm text-[var(--muted)]">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://github.com/codedbybg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/bhagwan-golhar-9681b8332/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:bhagwangolhar6629@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <ArrowUp size={18} />
          </a>
        </div>

        {/* Copyright */}
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