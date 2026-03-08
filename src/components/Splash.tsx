import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 20;
    let current = 0;

    const timer = setInterval(() => {
      current += interval;
      setProgress(Math.min((current / duration) * 100, 100));

      if (current >= duration) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#03030e] transition-colors duration-300"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex items-center justify-center w-24 h-24 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Monogram */}
          <div className="absolute inset-0 border border-slate-300 dark:border-slate-700/50 rounded-full" />
          <motion.div
            className="absolute inset-0 border-t-2 border-r-2 border-cyan-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 border-b-2 border-l-2 border-purple-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
          <span className="text-3xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-serif">
            MA
          </span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-xs tracking-widest text-slate-500 dark:text-slate-500 uppercase font-mono">
          Initializing...
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
