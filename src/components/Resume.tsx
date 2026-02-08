"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export default function Resume() {
  const t = useTranslations("resume");
  const timeline = t.raw("timeline") as TimelineItem[];

  const experienceItems = timeline.filter((item) => item.type === "experience");
  const educationItems = timeline.filter((item) => item.type === "education");

  return (
    <section id="resume" className="section-container">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-title mb-0"
        >
          {t("title")}
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="/resume.pdf"
          download
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          <Download size={16} />
          {t("download")}
        </motion.a>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
              {t("experience")}
            </h3>
          </motion.div>

          <div className="space-y-0">
            {experienceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l-2 border-border pb-8 pl-6 last:pb-0"
              >
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="mb-1 text-xs font-medium text-accent">
                  {item.period}
                </p>
                <h4 className="mb-1 text-base font-semibold text-text-primary">
                  {item.title}
                </h4>
                <p className="mb-2 text-sm font-medium text-text-secondary">
                  {item.organization}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
              {t("education")}
            </h3>
          </motion.div>

          <div className="space-y-0">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l-2 border-border pb-8 pl-6 last:pb-0"
              >
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="mb-1 text-xs font-medium text-accent">
                  {item.period}
                </p>
                <h4 className="mb-1 text-base font-semibold text-text-primary">
                  {item.title}
                </h4>
                <p className="mb-2 text-sm font-medium text-text-secondary">
                  {item.organization}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
