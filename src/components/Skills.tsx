"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Database, Eye, Terminal, Sparkles, Compass } from "lucide-react";
import { skillCategories } from "@/data/skills";

const getCategoryIcon = (title: string) => {
  switch (title) {
    case "Core Programming":
      return Code;
    case "Machine Learning & Data":
      return BrainCircuit;
    case "Computer Vision & Deep Learning":
      return Eye;
    case "Generative AI":
      return Sparkles;
    case "Development & Tools":
      return Terminal;
    case "Currently Exploring":
      return Compass;
    default:
      return Database;
  }
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-blue-500" />
            Skills &amp; Technologies
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.title);
            const isExploring = cat.isExploring;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                className={`glass-card p-6 rounded-2xl border flex flex-col h-full transition-all duration-300 ${
                  isExploring
                    ? "border-blue-500/30 bg-blue-950/10 hover:border-blue-500/50"
                    : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-900">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg border ${
                        isExploring
                          ? "bg-blue-500/15 border-blue-500/30 text-blue-400"
                          : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-zinc-100">{cat.title}</h3>
                  </div>

                  {isExploring && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono font-semibold text-blue-400">
                      In Progress
                    </span>
                  )}
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 cursor-default ${
                        isExploring
                          ? "bg-zinc-900/90 border-blue-900/40 text-blue-200 hover:border-blue-500/40 hover:text-white"
                          : "bg-zinc-900 border-zinc-800/80 text-zinc-300 hover:text-white hover:border-blue-500/40 hover:bg-zinc-800/50"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
