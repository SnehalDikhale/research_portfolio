"use client";

import { motion } from "framer-motion";
import { Publication } from "@/lib/types";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface PublicationsSectionProps {
  publications: Publication[];
}

export default function PublicationsSection({ publications }: PublicationsSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"year" | "type">("year");

  const types = ["all", "conference", "journal", "preprint", "patent"];

  const filteredAndSorted = useMemo(() => {
    let filtered = publications;

    if (selectedType !== "all") {
      filtered = publications.filter((pub) => pub.type === selectedType);
    }

    return filtered.sort((a, b) => {
      if (sortBy === "year") {
        return b.year - a.year;
      }
      return a.type.localeCompare(b.type);
    });
  }, [publications, selectedType, sortBy]);

  const getTypeColor = (type: Publication["type"]) => {
    switch (type) {
      case "conference":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "journal":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "preprint":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "patent":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    }
  };

  return (
    <section id="publications" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Publications & Patents
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Peer-reviewed research and intellectual property
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Type filters */}
          <div className="flex flex-wrap items-center gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize",
                  selectedType === type
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-md"
                    : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Sort by:</span>
            <button
              onClick={() => setSortBy("year")}
              className={cn(
                "px-3 py-1 rounded text-sm font-medium transition-colors",
                sortBy === "year"
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              )}
            >
              Year
            </button>
            <button
              onClick={() => setSortBy("type")}
              className={cn(
                "px-3 py-1 rounded text-sm font-medium transition-colors",
                sortBy === "type"
                  ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              )}
            >
              Type
            </button>
          </div>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredAndSorted.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
              No publications found for this filter.
            </div>
          ) : (
            filteredAndSorted.map((pub, index) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {pub.authors.join(", ")}
                    </p>

                    {/* Venue and Year */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {pub.venue}
                      </span>
                      <span className="text-neutral-400">•</span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {pub.year}
                      </span>
                    </div>

                    {/* Tags */}
                    {pub.tags && pub.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right column: Type badge and links */}
                  <div className="flex flex-col items-start lg:items-end gap-3">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-semibold capitalize", getTypeColor(pub.type))}>
                      {pub.type}
                    </span>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          View
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          PDF
                        </a>
                      )}
                      {pub.code && (
                        <a
                          href={pub.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {types.slice(1).map((type) => {
            const count = publications.filter((p) => p.type === type).length;
            return (
              <div key={type} className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  {count}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 capitalize mt-1">
                  {type}{count !== 1 ? "s" : ""}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
