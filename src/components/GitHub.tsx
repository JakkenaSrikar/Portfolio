"use client";

import { useState, useEffect } from "react";
import { Folder, Star, GitFork, Users, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/UI/SocialIcons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

interface GithubUserData {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

export default function GitHub() {
  const [userData, setUserData] = useState<GithubUserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const cachedData = sessionStorage.getItem("github_profile_data");
        if (cachedData) {
          setUserData(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const res = await fetch("https://api.github.com/users/JakkenaSrikar");
        if (res.ok) {
          const data = await res.json();
          const parsedData = {
            public_repos: data.public_repos ?? 15,
            followers: data.followers ?? 5,
            avatar_url: data.avatar_url || "https://github.com/JakkenaSrikar.png",
          };
          setUserData(parsedData);
          sessionStorage.setItem("github_profile_data", JSON.stringify(parsedData));
        }
      } catch (err) {
        console.error("Error fetching GitHub profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-3">
            <GithubIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Building in Public
            </h2>
          </div>
          <p className="text-zinc-400 mt-2 font-medium">
            Open-source repositories, machine learning models, and active codebases.
          </p>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: GitHub Profile Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40">
              <div className="flex items-center space-x-4">
                <img
                  src={userData?.avatar_url || "https://github.com/JakkenaSrikar.png"}
                  alt="Srikar's GitHub Avatar"
                  className="w-16 h-16 rounded-full border-2 border-zinc-800"
                  onError={(e) => {
                    e.currentTarget.src = "https://github.com/identicons/JakkenaSrikar.png";
                  }}
                />
                <div>
                  <h3 className="font-bold text-lg text-white">Srikar Jakkena</h3>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 font-mono flex items-center hover:underline mt-1"
                  >
                    @JakkenaSrikar
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* GitHub Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-zinc-900">
                <div className="p-3.5 bg-zinc-900/50 rounded-xl border border-zinc-850 flex flex-col items-center justify-center text-center">
                  <Folder className="w-5 h-5 text-blue-500 mb-1" />
                  <span className="text-xl font-bold text-white">
                    {loading ? "..." : userData?.public_repos || 15}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold font-mono mt-0.5">
                    Public Repos
                  </span>
                </div>
                <div className="p-3.5 bg-zinc-900/50 rounded-xl border border-zinc-850 flex flex-col items-center justify-center text-center">
                  <Users className="w-5 h-5 text-blue-500 mb-1" />
                  <span className="text-xl font-bold text-white">
                    {loading ? "..." : userData?.followers || 5}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold font-mono mt-0.5">
                    Followers
                  </span>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-zinc-900/30 border border-zinc-900 text-xs text-zinc-400 leading-relaxed">
                Actively developing and open-sourcing machine learning pipelines, RAG implementations, and computer vision systems.
              </div>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 rounded-xl transition-all"
              >
                <GithubIcon className="w-4 h-4 mr-2 text-zinc-400" />
                Visit GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Column: Featured Repositories Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((repo) => {
                const repoName =
                  repo.slug === "whatsapp-ai-copilot"
                    ? "whatsapp-ai-copilot"
                    : repo.slug === "rag-document-qa"
                    ? "RAG-Document-QA-Chatbot"
                    : repo.slug === "brain-tumor-ai"
                    ? "brain-tumor-ai"
                    : "Sign-Language-Recognition-System";

                const repoLanguage =
                  repo.slug === "whatsapp-ai-copilot" ? "Node.js / JS" : "Python";

                return (
                  <a
                    key={repo.slug}
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-5 rounded-2xl border border-zinc-800 bg-zinc-950/40 block transition-all hover:border-blue-500/40 hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-blue-500" />
                        <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                          {repoName}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                    </div>
                    
                    <p className="text-zinc-400 text-xs mt-2.5 line-clamp-2 leading-relaxed">
                      {repo.description}
                    </p>

                    <div className="flex items-center justify-between mt-5 pt-3 border-t border-zinc-900 text-[11px] text-zinc-500 font-mono">
                      <span className="flex items-center font-semibold text-zinc-400">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5" />
                        {repoLanguage}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-green-400 font-sans font-semibold">
                        {repo.highlight}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
