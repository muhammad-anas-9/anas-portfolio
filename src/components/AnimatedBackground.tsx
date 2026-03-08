import React, { useEffect, useRef, useState } from "react";

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    const FOCAL = 380;
    const SPEED_BASE = 2.2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    interface Star {
      x: number;
      y: number;
      z: number;
    }

    const stars: Star[] = [];

    const makeStar = (spreadFull = false): Star => ({
      x: (Math.random() - 0.5) * w * 2.8,
      y: (Math.random() - 0.5) * h * 2.8,
      z: spreadFull ? Math.random() * w : w,
    });

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const COUNT = w < 768 ? 200 : 400;
      stars.length = 0;
      for (let i = 0; i < COUNT; i++) stars.push(makeStar(true));
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const cx = w / 2 + mouseRef.current.x * 50;
      const cy = h / 2 + mouseRef.current.y * 50;

      // Persistent dark fill for both modes (very slight lightening for light mode)
      ctx.fillStyle = isDark
        ? "rgba(3, 3, 14, 0.20)"
        : "rgba(245, 247, 252, 0.28)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const speed = SPEED_BASE + (1 - s.z / w) * 5;
        s.z -= speed;

        if (s.z <= 1) {
          stars[i] = makeStar(false);
          continue;
        }

        const scale = FOCAL / s.z;
        const sx = cx + s.x * scale;
        const sy = cy + s.y * scale;

        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) {
          stars[i] = makeStar(false);
          continue;
        }

        const prevScale = FOCAL / (s.z + speed);
        const px = cx + s.x * prevScale;
        const py = cy + s.y * prevScale;

        const brightness = 1 - s.z / w;
        const lineW = Math.max(0.3, scale * 0.55);
        const len = Math.hypot(sx - px, sy - py);

        if (len > 0.4) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.lineWidth = lineW;
          if (isDark) {
            ctx.strokeStyle = `rgba(${80 + brightness * 130}, ${Math.round(200 * brightness)}, 255, ${brightness * 0.9})`;
          } else {
            ctx.strokeStyle = `rgba(${Math.round(130 * brightness)}, ${Math.round(50 * brightness)}, 220, ${brightness * 0.7})`;
          }
          ctx.stroke();
        }

        // Bright dot at front
        ctx.beginPath();
        ctx.arc(sx, sy, lineW * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(200, 240, 255, ${brightness})`
          : `rgba(110, 55, 210, ${brightness})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const onResize = () => init();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-[#03030e] transition-colors duration-300">
      {prefersReducedMotion ? (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
      ) : (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}
      {/* Central radial glow — subtle in light mode */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,182,212,0.04),transparent)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(6,182,212,0.07),transparent)]" />
      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 55%, rgba(248,250,252,0.5) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none dark:block" style={{ background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 55%, rgba(3,3,14,0.6) 100%)" }} />
    </div>
  );
};
