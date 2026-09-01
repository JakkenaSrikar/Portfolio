"use client";

import { useState } from "react";
import { Mail, MapPin, FileText, Copy, Check, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/UI/SocialIcons";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-zinc-950/20">
      {/* Background Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/10 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let's Build Something Useful
            </h2>
            <div className="h-1 w-20 bg-blue-500 mt-1 rounded-full" />
          </div>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Interested in AI, machine learning, computer vision, or generative AI projects? Feel free to connect.
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center text-xs font-mono text-zinc-400">
            <span className="flex items-center bg-zinc-900/60 px-3.5 py-1.5 rounded-full border border-zinc-800">
              <MapPin className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
              {profile.location}
            </span>
          </div>

          {/* Email Copy Card */}
          <div className="glass-card p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5 text-left">
              <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <div>
                <div className="text-[11px] font-semibold text-zinc-500 uppercase font-mono tracking-wider">
                  Direct Email
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-semibold font-mono text-white hover:text-blue-400 transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl transition-all border bg-blue-600 border-blue-500 text-white hover:bg-blue-500 active:scale-95 duration-200 flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1.5" />
                  Copy Address
                </>
              )}
            </button>
          </div>

          {/* Social Links Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/20 flex flex-col items-center text-center justify-center group"
            >
              <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold text-zinc-300 group-hover:text-white mt-2">GitHub</span>
              <span className="text-[11px] text-zinc-500 font-mono mt-0.5">@JakkenaSrikar</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/20 flex flex-col items-center text-center justify-center group"
            >
              <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold text-zinc-300 group-hover:text-white mt-2">LinkedIn</span>
              <span className="text-[11px] text-zinc-500 font-mono mt-0.5">jakkena-srikar</span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950/20 flex flex-col items-center text-center justify-center group"
            >
              <FileText className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold text-zinc-300 group-hover:text-white mt-2">Resume</span>
              <span className="text-[11px] text-zinc-500 font-mono mt-0.5">Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
