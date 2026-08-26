"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Recycle,
  Search,
  Map,
  RefreshCcw,
  BarChart3,
  Microscope,
  FlaskConical,
  Factory,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Box,
  QrCode,
  LineChart,
  Layers,
  Sparkles,
  Building2,
  PackageCheck,
  Check,
  ShieldCheck,
  FileSpreadsheet,
  Workflow
} from "lucide-react";

const ECOSYSTEM_STEPS = [
  {
    number: "01",
    title: "Research Laboratories",
    subtitle: "Universities, institutes & labs generating plastic consumables",
    icon: Microscope,
  },
  {
    number: "02",
    title: "Traceable Collection",
    subtitle: "Dedicated containers & barcode-enabled collection systems",
    icon: QrCode,
  },
  {
    number: "03",
    title: "Material Tracking",
    subtitle: "Digital records & complete chain of custody traceability",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Recycling Partners",
    subtitle: "Specialized non-hazardous sorting, cleaning & resin processing",
    icon: Recycle,
  },
  {
    number: "05",
    title: "Recovered Materials",
    subtitle: "High-grade PCR polymer granules & circular feedstocks",
    icon: Layers,
  },
  {
    number: "06",
    title: "Manufacturing Partners",
    subtitle: "Precision eco-conscious labware & industrial production",
    icon: Building2,
  },
  {
    number: "07",
    title: "New Products",
    subtitle: "Circular laboratory consumables re-entering productive use",
    icon: PackageCheck,
  },
];

const OFFERINGS = [
  {
    id: "collection",
    title: "Traceable Collection Programmes",
    subtitle: "Our Primary Offering",
    isPrimary: true,
    icon: QrCode,
    description:
      "Reloop Sciences is exploring dedicated collection programmes for suitable non-hazardous laboratory plastics. Through barcode-enabled collection systems and material traceability, laboratories can gain greater visibility into their material recovery pathways.",
    features: [
      "Dedicated collection containers",
      "Barcode-enabled tracking",
      "Collection records",
      "Material traceability",
      "Recovery reporting",
      "Sustainability data",
    ],
    whyItMatters:
      "Traceability helps provide transparency, accountability, and confidence throughout the recovery journey.",
  },
  {
    id: "sustainability-assessment",
    title: "Laboratory Sustainability Assessments",
    subtitle: "Understand Current Practices",
    isPrimary: false,
    icon: Search,
    description:
      "Understanding sustainability starts with understanding current practices. Reloop Sciences helps organisations review how laboratory materials are used and managed.",
    features: [
      "Material usage patterns",
      "Plastic consumption",
      "Sustainability initiatives",
      "Waste management practices",
      "Resource efficiency opportunities",
    ],
    deliverables: [
      "Sustainability Assessment Report",
      "Key Findings Summary",
      "Improvement Recommendations",
    ],
  },
  {
    id: "waste-mapping",
    title: "Waste Stream Mapping",
    subtitle: "Create Visibility",
    isPrimary: false,
    icon: Map,
    description:
      "Many organisations do not have a clear picture of what materials enter and leave their laboratories. Waste Stream Mapping helps create that visibility.",
    categorizedFeatures: [
      {
        category: "Laboratory Plastics",
        items: [
          "Falcon tubes",
          "Pipette tip boxes",
          "PCR plates",
          "Serological pipettes",
          "Sample containers",
        ],
      },
      {
        category: "Packaging Materials",
        items: [
          "Cardboard",
          "Plastic wrap",
          "Shipping materials",
          "Protective packaging",
        ],
      },
      {
        category: "Material Flows",
        items: [
          "Current disposal pathways",
          "Waste volumes",
          "Segregation practices",
          "Recovery opportunities",
        ],
      },
    ],
    deliverables: [
      "Waste Stream Inventory",
      "Material Flow Analysis",
      "Recovery Opportunity Report",
    ],
  },
  {
    id: "circularity-assessment",
    title: "Circularity Assessments",
    subtitle: "Explore Opportunities",
    isPrimary: false,
    icon: RefreshCcw,
    description:
      "Once laboratory material streams are understood, organisations can begin exploring opportunities for circularity. Circularity Assessments help identify materials that may have the potential to move beyond traditional disposal pathways.",
    features: [
      "Material recovery potential",
      "Recovery pathway identification",
      "Circular economy opportunities",
      "Resource efficiency improvements",
      "Sustainability priorities",
    ],
    deliverables: [
      "Circularity Assessment Report",
      "Recovery Opportunities Roadmap",
      "Circular Economy Recommendations",
    ],
  },
  {
    id: "reporting-insights",
    title: "Sustainability Reporting & Insights",
    subtitle: "Visibility into Environmental Performance",
    isPrimary: false,
    icon: BarChart3,
    description:
      "Organisations increasingly require better visibility into environmental performance and sustainability initiatives. Reloop Sciences supports improved understanding of laboratory material flows through data, reporting, and sustainability insights.",
    features: [
      "Material recovery reporting",
      "Waste generation trends",
      "Sustainability metrics",
      "Circularity indicators",
      "Environmental performance insights",
    ],
  },
];

