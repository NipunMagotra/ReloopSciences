"use client";

import {
  FlaskConical,
  GraduationCap,
  Recycle,
  Factory,
  Lightbulb,
  Leaf,
} from "lucide-react";
import { motion } from "motion/react";

interface AudienceItem {
  icon: React.ElementType;
  label: string;
}

const audiences: AudienceItem[] = [
  { icon: FlaskConical, label: "Laboratories" },
  { icon: GraduationCap, label: "Research Institutions" },
  { icon: Recycle, label: "Recyclers & Collectors" },
  { icon: Factory, label: "Polymer Manufacturers" },
  { icon: Lightbulb, label: "Incubators & Innovation Hubs" },
  { icon: Leaf, label: "Sustainability & ESG Leaders" },
];

const itemVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.08,
    },
  }),
};

export function ContactAudience() {
  return (
    <div className="space-y-6">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-white tracking-tight"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Who We&rsquo;d Like <br />
        <span className="text-[#f88a0d]">to Partner With</span>
      </motion.h2>

      <ul className="space-y-3">
        {audiences.map((item, i) => (
          <motion.li
            key={item.label}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 hover:border-[#2da021] hover:bg-emerald-900/40 transition-all duration-300 shadow-md cursor-default">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-[#2da021] group-hover:bg-[#2da021] group-hover:text-white transition-all duration-300 shadow-inner">
                <item.icon size={19} strokeWidth={1.8} />
              </div>
              <span className="text-sm md:text-base text-emerald-100 font-medium group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
