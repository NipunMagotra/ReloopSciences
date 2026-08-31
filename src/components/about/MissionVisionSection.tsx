"use client";

import { motion } from "motion/react";
import { Target, Eye, UsersRound, Globe } from "lucide-react";

const purposeCards = [
  {
    eyebrow: "OUR MISSION",
    title: "Our Mission",
    description:
      "To build a transparent, end-to-end system that transforms lab plastic waste into high-quality, circular solutions.",
    icon: Target,
    iconColor: "text-[#2da021]",
    iconBg: "bg-emerald-50 border-emerald-100",
  },
  {
    eyebrow: "OUR VISION",
    title: "Our Vision",
    description:
      "A world where every laboratory operates responsibly, and sustainability is at the core of scientific progress.",
    icon: Eye,
    iconColor: "text-[#f88a0d]",
    iconBg: "bg-orange-50 border-orange-100",
  },
  {
    eyebrow: "OUR VALUES",
    title: "Our Values",
    description:
      "Integrity, transparency, innovation and collaboration drive everything we do.",
    icon: UsersRound,
    iconColor: "text-[#2da021]",
    iconBg: "bg-emerald-50 border-emerald-100",
  },
  {
    eyebrow: "OUR COMMITMENT",
    title: "Our Commitment",
    description:
      "We are committed to measurable impact, continuous improvement and a cleaner future for generations to come.",
    icon: Globe,
    iconColor: "text-[#f88a0d]",
    iconBg: "bg-orange-50 border-orange-100",
  },
];

export function MissionVisionSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-10 bg-offwhite relative" id="purpose">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#f88a0d] uppercase block mb-2">
            OUR PURPOSE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Mission, Vision, Values &amp; Commitment
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {purposeCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.eyebrow}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-emerald-700/25 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Small Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${card.iconBg} ${card.iconColor} transition-transform duration-300 group-hover:scale-105 mb-4`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  {/* Small Orange Accent Line */}
                  <div className="w-8 h-0.5 bg-[#f88a0d] rounded-full my-3" />

                  {/* Eyebrow / Label */}
                  <span className="text-[11px] font-bold tracking-widest text-[#f88a0d] uppercase block mb-1">
                    {card.eyebrow}
                  </span>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#134c2c] mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Green Bottom Accent Line */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#2da021]/80 rounded-b-3xl" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
