"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Target, Cpu } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      label: "Education",
      value: profile.educationShort.degree,
      subValue: profile.educationShort.major,
    },
    {
      icon: Calendar,
      label: "Graduation",
      value: profile.educationShort.gradYear,
      subValue: "Expected",
    },
    {
      icon: Award,
      label: "CGPA",
      value: profile.educationShort.cgpa,
      subValue: "Out of 10.0",
    },
    {
      icon: Target,
      label: "Focus",
      value: "AI/ML • CV",
      subValue: "GenAI • Python",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center gap-3">
            <Cpu className="w-8 h-8 text-blue-500" />
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Biography Content */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl font-bold text-zinc-100">
              Building End-to-End AI/ML Applications
            </h3>
            
            <p className="text-zinc-300 text-base leading-relaxed">
              I am a B.Tech Computer Science student specializing in Artificial Intelligence &amp; Machine Learning at Kakatiya Institute of Technology &amp; Sciences (KITS), graduating in 2026. My core technical strengths lie across Python development, Deep Learning, Computer Vision, and Generative AI.
            </p>

            <p className="text-zinc-300 text-base leading-relaxed">
              I approach AI with a practical engineering mindset: rather than training models in isolation, I focus on building complete, reliable systems—from custom preprocessing pipelines and architecture design (CNNs, U-Net, MobileNetV2) to Retrieval-Augmented Generation (RAG) and intuitive user interfaces.
            </p>
          </div>

          {/* Metric Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-zinc-800/80 flex flex-col justify-between min-h-[135px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                      {card.label}
                    </span>
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="mt-3">
                    <div className="text-lg font-bold text-white leading-tight">
                      {card.value}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-medium">
                      {card.subValue}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
