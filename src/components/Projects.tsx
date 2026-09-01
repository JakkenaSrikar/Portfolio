"use client";

import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background ambient lighting */}
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <p className="text-zinc-400 mt-2 font-medium">
            AI systems built to solve real-world problems.
          </p>
          <div className="h-1 w-20 bg-blue-500 mt-3 rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
