"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/utils";
import { ResearchPillar } from "@/lib/types";
import { useState } from "react";

interface ResearchPillarsProps {
  pillars: ResearchPillar[];
}

export default function ResearchPillars({ pillars }: ResearchPillarsProps) {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research Pillars
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Two complementary domains driving embodied AI forward
          </p>
        </motion.div>

        {/* Split Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`
                  relative h-full rounded-2xl border-2 overflow-hidden
                  transition-all duration-300 cursor-pointer
                  ${
                    activePillar === pillar.id
                      ? `border-${pillar.color}-500 shadow-2xl scale-[1.02]`
                      : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                  }
                `}
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
              >
                {/* Gradient overlay */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                    bg-gradient-to-br
                    ${pillar.color === "blue" && "from-blue-500/5 to-blue-600/10"}
                    ${pillar.color === "purple" && "from-purple-500/5 to-purple-600/10"}
                    ${pillar.color === "emerald" && "from-emerald-500/5 to-emerald-600/10"}
                  `}
                />

                <div className="relative p-8 bg-white dark:bg-neutral-900">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="text-5xl mb-4">{pillar.icon}</div>
                      <h3 className="text-3xl font-bold mb-2">{pillar.title}</h3>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        {pillar.subtitle}
                      </p>
                    </div>
                    <div
                      className={`
                        w-3 h-3 rounded-full transition-all
                        ${
                          activePillar === pillar.id
                            ? `bg-${pillar.color}-500 scale-150`
                            : "bg-neutral-300 dark:bg-neutral-700"
                        }
                      `}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Projects */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                      Key Projects
                    </h4>
                    {pillar.projects.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                      >
                        <h5 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                          {project.title}
                        </h5>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                            {project.impact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
