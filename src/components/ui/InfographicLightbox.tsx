"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Maximize2,
  Download,
  Sparkles,
  Search,
} from "lucide-react";

interface InfographicLightboxProps {
  src: string;
  alt: string;
  badgeTitle?: string;
  badgeCategory?: string;
  aspectRatioClass?: string;
}

export function InfographicLightbox({
  src,
  alt,
  badgeTitle,
  badgeCategory,
  aspectRatioClass = "aspect-[16/9]",
}: InfographicLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle keyboard shortcuts (Escape to close, + / - to zoom)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 0.3, 3.5));
      } else if (e.key === "-" || e.key === "_") {
        setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
      } else if (e.key === "0") {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.3, 3.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* ─── Infographic Display Container with Click-to-Expand ─── */}
      <div
        onClick={() => {
          setIsOpen(true);
          setZoomLevel(1);
          setPosition({ x: 0, y: 0 });
        }}
        className="relative group cursor-pointer overflow-hidden rounded-3xl border border-emerald-950/15 shadow-2xl bg-white transition-all duration-300 hover:shadow-3xl hover:border-[#2da021]/40"
      >
        <div className={`relative ${aspectRatioClass} w-full bg-white`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            unoptimized
            className="object-contain bg-white transition-transform duration-500 group-hover:scale-[1.015]"
            sizes="(max-width: 1024px) 100vw, 1400px"
          />

          {/* Hover Hint Overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#134c2c]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-[#2da021]/50 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Search size={15} className="text-[#f88a0d]" />
              <span>Click for Ultra-HD Fullscreen & Zoom</span>
              <Maximize2 size={13} className="text-emerald-300 ml-1" />
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        {badgeTitle && (
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c2a19] via-[#134c2c] to-[#0c2a19] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#f88a0d]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                {badgeTitle}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {badgeCategory && (
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2da021] bg-white/10 px-3 py-1 rounded-full">
                  {badgeCategory}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#f88a0d] bg-orange-950/40 border border-orange-800/30 px-2.5 py-0.5 rounded-full">
                <Maximize2 size={11} />
                Expand 4K
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ─── Fullscreen High-Resolution Lightbox Modal ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-lg flex flex-col items-center justify-between p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            {/* Top Header Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl flex items-center justify-between py-2 text-white z-20"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {alt}
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700/60 text-[#2da021]">
                  Native 2560px HD
                </span>
              </div>

              {/* Floating Action Controls */}
              <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-700/60 backdrop-blur-md rounded-full px-3 py-1.5 shadow-2xl">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full hover:bg-stone-800 text-stone-200 hover:text-white transition-colors"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn size={17} />
                </button>
                <span className="text-xs font-mono text-stone-400 min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full hover:bg-stone-800 text-stone-200 hover:text-white transition-colors"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut size={17} />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-2 rounded-full hover:bg-stone-800 text-stone-200 hover:text-white transition-colors"
                  title="Reset Zoom (0)"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw size={15} />
                </button>

                <div className="w-[1px] h-4 bg-stone-700 mx-1" />

                <a
                  href={src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-stone-800 text-[#f88a0d] hover:text-white transition-colors"
                  title="Download High-Res Original"
                  aria-label="Download High-Res"
                >
                  <Download size={16} />
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-stone-800 hover:bg-red-600/80 text-white transition-colors ml-1"
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Central Interactive Zoom Viewport */}
            <div
              onClick={(e) => e.stopPropagation()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`relative flex-1 w-full max-w-6xl max-h-[82vh] flex items-center justify-center overflow-hidden my-auto select-none ${
                zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
              }`}
            >
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                  transition: isDragging ? "none" : "transform 0.2s ease-out",
                }}
                className="relative w-full h-full flex items-center justify-center max-w-full max-h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl bg-white"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom Instructions */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="text-stone-400 text-xs flex items-center gap-4 py-2 z-20"
            >
              <span>Scroll / Click controls to Zoom</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Drag image to Pan when zoomed</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Press Esc to exit</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
