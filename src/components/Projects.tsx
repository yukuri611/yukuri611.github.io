"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const categoryKeys = ["architecture", "ai", "hardware", "software"] as const;

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
}

export default function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState("all");

  const items = t.raw("items") as ProjectItem[];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    },
    []
  );

  return (
    <section id="projects" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        {t("title")}
      </motion.h2>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 flex flex-wrap gap-3"
      >
        <button
          onClick={() => setActiveFilter("all")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeFilter === "all"
              ? "bg-accent text-white"
              : "bg-card text-text-secondary hover:text-text-primary border border-border"
          }`}
        >
          {t("filterAll")}
        </button>
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter === key
                ? "bg-accent text-white"
                : "bg-card text-text-secondary hover:text-text-primary border border-border"
            }`}
          >
            {t(`categories.${key}`)}
          </button>
        ))}
      </motion.div>

      {/* Project cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onMouseMove={handleMouseMove}
              className="glow-card flex flex-col"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent"
                  >
                    <Github size={14} />
                    {t("viewCode")}
                  </a>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-accent"
                  >
                    <ExternalLink size={14} />
                    {t("viewDemo")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
