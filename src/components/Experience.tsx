import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { resumeData } from "../data";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";
import { TiltCard } from "./TiltCard";

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Extract measurable bullets (containing numbers or percentages)
  const impactHighlights = resumeData.experience.flatMap((exp) =>
    exp.bullets.filter((bullet) => /\d+%?/.test(bullet)),
  );

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-8 md:mb-16 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans text-center">
          Experience
        </h2>

        {/* Impact Highlights Panel */}
        {impactHighlights.length > 0 && (
          <TiltCard className="mb-8 md:mb-16 p-6 rounded-2xl glass-panel relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-widest relative z-10">
              <Zap className="w-5 h-5 text-yellow-500" />
              Impact Highlights
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {impactHighlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </TiltCard>
        )}

        {/* Timeline */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-0">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8 relative perspective-1000"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#03030e] border-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] z-10" />

              <div
                className={`p-6 rounded-2xl transition-all cursor-pointer border relative overflow-hidden group ${
                  expandedIndex === index
                    ? "bg-white/95 dark:bg-white/5 border-cyan-400/50 dark:border-cyan-500/40 shadow-[0_8px_40px_0_rgba(6,182,212,0.10)] backdrop-blur-2xl"
                    : "glass-panel glass-panel-hover"
                }`}
                onClick={() => toggleExpand(index)}
                style={{
                  transform: expandedIndex === index ? "translateZ(20px)" : "translateZ(0)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Vibrant hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-lg font-medium text-cyan-600 dark:text-cyan-400">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/50">
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-base leading-relaxed"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 shrink-0" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-4 right-4 text-slate-400 dark:text-slate-500 z-10">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
