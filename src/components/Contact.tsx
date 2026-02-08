"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yukuri611",
    icon: <Github size={20} />,
  },
  {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yuki-iwahashi-4719aa291/",
    icon: <Linkedin size={20} />,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com",
    icon: <BookOpen size={20} />,
  },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        {t("title")}
      </motion.h2>

      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {t("description")}
        </motion.p>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <p className="mb-3 text-sm font-medium text-text-secondary uppercase tracking-wider">
            {t("emailLabel")}
          </p>
          <a
            href={`mailto:${t("email")}`}
            className="group inline-flex items-center gap-2 text-xl font-semibold text-text-primary transition-colors hover:text-accent md:text-2xl"
          >
            <Mail size={24} className="text-accent" />
            {t("email")}
            <ArrowUpRight
              size={18}
              className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-4 text-sm font-medium text-text-secondary uppercase tracking-wider">
            {t("linksLabel")}
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
