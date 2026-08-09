"use client";

import { motion } from "motion/react";
import { Compass, Eye, Check } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-offwhite relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Purpose & Direction</span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#134c2c] tracking-tight">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#2da021] mb-8">
                <Compass size={28} />
              </div>
              <span className="text-xs font-semibold tracking-widest text-[#f88a0d] uppercase block mb-2">
                Our Core Mission
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#134c2c] mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                To support the transition towards more sustainable laboratory practices by developing circular economy solutions that promote material recovery, transparency, and environmental responsibility.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-500 font-medium">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#2da021] flex items-center justify-center flex-shrink-0">
                <Check size={12} />
              </span>
              Promoting material recovery & transparency
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f88a0d] mb-8">
                <Eye size={28} />
              </div>
              <span className="text-xs font-semibold tracking-widest text-[#f88a0d] uppercase block mb-2">
                Future Ambition
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#134c2c] mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                To become a leading platform for laboratory sustainability, helping research organisations reduce waste, improve environmental performance, and build circular pathways for laboratory materials.
              </p>
              <div className="p-5 rounded-2xl bg-emerald-950/5 border border-emerald-800/10 text-[#134c2c] text-sm md:text-base italic leading-relaxed">
                &ldquo;We envision a future where valuable laboratory resources remain in circulation for as long as possible, creating both environmental and economic benefits.&rdquo;
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-500 font-medium">
              <span className="w-5 h-5 rounded-full bg-orange-100 text-[#f88a0d] flex items-center justify-center flex-shrink-0">
                <Check size={12} />
              </span>
              Long-term environmental & economic benefits
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
