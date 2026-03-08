import React from "react";
import { motion } from "motion/react";
import { resumeData } from "../data";
import { Code2, Globe, BarChart3, Database, Layers, BrainCircuit } from "lucide-react";
import { TiltCard } from "./TiltCard";

const categoryMeta: Record<string, { icon: React.ReactNode; lightColor: string; darkColor: string; glow: string }> = {
  "Business Intelligence Tools": {
    icon: <BarChart3 className="w-7 h-7" />,
    lightColor: "text-cyan-700",
    darkColor: "dark:text-cyan-400",
    glow: "rgba(6,182,212,0.15)",
  },
  "Programming Languages": {
    icon: <Code2 className="w-7 h-7" />,
    lightColor: "text-purple-700",
    darkColor: "dark:text-purple-400",
    glow: "rgba(168,85,247,0.15)",
  },
  Database: {
    icon: <Database className="w-7 h-7" />,
    lightColor: "text-blue-700",
    darkColor: "dark:text-blue-400",
    glow: "rgba(59,130,246,0.15)",
  },
  Software: {
    icon: <Layers className="w-7 h-7" />,
    lightColor: "text-pink-700",
    darkColor: "dark:text-pink-400",
    glow: "rgba(236,72,153,0.15)",
  },
  "Core Competencies": {
    icon: <BrainCircuit className="w-7 h-7" />,
    lightColor: "text-emerald-700",
    darkColor: "dark:text-emerald-400",
    glow: "rgba(52,211,153,0.15)",
  },
  Languages: {
    icon: <Globe className="w-7 h-7" />,
    lightColor: "text-amber-700",
    darkColor: "dark:text-amber-400",
    glow: "rgba(251,191,36,0.15)",
  },
};

const tagColors = [
  "border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/5 hover:bg-cyan-100 dark:hover:bg-cyan-500/15",
  "border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/5 hover:bg-purple-100 dark:hover:bg-purple-500/15",
  "border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/5 hover:bg-pink-100 dark:hover:bg-pink-500/15",
  "border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/5 hover:bg-blue-100 dark:hover:bg-blue-500/15",
  "border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/5 hover:bg-emerald-100 dark:hover:bg-emerald-500/15",
  "border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/5 hover:bg-amber-100 dark:hover:bg-amber-500/15",
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-8 md:mb-16 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans text-center">
          Skills &amp; Languages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skills.map((skillGroup, index) => {
            const meta = categoryMeta[skillGroup.category] ?? {
              icon: <Code2 className="w-7 h-7" />,
              lightColor: "text-cyan-700",
              darkColor: "dark:text-cyan-400",
              glow: "rgba(6,182,212,0.15)",
            };
            const tagClass = tagColors[index % tagColors.length];
            const iconColor = `${meta.lightColor} ${meta.darkColor}`;
            const headingColor = `${meta.lightColor} ${meta.darkColor}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard className="p-7 rounded-3xl glass-panel glass-panel-hover group h-full flex flex-col relative overflow-hidden">
                  {/* Category glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 50% 50% at 10% 10%, ${meta.glow}, transparent)`,
                    }}
                  />

                  <div className="flex items-center gap-4 mb-7 relative z-10">
                    <div
                      className={`p-3.5 rounded-2xl ${iconColor} transition-all duration-300 shadow-lg`}
                      style={{ background: meta.glow.replace('0.15', '0.1') }}
                    >
                      {meta.icon}
                    </div>
                    <h3 className={`text-lg font-bold font-sans tracking-tight ${headingColor}`}>
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {skillGroup.items.map((item, i) => (
                      <motion.span
                        key={i}
                        className={`holo-tag px-3. py-1.5 text-sm font-medium font-mono rounded-lg border ${tagClass} transition-all duration-200 cursor-default`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: i * 0.06 }}
                        whileHover={{ y: -2, scale: 1.04 }}
                      >
                        {item}
                      </motion.span>
                    ))}
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
