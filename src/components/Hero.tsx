"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/UI/SocialIcons";
import { profile } from "@/data/profile";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute top-[20%] left-[8%] w-[35vw] h-[35vw] bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>{profile.statusBadge}</span>
            </motion.div>

            {/* Main Headings */}
            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
              >
                {profile.headline}
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight"
              >
                {profile.title}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base font-semibold tracking-wider text-zinc-400 uppercase font-mono pt-1"
              >
                {profile.subheadline}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
            >
              {profile.description}
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3.5 w-full sm:w-auto pt-2"
            >
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 duration-200 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 rounded-xl transition-all active:scale-95 duration-200"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 rounded-xl transition-all active:scale-95 duration-200"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Terminal-Style Card Visual */}
          <motion.div
            className="lg:col-span-5 relative w-full mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Outline Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 pointer-events-none animate-pulse-glow" />

            {/* Terminal Card */}
            <div className="relative w-full glass-card rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs text-zinc-300">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/50">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">
                  aiml_environment.sh
                </div>
                <div className="w-4" />
              </div>

              {/* Terminal Logs Body */}
              <div className="p-5 space-y-3 min-h-[270px] bg-zinc-950/80 scanline">
                <div className="flex space-x-2">
                  <span className="text-zinc-500 font-bold">$</span>
                  <span className="text-white">source activate aiml-env</span>
                </div>
                <div className="text-zinc-500 text-[11px]">
                  [INFO] Initializing Python 3.10 runtime &amp; ML packages...
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-zinc-400 py-1.5 bg-zinc-900/30 px-3 rounded-lg border border-zinc-900/60 text-[11px]">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Groq &amp; Whisper v3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>LangChain &amp; RAG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>TensorFlow &amp; CNNs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>ChromaDB Vector DB</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-1">
                  <span className="text-zinc-500 font-bold">$</span>
                  <span className="text-white">python verify_systems.py</span>
                </div>

                <div className="space-y-1.5 pt-0.5 text-[11px]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">
                      AutoChat-AI: <strong className="text-white">Active (Groq &amp; Gemini)</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">
                      RAG Q&amp;A Chatbot: <strong className="text-white">Active (ChromaDB)</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">
                      Brain Tumor AI: <strong className="text-white">96.0% Acc (BraTS)</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-zinc-300">
                      SignBridge AI: <strong className="text-white">92.0% Acc (Real-Time)</strong>
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2 items-center text-[11px]">
                  <span className="text-zinc-500 font-bold">$</span>
                  <span className="text-blue-400 flex items-center">
                    listening_for_opportunities...
                    <span className="ml-1 w-1.5 h-3.5 bg-blue-500 animate-pulse" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
