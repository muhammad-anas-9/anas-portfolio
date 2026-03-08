import React, { useState } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FolderGit2, Database, TrendingUp, Zap, Coffee, Car, BarChart2, ArrowUpRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { TechBadge } from './TechBadge';

type Project = (typeof resumeData.projects)[number];

const getProjectIcon = (title: string) => {
  if (title.includes('End-to-End')) return <Database className="w-7 h-7" />;
  if (title.includes('Marketing')) return <TrendingUp className="w-7 h-7" />;
  if (title.includes('Big Data')) return <Zap className="w-7 h-7" />;
  if (title.includes('Coffee')) return <Coffee className="w-7 h-7" />;
  if (title.includes('Electric')) return <Car className="w-7 h-7" />;
  if (title.includes('Leads')) return <BarChart2 className="w-7 h-7" />;
  return <FolderGit2 className="w-7 h-7" />;
};

const projectColors = [
  {
    accent: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-500/25",
    glow: "rgba(6,182,212,0.07)",
    tagClass: "border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/5",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    bar: "from-cyan-400 to-purple-500",
  },
  {
    accent: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-500/25",
    glow: "rgba(168,85,247,0.07)",
    tagClass: "border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/5",
    iconBg: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
    bar: "from-purple-400 to-pink-500",
  },
  {
    accent: "text-pink-600 dark:text-pink-400",
    border: "border-pink-200 dark:border-pink-500/25",
    glow: "rgba(236,72,153,0.07)",
    tagClass: "border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/5",
    iconBg: "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400",
    bar: "from-pink-400 to-orange-400",
  },
  {
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-500/25",
    glow: "rgba(16,185,129,0.07)",
    tagClass: "border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/5",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    bar: "from-emerald-400 to-cyan-400",
  },
  {
    accent: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-500/25",
    glow: "rgba(245,158,11,0.07)",
    tagClass: "border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/5",
    iconBg: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    bar: "from-amber-400 to-orange-500",
  },
  {
    accent: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/25",
    glow: "rgba(59,130,246,0.07)",
    tagClass: "border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/5",
    iconBg: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
    bar: "from-blue-400 to-purple-500",
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!resumeData.projects || resumeData.projects.length === 0) return null;

  const openModal = (project: Project, index: number) => {
    setSelectedProject(project);
    setSelectedColorIndex(index);
  };

  return (
    <>
      <section
        id="projects"
        className="relative py-24 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-3 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans text-center">
            Featured Projects
          </h2>
          <p className="mb-16 text-center text-slate-500 dark:text-slate-500 font-mono text-xs tracking-widest uppercase">
            Click any card to explore details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((project, index) => {
              const c = projectColors[index % projectColors.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onClick={() => openModal(project, index)}
                  className={`cursor-pointer group relative rounded-3xl glass-panel border ${c.border} overflow-hidden flex flex-col`}
                >
                  {/* Top accent bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${c.bar} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 70% 60% at 0% 0%, ${c.glow}, transparent)`,
                    }}
                  />

                  {/* Screenshot thumbnail */}
                  {"image" in project && (project as { image?: string }).image && (
                    <div className="w-full h-40 overflow-hidden bg-slate-100 dark:bg-slate-900 shrink-0">
                      <img
                        src={(project as { image: string }).image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-2xl ${c.iconBg} shrink-0 shadow-sm`}>
                        {getProjectIcon(project.title)}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans leading-snug pt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short description */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                      {project.bullets[0]}
                    </p>

                    {/* Tech preview chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies?.slice(0, 4).map((tech, i) => (
                        <TechBadge key={i} tech={tech} tagClass={c.tagClass} />
                      ))}
                      {(project.technologies?.length ?? 0) > 4 && (
                        <span className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-500">
                          +{(project.technologies?.length ?? 0) - 4} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-1.5 text-xs font-semibold ${c.accent} mt-auto`}>
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <ProjectModal
        project={selectedProject}
        colorIndex={selectedColorIndex}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
