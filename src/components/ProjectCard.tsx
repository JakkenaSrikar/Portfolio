"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/UI/SocialIcons";
import { ProjectDetail } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-zinc-800/80 bg-zinc-950/40 overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
      {/* Project Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-900">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={project.slug === "rag-document-qa"}
        />
        {/* Category Overlay Tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur-sm border border-zinc-800 text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono">
          {project.category}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400 leading-snug">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mt-2.5 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Verified Metric Badge */}
        {project.highlight && (
          <div className="mt-4 flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/60 text-xs font-semibold text-green-400">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{project.highlight}</span>
          </div>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions Button Row */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-zinc-900/80">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md hover:shadow-blue-500/20 active:scale-95 group/btn"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 rounded-xl transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
