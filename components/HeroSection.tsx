"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Overline */}
        <motion.div
          variants={fadeInUp}
          className="mb-6 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Robotics Researcher • Embodied AI & Multimodal Learning
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-6 text-balance"
        >
          Snehal S. Dikhale
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Architecting Intelligent Robots
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 text-center max-w-3xl mx-auto mb-8 text-balance leading-relaxed"
        >
          Bridging the{" "}
          <span className="font-semibold text-foreground">Sim-to-Real gap</span> for tactile perception and architecting{" "}
          <span className="font-semibold text-foreground">Vision-Language Models</span> for dexterous manipulation
        </motion.p>

        {/* Key focus areas */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {[
            { label: "Foundation Models", icon: "🧠" },
            { label: "Tactile Perception", icon: "🤖" },
            { label: "Sim-to-Real Transfer", icon: "🔄" },
          ].map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{area.icon}</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">
                {area.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#research"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Explore Research
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#publications"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg font-semibold hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
          >
            View Publications
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
