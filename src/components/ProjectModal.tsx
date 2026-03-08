import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ZoomIn, ExternalLink, ArrowLeft, Play, ImageIcon } from "lucide-react";
import { TechBadge } from "./TechBadge";

type Project = {
  title: string;
  description?: string;
  outcomes?: string[];
  image?: string;
  video?: string;
  dashboardUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type Props = {
  project: Project | null;
  colorIndex: number;
  onClose: () => void;
};

const modalColors = [
  {
    accent: "text-cyan-600 dark:text-cyan-400",
    tagClass:
      "border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/5",
    dot: "bg-cyan-500",
    glow: "from-cyan-500/10 via-transparent",
    bar: "bg-gradient-to-r from-cyan-400 to-purple-500",
  },
  {
    accent: "text-purple-600 dark:text-purple-400",
    tagClass:
      "border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/5",
    dot: "bg-purple-500",
    glow: "from-purple-500/10 via-transparent",
    bar: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    accent: "text-pink-600 dark:text-pink-400",
    tagClass:
      "border-pink-300 dark:border-pink-500/30 text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/5",
    dot: "bg-pink-500",
    glow: "from-pink-500/10 via-transparent",
    bar: "bg-gradient-to-r from-pink-400 to-orange-400",
  },
  {
    accent: "text-emerald-600 dark:text-emerald-400",
    tagClass:
      "border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/5",
    dot: "bg-emerald-500",
    glow: "from-emerald-500/10 via-transparent",
    bar: "bg-gradient-to-r from-emerald-400 to-cyan-400",
  },
  {
    accent: "text-amber-600 dark:text-amber-400",
    tagClass:
      "border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/5",
    dot: "bg-amber-500",
    glow: "from-amber-500/10 via-transparent",
    bar: "bg-gradient-to-r from-amber-400 to-orange-500",
  },
  {
    accent: "text-blue-600 dark:text-blue-400",
    tagClass:
      "border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/5",
    dot: "bg-blue-500",
    glow: "from-blue-500/10 via-transparent",
    bar: "bg-gradient-to-r from-blue-400 to-purple-500",
  },
];

export const ProjectModal: React.FC<Props> = ({ project, colorIndex, onClose }) => {
  const c = modalColors[colorIndex % modalColors.length];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Reset media tab when project changes
  React.useEffect(() => { setShowVideo(false); }, [project?.title]);

  // ESC to close modal or lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, lightboxOpen]);

  // Lock body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* ── Modal panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed z-50 inset-3 md:inset-8 lg:inset-12 xl:inset-20 glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Accent top bar */}
            <div className={`h-1 w-full ${c.bar} shrink-0`} />

            {/* ── Header row: Back + Close ── */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-slate-200 dark:border-white/8 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-700 dark:text-white text-xs font-semibold"
                aria-label="Back to projects"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-slate-700 dark:text-white" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 overscroll-contain">

              {/* ── Media tabs (Screenshot / Demo Video) ── */}
              {(project.image || project.video) && (
                <div className="shrink-0">
                  {/* Tab switcher — only shown when both exist */}
                  {project.image && project.video && (
                    <div className="flex border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
                      <button
                        onClick={() => setShowVideo(false)}
                        className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold transition-colors ${
                          !showVideo
                            ? `${c.accent} border-b-2 border-current`
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        Screenshot
                      </button>
                      <button
                        onClick={() => setShowVideo(true)}
                        className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold transition-colors ${
                          showVideo
                            ? `${c.accent} border-b-2 border-current`
                            : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                      >
                        <Play className="w-3.5 h-3.5" />
                        Demo Video
                      </button>
                    </div>
                  )}

                  {/* Video player */}
                  {showVideo && project.video ? (
                    <div className="w-full bg-black" style={{ aspectRatio: "16/9", maxHeight: "42vh" }}>
                      <iframe
                        key={project.video}
                        src={`${project.video}?rel=0&modestbranding=1&autoplay=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : project.image ? (
                    /* Screenshot with zoom-to-lightbox */
                    <div
                      className="w-full h-52 md:h-72 lg:h-80 overflow-hidden bg-slate-100 dark:bg-slate-900 relative cursor-zoom-in group/img"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-b ${c.glow} to-transparent z-10 pointer-events-none`} />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors duration-300 z-20 flex items-center justify-center">
                        <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              )}

              <div className="p-7 md:p-10">

                {/* ── Title ── */}
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className={`text-2xl md:text-3xl font-extrabold font-sans leading-tight mb-4 ${c.accent}`}
                >
                  {project.title}
                </motion.h2>

                {/* ── Description ── */}
                {project.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 max-w-3xl"
                  >
                    {project.description}
                  </motion.p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                  {/* ── Key Outcomes ── */}
                  {project.outcomes && project.outcomes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.16 }}
                    >
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Key Outcomes
                      </p>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.18 + i * 0.06 }}
                            className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${c.accent}`}
                            />
                            {outcome}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* ── Tech Stack ── */}
                  {project.technologies && project.technologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.16 }}
                    >
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.04 }}
                          >
                            <TechBadge tech={tech} tagClass={c.tagClass} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* ── Links ── */}
                {(project.githubUrl || project.liveUrl || (project.dashboardUrl && !project.video)) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-white/8"
                  >
                    {project.dashboardUrl && !project.video && (
                      <a
                        href={project.dashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold vibrant-gradient-bg text-white hover:opacity-90 transition-opacity shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Full Dashboard
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-white/10 text-white dark:text-white hover:bg-slate-700 dark:hover:bg-white/20 transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold vibrant-gradient-bg text-white hover:opacity-90 transition-opacity shadow-lg"
                      >
                        View Live →
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
          {/* ── Lightbox ── */}
          <AnimatePresence>
            {lightboxOpen && project.image && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setLightboxOpen(false)}
                className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
              >
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <motion.img
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  src={project.image}
                  alt={project.title}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain cursor-default"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};
