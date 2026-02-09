"use client";

import { motion } from "framer-motion";
import { ImpactMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ImpactDashboardProps {
  metrics: ImpactMetric[];
}

export default function ImpactDashboard({ metrics }: ImpactDashboardProps) {
  return (
    <section className="py-24 px-6">
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
            Research Impact
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Quantifiable outcomes from experiments and deployments
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
          {metrics.map((metric, index) => {
            const isLarge = metric.size === "large";
            const isMedium = metric.size === "medium";

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800",
                  "bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950",
                  "p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                  isLarge && "md:col-span-2 lg:col-span-2 md:row-span-2",
                  isMedium && "md:col-span-2 lg:col-span-2"
                )}
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    {metric.icon && (
                      <div className="text-3xl mb-3">{metric.icon}</div>
                    )}
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                      {metric.label}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="my-4">
                    <div className="flex items-baseline gap-2">
                      <h3
                        className={cn(
                          "font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                          isLarge ? "text-6xl" : "text-4xl"
                        )}
                      >
                        {metric.value}
                      </h3>
                      {metric.trend && (
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            metric.trend === "up" && "text-emerald-500",
                            metric.trend === "down" && "text-red-500",
                            metric.trend === "neutral" && "text-neutral-500"
                          )}
                        >
                          {metric.trend === "up" && "↑"}
                          {metric.trend === "down" && "↓"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-neutral-600 dark:text-neutral-400 leading-relaxed",
                      isLarge ? "text-base" : "text-sm"
                    )}
                  >
                    {metric.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            Metrics derived from {" "}
            <span className="font-semibold text-foreground">production deployments</span>,{" "}
            <span className="font-semibold text-foreground">large-scale experiments</span>, and{" "}
            <span className="font-semibold text-foreground">peer-reviewed publications</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