const PARTNERS = [
  {
    title: "Research Laboratories",
    subtitle: "Academic & Institutional",
    description: "Universities, research institutes, and scientific facilities.",
    icon: Microscope,
    tag: "Source Generators",
  },
  {
    title: "Biotechnology Companies",
    subtitle: "Life Sciences & R&D",
    description: "Innovation-focused organisations seeking sustainable laboratory practices.",
    icon: FlaskConical,
    tag: "Eco Pioneers",
  },
  {
    title: "Pharmaceutical R&D Organisations",
    subtitle: "Discovery & Clinical Support",
    description: "Research teams committed to improving environmental performance.",
    icon: Factory,
    tag: "ESG Leaders",
  },
  {
    title: "Recycling Partners",
    subtitle: "Material Recovery Specialists",
    description: "Organisations involved in material recovery and recycling.",
    icon: Recycle,
    tag: "Processing Hubs",
  },
  {
    title: "Manufacturing Partners",
    subtitle: "Circular Supply Chains",
    description: "Companies interested in sustainable material solutions and circular supply chains.",
    icon: Building2,
    tag: "Product Producers",
  },
];

const VISION_POINTS = [
  "Laboratories understand their material flows",
  "Valuable resources remain in circulation",
  "Recovery pathways are transparent",
  "Sustainability data is measurable",
  "Scientific innovation and environmental responsibility work together",
];

