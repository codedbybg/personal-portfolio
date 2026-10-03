import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import Button from "../common/Button";

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful."
          description="Have a project idea, opportunity, or just want to connect? Feel free to reach out."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold">Get in touch</h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                I'm currently focused on growing as a Full Stack Developer and
                AI/ML Engineer. I'm open to internships, entry-level
                opportunities, collaborations and interesting projects.
              </p>

              <div className="mt-8 space-y-4">
                {/* Email */}
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-elevated)]">
                    <Mail size={20} className="text-[var(--accent)]" />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--muted)]">Email</p>

                    <p className="font-medium">your-email@example.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/codedbybg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-elevated)]">
                    <FaGithub size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--muted)]">GitHub</p>

                    <p className="font-medium">github.com/codedbybg</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[var(--accent)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-elevated)]">
                    <FaLinkedinIn size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--muted)]">LinkedIn</p>

                    <p className="font-medium">LinkedIn Profile</p>
                  </div>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
