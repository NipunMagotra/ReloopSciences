"use client";

import { motion } from "motion/react";
import { Zap, Award, Users, Lightbulb } from "lucide-react";

const benefits = [
  {
    title: "Early Access",
    description: "Help shape the future direction of ReLoop Sciences.",
    icon: Zap,
    color: "text-[#f88a0d]",
    bg: "bg-orange-50",
  },
  {
    title: "Sustainability Leadership",
    description: "Demonstrate commitment to responsible laboratory practices.",
    icon: Award,
    color: "text-[#2da021]",
    bg: "bg-emerald-50",
  },
  {
    title: "Industry Collaboration",
    description: "Connect with sustainability-focused organisations across science and innovation.",
    icon: Users,
    color: "text-[#2da021]",
    bg: "bg-emerald-50",
  },
  {
    title: "Practical Insights",
    description: "Contribute to understanding how circular economy principles could be applied in laboratory environments.",
    icon: Lightbulb,
    color: "text-[#f88a0d]",
    bg: "bg-orange-50",
  },
];

export function WhyJoinSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="eyebrow block">Programme Benefits</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Why Join?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex items-start gap-6 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#134c2c] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
