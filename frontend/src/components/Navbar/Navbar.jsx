import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import Button from "../common/Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full min-w-0">
      <nav className="min-w-0 border-b border-[var(--border)] bg-[var(--background)]/80 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full min-w-0 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            className="shrink-0 text-xl font-bold tracking-tight"
          >
            BG<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden min-w-0 items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <Download size={16} className="mr-2 shrink-0" />
              Resume
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="min-w-0 border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[var(--border)] py-4 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {link.name}
                </a>
              ))}

              <div className="min-w-0 pt-5">
                <Button
                  as="a"
                  href="/resume.pdf"
                  download
                  className="w-full"
                >
                  <Download size={16} className="mr-2 shrink-0" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;