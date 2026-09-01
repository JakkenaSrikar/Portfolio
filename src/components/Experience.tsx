"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-500" />
            Experience
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-3 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Dot Indicator */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-500 transition-colors duration-300">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
              </span>

              {/* Experience Card */}
              <div className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono mt-1 md:mt-0">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Accomplishments Bullet Points */}
                <ul className="mt-5 space-y-2.5 text-zinc-300 text-sm list-none">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2.5 mt-1 font-bold font-mono">›</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
