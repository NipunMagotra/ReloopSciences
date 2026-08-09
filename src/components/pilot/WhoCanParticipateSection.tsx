"use client";

import { motion } from "motion/react";
import { Microscope, Recycle, Factory, Building2 } from "lucide-react";

const participants = [
  {
    category: "Research Organisations",
    icon: Microscope,
    items: [
      "Universities",
      "Research institutes",
      "CROs",
      "Biotech companies",
      "Pharmaceutical R&D facilities",
    ],
  },
  {
    category: "Recycling Organisations",
    icon: Recycle,
    items: ["Plastic recyclers", "Material recovery specialists"],
  },
  {
    category: "Manufacturing Companies",
    icon: Factory,
    items: ["Injection moulders", "Sustainable material manufacturers"],
  },
  {
    category: "Incubators & Innovation Hubs",
    icon: Building2,
    items: ["BioNEST centres", "Science parks", "Startup incubators"],
  },
];

export function WhoCanParticipateSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow block">Eligibility & Partners</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Who Can Participate?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {participants.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-offwhite p-7 rounded-3xl border border-gray-100 hover:border-emerald-800/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2da021] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#134c2c] mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f88a0d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