export function SolutionsContent() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="bg-[#f8f7f4] min-h-screen text-[#134c2c] overflow-hidden">
      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Ambient Gradient Background Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#2da021]/15 via-[#f88a0d]/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#134c2c] tracking-tight leading-[1.08] mb-8"
          >
            Building a <span className="text-[#2da021]">Circular Future</span> for{" "}
            <span className="bg-gradient-to-r from-[#134c2c] via-[#2da021] to-[#f88a0d] bg-clip-text text-transparent">
              Laboratory Plastics.
            </span>
          </motion.h1>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal"
          >
            <p>
              Laboratories rely on plastic consumables every day to support scientific research, innovation, and discovery. While these materials are essential for maintaining safety, quality, and reproducibility, many eventually enter disposal pathways with limited opportunities for recovery.
            </p>
            <div className="p-6 rounded-2xl bg-white/80 border border-stone-200/80 shadow-sm backdrop-blur-xs text-stone-800 font-medium">
              At <strong className="text-[#134c2c]">Reloop Sciences</strong>, we believe suitable non-hazardous laboratory plastics should be viewed as <span className="text-[#2da021] font-bold">valuable resources</span> rather than waste.
            </div>
            <p className="text-stone-700 font-medium">
              Our mission is to build a <strong className="text-[#134c2c]">traceable circular economy ecosystem</strong> that connects laboratories, recyclers, and manufacturers through transparent material recovery pathways.
            </p>
          </motion.div>

          {/* Feature Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "🔬 Non-Hazardous Lab Consumables",
              "🏷️ Barcode-Enabled Traceability",
              "🔄 Transparent Material Pathways",
              "📊 Measurable Sustainability Data",
            ].map((pill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs sm:text-sm font-semibold text-stone-700 shadow-2xs hover:border-[#2da021] hover:text-[#134c2c] transition-colors"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Featured Approach & Solutions Infographic Showcase (Normal Image) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/approach-solutions-infographic.png"
                alt="Our Approach & Solution - Reloop Sciences Circular Lifecycle"
                fill
                priority
                unoptimized
                style={{ imageRendering: "-webkit-optimize-contrast" }}
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#f88a0d]" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">
                  Complete 5-Stage Closed-Loop Lifecycle & Core Enablers
                </span>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2da021] bg-white/10 px-3 py-1 rounded-full">
                Collect • Recycle • Reuse
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section: Our Approach (Interactive Stepper Diagram) ────── */}
      <section className="py-24 bg-white border-y border-stone-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#f88a0d] mb-3 block">
              Ecosystem Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#134c2c] tracking-tight mb-4">
              Our Approach
            </h2>
            <p className="text-stone-600 text-lg sm:text-xl">
              Reloop Sciences is developing a collaborative ecosystem that aims to connect key stakeholders involved in laboratory material management.
            </p>
          </div>

          {/* Stepper Flow Grid */}
          <div className="relative">
            {/* Connecting line background for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-[#134c2c] via-[#2da021] to-[#f88a0d] -translate-y-1/2 z-0 rounded-full opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {ECOSYSTEM_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isHovered = activeStep === idx;

                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer ${
                      isHovered
                        ? "bg-[#0c2a19] text-white border-[#2da021] shadow-xl scale-105"
                        : "bg-[#f8f7f4] text-[#134c2c] border-stone-200 hover:border-[#2da021]/50 hover:bg-white"
                    }`}
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs mb-3 transition-colors ${
                        isHovered
                          ? "bg-[#2da021] text-white shadow-md"
                          : "bg-white text-[#134c2c] border border-stone-200 shadow-2xs"
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                        isHovered
                          ? "bg-[#f88a0d] text-white"
                          : "bg-emerald-900/10 text-[#2da021]"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-sm font-extrabold tracking-tight mb-1 ${
                        isHovered ? "text-white" : "text-[#134c2c]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Subtitle */}
                    <p
                      className={`text-[11px] leading-tight ${
                        isHovered ? "text-emerald-200/80" : "text-stone-500"
                      }`}
                    >
                      {step.subtitle}
                    </p>

                    {/* Down arrow for mobile/tablet */}
                    {idx < ECOSYSTEM_STEPS.length - 1 && (
                      <div className="lg:hidden mt-3 text-[#2da021]/60">
                        <ArrowDown size={18} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Simple Goal Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-xl border border-emerald-800/40 relative overflow-hidden text-center"
          >
            {/* Shimmer light effect */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#f88a0d]/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-[#f88a0d] text-xs font-black tracking-widest uppercase mb-3">
                <Sparkles size={14} /> Core Objective
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                The goal is simple:
              </h3>
              <p className="text-emerald-100 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Keep valuable materials in productive use for longer while improving transparency throughout the recovery process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section: Solutions & Offerings ────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-[#f88a0d] mb-3 block">
            Capabilities & Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#134c2c] tracking-tight mb-4">
            Our Solutions
          </h2>
          <p className="text-stone-600 text-lg sm:text-xl">
            Tailored programmes and assessments designed to provide full visibility into laboratory material flows and enable circular recovery pathways.
          </p>
        </div>

        <div className="space-y-12">
          {OFFERINGS.map((offering, idx) => {
            const Icon = offering.icon;

            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border transition-all duration-300 hover:shadow-xl ${
                  offering.isPrimary
                    ? "border-[#2da021] shadow-lg ring-1 ring-[#2da021]/30"
                    : "border-stone-200/80 shadow-xs"
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                  {/* Left Column: Title & Intro */}
                  <div className="lg:w-5/12 flex flex-col justify-between">
                    <div>
                      {/* Subtitle / Primary Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                            offering.isPrimary
                              ? "bg-[#f88a0d] text-white"
                              : "bg-emerald-900/10 text-[#134c2c]"
                          }`}
                        >
                          {offering.subtitle}
                        </span>
                      </div>

                      {/* Header with Icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#134c2c] to-[#0c2a19] text-[#2da021] flex items-center justify-center shrink-0 shadow-md">
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-[#134c2c] tracking-tight">
                            {offering.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-stone-600 leading-relaxed text-base sm:text-lg mb-6">
                        {offering.description}
                      </p>
                    </div>

                    {/* Why It Matters Callout (If Available) */}
                    {offering.whyItMatters && (
                      <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mt-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#134c2c] mb-1.5 flex items-center gap-1.5">
                          <ShieldCheck size={16} className="text-[#2da021]" /> Why It Matters
                        </h4>
                        <p className="text-sm text-stone-700 font-medium leading-relaxed">
                          {offering.whyItMatters}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Features, Breakdown & Deliverables */}
                  <div className="lg:w-7/12 flex flex-col justify-between gap-8 pt-6 lg:pt-0 lg:border-l lg:border-stone-200/80 lg:pl-12">
                    {/* Normal Features List */}
                    {offering.features && (
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#2da021]" /> Potential Features & Scope
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {offering.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 flex items-start gap-3 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#2da021]/15 text-[#2da021] flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={12} strokeWidth={3} />
                              </div>
                              <span className="text-sm font-semibold text-stone-800">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Categorized Features for Waste Stream Mapping */}
                    {offering.categorizedFeatures && (
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#f88a0d]" /> Assessment Areas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {offering.categorizedFeatures.map((cat, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between"
                            >
                              <h5 className="text-sm font-black text-[#134c2c] mb-3 border-b border-stone-200 pb-2">
                                {cat.category}
                              </h5>
                              <ul className="space-y-2">
                                {cat.items.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="text-xs text-stone-600 flex items-center gap-2 font-medium"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f88a0d]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables Section */}
                    {offering.deliverables && (
                      <div className="pt-4 border-t border-stone-200/60">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#f88a0d] mb-3 flex items-center gap-2">
                          <FileSpreadsheet size={16} /> Key Deliverables
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {offering.deliverables.map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c2a19] text-white text-xs font-bold shadow-xs"
                            >
                              <CheckCircle2 size={14} className="text-[#2da021]" />
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Section: Who We Work With ───────────────────────────── */}
      <section className="py-24 bg-[#0c2a19] text-white relative overflow-hidden">
        {/* Glow orb */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2da021]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#f88a0d] mb-3 block">
              Ecosystem Collaborators
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Who We Work With
            </h2>
            <p className="text-emerald-100/80 text-lg sm:text-xl">
              Connecting key stakeholders involved in laboratory material management, recovery, and circular manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {PARTNERS.map((partner, idx) => {
              const Icon = partner.icon;

              const colPlacement =
                idx === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : idx === 4
                  ? "md:col-span-2 md:max-w-md md:mx-auto w-full lg:col-span-2 lg:max-w-none"
                  : "lg:col-span-2";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-3xl bg-emerald-950/50 border border-emerald-800/50 hover:bg-emerald-900/60 hover:border-[#2da021] transition-all duration-300 flex flex-col justify-between group shadow-lg ${colPlacement}`}
                >
                  <div>
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2da021] to-[#134c2c] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <Icon size={28} />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2">
                      {partner.title}
                    </h3>
                    <p className="text-emerald-200/70 text-xs font-semibold uppercase tracking-wider mb-4">
                      {partner.subtitle}
                    </p>

                    <p className="text-emerald-100/80 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section: Our Long-Term Vision ──────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-stone-200/80 shadow-xl relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2da021]/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f88a0d]/10 text-[#f88a0d] text-xs font-black tracking-widest uppercase">
                <Sparkles size={14} /> The Future We Are Building
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#134c2c] tracking-tight">
                Our Long-Term Vision
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                We envision a future where suitable laboratory plastics move through a transparent and traceable circular economy.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#134c2c] hover:bg-[#0c2a19] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-950/20 group"
                >
                  Partner With Reloop
                  <ArrowRight size={16} className="text-[#f88a0d] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-inner">
              <h3 className="text-lg font-black text-[#134c2c] mb-6 uppercase tracking-wider text-stone-400">
                A future where:
              </h3>
              <ul className="space-y-4">
                {VISION_POINTS.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-stone-200/60 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#2da021] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Closing Brand Tagline Banner ────────────────────────── */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white shadow-2xl border border-emerald-800/40 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-[#2da021]/15 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black tracking-wider uppercase text-white">
              Reloop <span className="text-[#f88a0d]">Sciences</span>
            </h3>
            <p className="text-lg sm:text-xl font-bold text-[#2da021] tracking-wide">
              Reducing Waste. Recovering Resources. Enabling Circular Science.
            </p>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Building a traceable circular economy ecosystem for laboratory plastics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
