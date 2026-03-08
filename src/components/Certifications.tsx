import React from "react";
import { motion } from "motion/react";
import { resumeData } from "../data";
import { Award, ExternalLink } from "lucide-react";
import { SiSnowflake, SiCoursera } from "react-icons/si";

const MicrosoftLogo = () => (
  <svg viewBox="0 0 21 21" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="10" height="10" fill="#F25022" />
    <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
    <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
    <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
  </svg>
);
import { TiltCard } from "./TiltCard";

type CertIssuer = "Microsoft" | "Snowflake" | "Coursera";

const issuerConfig: Record<
  CertIssuer,
  { icon: React.ReactNode; color: string; bg: string; border: string; glow: string }
> = {
  Microsoft: {
    icon: <MicrosoftLogo />,
    color: "#0078D4",
    bg: "from-[#0078D4]/10 to-[#0078D4]/5",
    border: "hover:border-[#0078D4]/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,120,212,0.25)]",
  },
  Snowflake: {
    icon: <SiSnowflake className="w-7 h-7" />,
    color: "#29B5E8",
    bg: "from-[#29B5E8]/10 to-[#29B5E8]/5",
    border: "hover:border-[#29B5E8]/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(41,181,232,0.25)]",
  },
  Coursera: {
    icon: <SiCoursera className="w-7 h-7" />,
    color: "#0056D2",
    bg: "from-[#0056D2]/10 to-[#0056D2]/5",
    border: "hover:border-[#0056D2]/40",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,86,210,0.25)]",
  },
};

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-4xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-5xl font-sans text-center">
          Certifications & Awards
        </h2>

        {/* Cert cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {resumeData.certifications.map((cert, index) => {
            const cfg = issuerConfig[cert.issuer as CertIssuer] ?? issuerConfig.Microsoft;
            return (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group flex flex-col p-5 rounded-2xl h-full glass-panel border border-white/10 dark:border-white/8 ${cfg.border} ${cfg.glow} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
              >
                {/* Top: icon + content grows to fill */}
                <div className="flex flex-col gap-3 flex-1">
                  {/* Issuer icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cfg.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                    style={{ color: cfg.color }}
                  >
                    {cfg.icon}
                  </div>

                  {/* Name — flex-1 pushes badge to bottom of this group */}
                  <span className="text-sm font-semibold text-slate-900 dark:text-white leading-snug flex-1">
                    {cert.name}
                  </span>

                  {/* Badge row — always just above separator */}
                  <div className="flex items-center gap-2 flex-wrap shrink-0">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full border"
                      style={{
                        color: cfg.color,
                        borderColor: `${cfg.color}40`,
                        backgroundColor: `${cfg.color}10`,
                      }}
                    >
                      {cert.code}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* View link — always at bottom */}
                <div
                  className="flex items-center gap-1 text-xs font-medium mt-4 pt-3 border-t border-white/8 dark:border-white/6 shrink-0"
                  style={{ color: cfg.color }}
                >
                  <ExternalLink className="w-3 h-3" />
                  View Credential
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Awards card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TiltCard className="p-8 rounded-3xl glass-panel glass-panel-hover group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 text-yellow-600 dark:text-yellow-400 group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:text-white transition-colors shadow-lg">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-colors">
                Honors & Awards
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {resumeData.awards.map((award, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-base leading-relaxed p-4 rounded-xl bg-slate-50/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/8 hover:bg-yellow-50/80 dark:hover:bg-yellow-500/8 hover:border-yellow-300/50 dark:hover:border-yellow-500/25 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  {award}
                </motion.li>
              ))}
            </ul>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
};
