"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const handleScrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo/Info */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-white tracking-wide">
              {profile.fullName}
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">
              {profile.title}
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex space-x-6 text-sm text-zinc-400 font-medium">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all shadow-lg active:scale-95 duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-900 my-8" />

        {/* Copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-semibold">
          <div>
            &copy; {new Date().getFullYear()} Srikar Jakkena. All rights reserved.
          </div>
          <div className="flex items-center space-x-1.5 font-mono">
            <span>Built with</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white hover:underline transition-colors"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
