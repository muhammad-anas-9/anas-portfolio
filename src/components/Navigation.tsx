import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Home, Briefcase, FolderGit2, GraduationCap, Code2, Award, Mail } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "certifications", icon: Award, label: "Awards" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="flex md:flex-col gap-2 p-2 rounded-full glass-panel shadow-xl dark:shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative p-3 rounded-full transition-all group ${
                isActive
                  ? "text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 w-5 h-5" />

              {/* Tooltip for desktop */}
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block whitespace-nowrap border border-slate-700">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};
