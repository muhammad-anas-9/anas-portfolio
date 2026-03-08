import React from "react";
import {
  SiGooglebigquery,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesheets,
  SiLooker,
  SiMeta,
  SiApachespark,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiXero,
  SiGoogleads,
} from "react-icons/si";
import {
  Database,
  Code2,
  BarChart3,
  Layers,
  Cpu,
  Globe,
  Table2,
  FileSpreadsheet,
  Mail,
  PieChart,
  Phone,
  Blend,
  FileCode2,
} from "lucide-react";

type BadgeProps = {
  tech: string;
  tagClass: string;
};

// Map tech name → icon component + optional brand color
const iconMap: Record<string, { icon: React.ReactNode; color?: string }> = {
  // BI Tools
  "Power BI": { icon: <PieChart className="w-3.5 h-3.5" />, color: "#F2C94C" },
  "Excel": { icon: <FileSpreadsheet className="w-3.5 h-3.5" />, color: "#217346" },
  "Tableau": { icon: <Table2 className="w-3.5 h-3.5" />, color: "#E97627" },
  "Looker Studio": { icon: <SiLooker />, color: "#4285F4" },

  // Google
  "BigQuery": { icon: <SiGooglebigquery />, color: "#4285F4" },
  "GA4": { icon: <SiGoogleanalytics />, color: "#E37400" },
  "GTM": { icon: <SiGoogletagmanager />, color: "#4285F4" },
  "Google Sheets": { icon: <SiGooglesheets />, color: "#34A853" },

  // Languages / query
  "SQL": { icon: <Database className="w-3.5 h-3.5" /> },
  "Python": { icon: <SiPython />, color: "#3776AB" },
  "DAX": { icon: <Code2 className="w-3.5 h-3.5" /> },
  "Power Query": { icon: <Code2 className="w-3.5 h-3.5" /> },

  // Big Data / ML
  "Apache Spark": { icon: <SiApachespark />, color: "#E25A1C" },
  "PySpark": { icon: <SiApachespark />, color: "#E25A1C" },
  "MLlib": { icon: <Cpu className="w-3.5 h-3.5" /> },
  "Big Data": { icon: <Layers className="w-3.5 h-3.5" /> },

  // Databases
  "MySQL": { icon: <SiMysql />, color: "#4479A1" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },

  // Integrations / APIs
  "REST APIs": { icon: <Globe className="w-3.5 h-3.5" /> },
  "Xero": { icon: <SiXero />, color: "#13B5EA" },
  "ActiveCampaign": { icon: <Mail className="w-3.5 h-3.5" />, color: "#356AE6" },
  "Karbon": { icon: <BarChart3 className="w-3.5 h-3.5" /> },
  "Jobber API": { icon: <Globe className="w-3.5 h-3.5" /> },
  "Google Apps Script": { icon: <FileCode2 className="w-3.5 h-3.5" />, color: "#4285F4" },

  // Ads
  "Meta Ads": { icon: <SiMeta />, color: "#0081FB" },
  "Google Ads": { icon: <SiGoogleads />, color: "#4285F4" },
  "CallRail": { icon: <Phone className="w-3.5 h-3.5" />, color: "#5CB85C" },

  // Generic
  "Data Visualization": { icon: <BarChart3 className="w-3.5 h-3.5" /> },
  "Data Modeling": { icon: <Layers className="w-3.5 h-3.5" /> },
  "Data Blending": { icon: <Blend className="w-3.5 h-3.5" /> },
  "Calculated Fields": { icon: <Code2 className="w-3.5 h-3.5" /> },
};

export const TechBadge: React.FC<BadgeProps> = ({ tech, tagClass }) => {
  const entry = iconMap[tech];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono rounded-lg border ${tagClass} backdrop-blur-sm`}
    >
      {entry ? (
        <span
          className="text-sm leading-none shrink-0"
          style={entry.color ? { color: entry.color } : undefined}
        >
          {entry.icon}
        </span>
      ) : null}
      {tech}
    </span>
  );
};
