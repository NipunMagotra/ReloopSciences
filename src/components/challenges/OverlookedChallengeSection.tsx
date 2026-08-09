"use client";

import { motion } from "motion/react";
import { Flame, AlertOctagon, Scale } from "lucide-react";

export function OverlookedChallengeSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="eyebrow block">Impact & Disposal</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            An Overlooked Environmental Challenge
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            While sustainability initiatives have expanded across many industries, laboratory plastics remain a difficult waste stream to manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <AlertOctagon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#134c2c] mb-3">
                Limited Recycling Pathways
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Many research organisations are actively working to reduce their environmental impact, yet practical recycling pathways for laboratory plastics remain limited.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <Flame size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#134c2c] mb-3">
                Incineration & Disposal
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                As a result, large volumes of laboratory plastics are commonly directed towards disposal routes, including incineration.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2da021] flex items-center justify-center mb-6">
                <Scale size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#134c2c] mb-3">
                Balancing Excellence & Impact
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                This presents a challenge for organisations seeking to balance scientific excellence with environmental responsibility.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
