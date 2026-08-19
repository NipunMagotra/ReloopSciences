"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  badge?: string;
}

export function ImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
  title = "Infographic Viewer",
  badge = "High-Resolution 4K View",
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard shortcut for Esc and Zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleReset();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, zoom]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.35, 3.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.35, 0.8));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0c2a19]/80 border-b border-emerald-800/40 text-white z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f88a0d]/20 border border-[#f88a0d]/40 text-[#f88a0d]">
                {badge}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                {title}
              </h3>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/50 hover:bg-[#2da021] text-emerald-200 hover:text-white transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/50 hover:bg-[#2da021] text-emerald-200 hover:text-white transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/50 hover:bg-[#2da021] text-emerald-200 hover:text-white transition-colors"
                title="Reset Zoom (0)"
              >
                <RotateCcw size={18} />
              </button>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/50 hover:bg-[#2da021] text-emerald-200 hover:text-white transition-colors"
                title="Open Original Image in New Tab"
              >
                <ExternalLink size={18} />
              </a>
              <button
                onClick={onClose}
                className="p-2 ml-2 rounded-lg bg-red-950/80 border border-red-800/50 hover:bg-red-600 text-red-200 hover:text-white transition-colors"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Image Canvas */}
          <div
            className={`relative flex-1 overflow-hidden flex items-center justify-center p-4 ${
              zoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                transition: isDragging ? "none" : "transform 0.2s ease-out",
                maxWidth: "92vw",
                maxHeight: "82vh",
              }}
              className="relative aspect-[16/9] w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden bg-white"
            >
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                priority
                className="object-contain bg-white"
                style={{ imageRendering: "auto" }}
              />
            </div>
          </div>

          {/* Bottom Bar Hints */}
          <div className="px-6 py-3 bg-[#0c2a19]/80 border-t border-emerald-800/40 text-emerald-300/60 text-xs flex items-center justify-between z-20">
            <div className="flex items-center gap-4">
              <span>Zoom: {Math.round(zoom * 100)}%</span>
              <span>• Click & Drag to Pan when zoomed</span>
              <span>• Esc to exit</span>
            </div>
            <span className="text-[#f88a0d] font-semibold">
              Reloop Sciences High-Definition Asset
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
