/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Splash } from "./components/Splash";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ThemeToggle } from "./components/ThemeToggle";

const SectionDivider: React.FC = () => (
  <div className="flex items-center justify-center py-2 px-6 max-w-5xl mx-auto" aria-hidden>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    <div className="mx-4 flex gap-1.5">
      <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
      <span className="w-1 h-1 rounded-full bg-cyan-500/40" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)",
        }}
      />

      {/* Custom cursor glow */}
      <div
        className="fixed z-[55] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          transition: "left 0.12s ease-out, top 0.12s ease-out",
        }}
      />
      <div
        className="fixed z-[56] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 10,
          height: 10,
          background: "rgba(6,182,212,0.9)",
          boxShadow: "0 0 10px rgba(6,182,212,0.8)",
          transition: "left 0.04s linear, top 0.04s linear",
        }}
      />

      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      <AnimatedBackground />

      {!showSplash && (
        <main className="relative z-10 pb-24 md:pb-0">
          <ThemeToggle />
          <Navigation />
          <Hero />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <Contact />

          {/* Back to top */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={scrollToTop}
                aria-label="Back to top"
                className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 p-3 rounded-full vibrant-gradient-bg text-white shadow-lg hover:scale-110 active:scale-95 transition-transform"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          <footer className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm font-mono border-t border-slate-200 dark:border-white/5">
            <p>
              © {new Date().getFullYear()} Muhammad Anas Shakeel. All rights reserved.
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
