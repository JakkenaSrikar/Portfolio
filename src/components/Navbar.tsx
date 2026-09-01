"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/UI/SocialIcons";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = navItems.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.replace("#", ""));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getHref = (href: string) => {
    return isHome ? href : `/${href}`;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (isHome) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={isHome ? "#home" : "/"}
              onClick={(e) => isHome && handleLinkClick(e, "#home")}
              className="text-xl font-bold tracking-wider text-white hover:text-blue-500 transition-colors"
            >
              SRIKAR JAKKENA
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => {
              const target = item.href.replace("#", "");
              const isActive = isHome && activeSection === target;
              return (
                <Link
                  key={item.label}
                  href={getHref(item.href)}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-blue-500" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-zinc-100 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 h-6" /> : <Menu className="block h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-b border-zinc-900" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-zinc-950/95 backdrop-blur-md">
          {navItems.map((item) => {
            const target = item.href.replace("#", "");
            const isActive = isHome && activeSection === target;
            return (
              <Link
                key={item.label}
                href={getHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-white hover:bg-zinc-900 ${
                  isActive ? "text-blue-500 bg-zinc-900/30" : "text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-zinc-900 px-3 flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-zinc-100 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
