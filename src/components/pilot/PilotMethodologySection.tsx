"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Users2,
  Trash2,
  QrCode,
  Recycle,
  Factory,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    step: "01",
    title: "Partnership",
    description: "Lab onboarding, protocol alignment & scope definition.",
    icon: Users2,
    image: "/images/pilot-stage-01-partnership.jpg",
    alt: "Laboratory Partnership - Scientists discussing sustainability",
  },
  {
    step: "02",
    title: "Collection",
    description: "Dedicated clean bins installed on-site with scheduled pickup.",
    icon: Trash2,
    image: "/images/pilot-stage-02-collection.jpg",
    alt: "Laboratory Collection - Segregated clean plastic waste",
  },
  {
    step: "03",
    title: "Traceability",
    description: "Digital QR tracking & verified chain of custody records.",
    icon: QrCode,
    image: "/images/pilot-stage-03-traceability.jpg",
    alt: "Laboratory Traceability - Digital tracking and QR verification",
  },
  {
    step: "04",
    title: "Recycling",
    description: "Advanced washing & extrusion into high-spec pellets.",
    icon: Recycle,
    image: "/images/pilot-stage-04-recycling.jpg",
    alt: "Plastic Recycling - Clean polymer pellets processing",
  },
  {
    step: "05",
    title: "New Products",
    description: "Precision molding into circular lab consumables.",
    icon: Factory,
    image: "/images/pilot-stage-05-new-products.jpg",
    alt: "New Lab Products - Manufactured from recycled polypropylene",
  },
  {
    step: "06",
    title: "Impact & Insights",
    description: "Measurable ESG metrics, recovery audits & sustainability data.",
    icon: BarChart3,
    image: "/images/pilot-stage-06-impact-insights.jpg",
    alt: "Impact and Insights - Sustainability analytics and data monitoring",
  },
];

export function PilotMethodologySection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-10 bg-white relative border-y border-gray-100" id="methodology">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-bold tracking-widest text-[#f88a0d] uppercase block mb-2">
            CLOSED-LOOP FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#134c2c] tracking-tight mb-3">
            Our 6-Stage Pilot Methodology
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A closed-loop system designed for transparency, accountability and impact.
          </p>
        </div>

        {/* 6 Horizontal Cards on Desktop with Connecting Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 relative items-stretch">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isLast = idx === stages.length - 1;

            return (
              <div key={stage.step} className="relative flex flex-col items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-[#2da021]/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group hover:-translate-y-1"
                >
                  <div>
                    {/* Photographic Visual Image Container */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-emerald-950/5 border-b border-gray-100">
                      <Image
                        src={stage.image}
                        alt={stage.alt}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="p-4 sm:p-5">
                      {/* Header: Stage Number + Line Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-extrabold text-[#2da021] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {stage.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-offwhite text-[#134c2c] flex items-center justify-center group-hover:bg-[#2da021] group-hover:text-white transition-colors duration-300">
                          <Icon size={16} strokeWidth={2} />
                        </div>
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-base font-bold text-[#134c2c] mb-1.5 leading-snug">
                        {stage.title}
                      </h3>

                      {/* Stage Description */}
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Small Green Bottom Accent */}
                  <div className="h-1 bg-[#2da021] w-full" />
                </motion.div>

                {/* Orange Connecting Arrow on Desktop (Hidden on mobile & after last item) */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/3 -translate-y-1/2 z-20 text-[#f88a0d] pointer-events-none bg-white rounded-full p-1 shadow-xs border border-orange-100">
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
