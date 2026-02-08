"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Cpu, Brain, CircuitBoard, Code2 } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  architecture: <Cpu size={20} />,
  ai: <Brain size={20} />,
  hardware: <CircuitBoard size={20} />,
  software: <Code2 size={20} />,
};

const categoryKeys = ["architecture", "ai", "hardware", "software"] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        {t("title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg"
      >
        {t("description")}
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-xl font-semibold text-text-primary"
      >
        {t("skillsTitle")}
      </motion.h3>

      <div className="grid gap-6 md:grid-cols-2">
        {categoryKeys.map((key, index) => {
          const skills = t.raw(`skills.${key}`) as string[];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glow-card"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {categoryIcons[key]}
                </div>
                <h4 className="font-semibold text-text-primary">
                  {t(`categories.${key}`)}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-background px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
