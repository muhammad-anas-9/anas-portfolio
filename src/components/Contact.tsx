import React from "react";
import { motion } from "motion/react";
import { resumeData } from "../data";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

// LinkedIn & GitHub SVG icons (lucide doesn't always export these cleanly)
const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Contact: React.FC = () => {
  const linkedin = resumeData.basics.links?.find((l) => l.name === "LinkedIn");
  const github = resumeData.basics.links?.find((l) => l.name === "GitHub");

  return (
      <section id="contact" className="relative py-16 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background glow orb */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-mono bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full">
          <MessageSquare className="w-3.5 h-3.5" />
          Contact
        </div>

        <h2 className="mb-4 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans">
          Get In Touch
        </h2>
        <p className="mb-12 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          Open to data analytics roles, BI projects, and AI engineering
          opportunities. Let's build something insightful together.
        </p>

        {/* Primary email CTA */}
        <motion.a
          href={`mailto:${resumeData.basics.email}`}
          className="inline-flex items-center gap-3 px-10 py-5 mb-12 font-semibold text-white rounded-full text-base vibrant-gradient-bg"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          style={{ boxShadow: "0 8px 40px rgba(6,182,212,0.35)" }}
        >
          <Send className="w-5 h-5 shrink-0" />
          <span className="text-sm sm:text-base break-all sm:break-normal">{resumeData.basics.email}</span>
        </motion.a>

        {/* Social links row */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {linkedin && (
            <motion.a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full glass-panel font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-[#0077b5]/50"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-[#0077b5]">
                <LinkedInIcon />
              </span>
              LinkedIn
            </motion.a>
          )}

          {github && (
            <motion.a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full glass-panel font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-purple-400/50"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-slate-500 dark:text-slate-300">
                <GitHubIcon />
              </span>
              GitHub
            </motion.a>
          )}

          <div className="flex items-center gap-2 px-5 py-3.5 rounded-full glass-panel text-slate-500 dark:text-slate-400 font-mono text-sm">
            <MapPin className="w-4 h-4 text-pink-400" />
            {resumeData.basics.location}
          </div>
        </div>

        {/* Divider line with glow */}
        <div className="mt-16 flex items-center gap-4 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
          <Mail className="w-4 h-4 text-slate-400 dark:text-slate-600" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
