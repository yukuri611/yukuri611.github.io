"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi: string;
  pdf: string;
}

export default function Publications() {
  const t = useTranslations("publications");
  const items = t.raw("items") as PublicationItem[];

  return (
    <section id="publications" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        {t("title")}
      </motion.h2>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-l-2 border-border pl-6 transition-colors hover:border-accent"
          >
            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold text-text-primary transition-colors group-hover:text-accent md:text-lg">
                  {item.title}
                </h3>
                <p className="mb-1 text-sm text-text-secondary">
                  {item.authors}
                </p>
                <p className="text-sm text-text-secondary">
                  <span className="font-medium text-accent/70">
                    {item.venue}
                  </span>
                  <span className="mx-2 text-border">|</span>
                  <span>{item.year}</span>
                </p>
              </div>

              <div className="flex shrink-0 gap-2 pt-1">
                {item.doi && (
                  <a
                    href={item.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border p-2 text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent"
                    aria-label="DOI Link"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                {item.pdf && (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border p-2 text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent"
                    aria-label="PDF Download"
                  >
                    <FileText size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
