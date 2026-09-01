"use client";

import { GraduationCap, Calendar, Award, MapPin, CheckCircle2, Award as CertificateIcon } from "lucide-react";
import { profile } from "@/data/profile";

interface EducationItem {
  institution: string;
  degree: string;
  major?: string;
  period: string;
  location: string;
  grade: string;
  isPrimary?: boolean;
}

const educationHistory: EducationItem[] = [
  {
    institution: "Kakatiya Institute of Technology & Sciences (KITS)",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science – Artificial Intelligence & Machine Learning",
    period: "2022 – 2026 (Graduating)",
    location: "Warangal, Telangana, India",
    grade: "CGPA: 8.14 / 10.0",
    isPrimary: true,
  },
  {
    institution: "Alphores Junior College",
    degree: "Intermediate Public Examination (IPE)",
    major: "MPC (Mathematics, Physics, Chemistry)",
    period: "2020 – 2022",
    location: "Karimnagar, Telangana, India",
    grade: "Percentage: 90.9%",
  },
  {
    institution: "Sri Kakatiya High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2019 – 2020",
    location: "Karimnagar, Telangana, India",
    grade: "GPA: 10.0 / 10.0",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            Education &amp; Certifications
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Education Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Academic Background
            </h3>

            <div className="relative border-l-2 border-zinc-800 ml-4 space-y-6">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative pl-8 group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-500 transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300" />
                  </span>

                  {/* Card */}
                  <div className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        {edu.major && (
                          <div className="text-xs font-semibold text-blue-400 mt-0.5">
                            {edu.major}
                          </div>
                        )}
                        <div className="text-sm font-medium text-zinc-300 mt-1">
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500 gap-y-1">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {edu.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          {edu.location}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[11px] mt-1 w-fit">
                          <Award className="w-3 h-3 mr-1" />
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <CertificateIcon className="w-5 h-5 text-blue-400" />
              Certifications
            </h3>

            <div className="space-y-4">
              {profile.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-zinc-800 bg-zinc-950/30 flex items-start gap-4 hover:border-blue-500/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-medium text-zinc-400 mt-1">
                      {cert.issuer}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                      Issued {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Focus Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                Core Domains of Focus
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Deep Learning",
                  "Computer Vision",
                  "Generative AI & RAG",
                  "Model Interpretability (Grad-CAM)",
                  "End-to-End ML Deployment"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
