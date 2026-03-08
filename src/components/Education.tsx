import React from "react";
import { motion } from "motion/react";
import { resumeData } from "../data";
import { Calendar } from "lucide-react";
import { TiltCard } from "./TiltCard";

const uniLogos: Record<string, string> = {
  "Brandenburgische Technische Universität Cottbus": "/uni-btu.svg",
  "Bahria University Karachi": "/uni-bahria.jpg",
};

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 max-w-5xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans text-center">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => {
            const logoSrc = uniLogos[edu.institution];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full rounded-3xl glass-panel glass-panel-hover group relative overflow-hidden">
                <div className="flex flex-col h-full p-8">
                {/* Vibrant hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-start gap-4 mb-6 relative z-10 flex-1">
                  {/* University logo */}
                  <div className="shrink-0 rounded-2xl bg-white shadow-md p-2 w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-serif italic">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-mono mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/50 relative z-10">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  {edu.dates}
                </div>
                </div>
              </TiltCard>
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
