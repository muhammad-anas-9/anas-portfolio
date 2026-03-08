import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { resumeData } from "../data";
import { ArrowDown, Mail, Terminal, Database, BarChart3, PieChart } from "lucide-react";

const ROLES = [
  "Data Analyst",
  "BI Developer",
  "Analytics Engineer",
  "M.Sc. AI Student",
];

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === current) {
      // Pause at full word then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timeout = setTimeout(() => {
        setTypedText(isDeleting
          ? current.substring(0, typedText.length - 1)
          : current.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* Vibrant Tech Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 dark:via-slate-950/50 dark:to-slate-950 pointer-events-none" />

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
        <motion.div
          animate={{ 
            y: [0, -20, 0], 
            rotateX: [0, 10, 0],
            rotateY: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-lg hidden sm:block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Database className="w-8 h-8 text-cyan-500" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 30, 0], 
            rotateX: [0, -15, 0],
            rotateY: [0, -25, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-10 md:right-32 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-lg hidden sm:block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <BarChart3 className="w-10 h-10 text-purple-500" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -25, 0], 
            rotateX: [0, 20, 0],
            rotateY: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-lg hidden sm:block"
          style={{ transformStyle: "preserve-3d" }}
        >
          <PieChart className="w-6 h-6 text-pink-500" />
        </motion.div>
      </div>

      <div className="z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-mono bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full shadow-sm">
              <Terminal className="w-4 h-4" />
              <span>{resumeData.basics.location}</span>
            </div>
            
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl font-sans">
              {resumeData.basics.name}
            </h1>
            
            <h3 className="mb-6 text-xl font-light text-slate-700 dark:text-slate-300 sm:text-2xl md:text-3xl font-mono h-10 flex items-center justify-center lg:justify-start">
              <span className="vibrant-gradient-text font-bold mr-3">{">"}</span>
              <span className="vibrant-gradient-text font-medium">{typedText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-3 h-8 ml-1 bg-cyan-500"
              />
            </h3>
            
            <div className="max-w-2xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-sans glass-panel p-4 sm:p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">{resumeData.basics.summary}</span>
            </div>

            <div className="flex flex-col items-center justify-center lg:justify-start gap-4 sm:flex-row">
              <button
                onClick={() => handleScroll("experience")}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition-all vibrant-gradient-bg rounded-full hover:scale-105 active:scale-95"
              >
                View Experience
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all border border-slate-300 dark:border-white/15 rounded-full hover:bg-slate-100 dark:hover:bg-white/8 hover:text-slate-900 dark:hover:text-white hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full relative"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outer perspective shell for 3D rings — desktop only to prevent mobile overflow */}
            <div className="relative" style={{ perspective: "1200px" }}>

              {/* Pulsing aura glow — hidden on mobile */}
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full pointer-events-none hidden sm:block"
                style={{ inset: "-30%", background: "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)", filter: "blur(30px)" }}
              />

              {/* Orbital ring 1 — equatorial — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-14%", transformStyle: "preserve-3d", transform: "rotateX(72deg)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full"
                  style={{ border: "2px solid rgba(6,182,212,0.7)", boxShadow: "0 0 18px rgba(6,182,212,0.3), inset 0 0 18px rgba(6,182,212,0.08)" }}
                />
              </div>

              {/* Orbital ring 2 — inclined — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-22%", transformStyle: "preserve-3d", transform: "rotateX(55deg) rotateY(42deg)" }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full"
                  style={{ border: "1.5px solid rgba(168,85,247,0.55)", boxShadow: "0 0 12px rgba(168,85,247,0.2)" }}
                />
              </div>

              {/* Orbital ring 3 — polar — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-30%", transformStyle: "preserve-3d", transform: "rotateY(70deg) rotateX(12deg)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full"
                  style={{ border: "1px solid rgba(236,72,153,0.45)" }}
                />
              </div>

              {/* Orbiting tech badge 1 — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-14%", transformStyle: "preserve-3d", transform: "rotateX(72deg)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full relative"
                >
                  <div className="absolute" style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotateX(-72deg)" }}>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-cyan-100 dark:bg-cyan-900/80 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/50 whitespace-nowrap shadow-lg backdrop-blur-sm">Power BI</span>
                  </div>
                </motion.div>
              </div>

              {/* Orbiting tech badge 2 — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-22%", transformStyle: "preserve-3d", transform: "rotateX(55deg) rotateY(42deg)" }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full relative"
                >
                  <div className="absolute" style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotateX(-55deg) rotateY(-42deg)" }}>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-purple-100 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/50 whitespace-nowrap shadow-lg backdrop-blur-sm">Python</span>
                  </div>
                </motion.div>
              </div>

              {/* Orbiting tech badge 3 — hidden on mobile */}
              <div
                className="absolute pointer-events-none hidden sm:block"
                style={{ inset: "-30%", transformStyle: "preserve-3d", transform: "rotateY(70deg) rotateX(12deg)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full relative"
                >
                  <div className="absolute" style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotateY(-70deg) rotateX(-12deg)" }}>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-pink-100 dark:bg-pink-900/80 text-pink-700 dark:text-pink-300 border border-pink-300 dark:border-pink-500/50 whitespace-nowrap shadow-lg backdrop-blur-sm">BigQuery</span>
                  </div>
                </motion.div>
              </div>

              {/* Profile photo */}
              <motion.div
                className="relative z-10 w-52 h-52 sm:w-72 sm:h-72 lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700/60 backdrop-blur-sm group shadow-2xl"
                whileHover={{ rotateY: 12, rotateX: -8, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{ transformStyle: "preserve-3d", backgroundColor: "#0f172a" }}
              >
                {/* Zoom wrapper crops transparent PNG corners */}
                <div className="w-full h-full" style={{ transform: "scale(1.38)", transformOrigin: "center center" }}>
                  <img
                    src="/profile.png"
                    alt={resumeData.basics.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center center" }}
                  />
                </div>
                {/* Holographic scanline overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6,182,212,0.04) 3px, rgba(6,182,212,0.04) 4px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-transparent to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
