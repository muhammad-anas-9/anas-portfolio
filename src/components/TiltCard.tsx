import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", intensity = 12 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  // Shadow depth shift with tilt  
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    setGlarePos({ x: (mouseX / rect.width) * 100, y: (mouseY / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        filter: isHovered
          ? `drop-shadow(${shadowX.get()}px ${shadowY.get()}px 24px rgba(6,182,212,0.18))`
          : undefined,
      }}
      className={`relative perspective-1000 ${className}`}
    >
      {/* Lifted content layer */}
      <div
        style={{
          transform: isHovered ? "translateZ(28px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
          transition: "transform 0.35s ease-out",
        }}
        className="w-full h-full"
      >
        {children}
      </div>

      {/* Holographic glare shine */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit] overflow-hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          borderRadius: "inherit",
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 65%)`,
        }}
      />

      {/* Edge rim light */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          borderRadius: "inherit",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      />
    </motion.div>
  );
};
