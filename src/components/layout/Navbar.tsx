"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/challenges", label: "Challenges" },
  { href: "/solutions", label: "Approach & Solutions" },
  { href: "/pilot", label: "Pilot Programme" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-border/60 shadow-xs">
      <nav className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-12 flex items-center justify-between h-20 md:h-22 gap-4">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center group py-1 shrink-0">
          <Image
            src="/logo.png"
            alt="Reloop Sciences Logo"
            width={380}
            height={96}
            priority
            unoptimized
            style={{ imageRendering: "-webkit-optimize-contrast" }}
            className="h-11 sm:h-13 md:h-15 lg:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const sibling = e.currentTarget.nextElementSibling;
              if (sibling) sibling.classList.remove('hidden');
              if (sibling) sibling.classList.add('flex');
            }}
          />
          <div className="hidden items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#134c2c] to-[#0c2a19] text-[#2da021] border border-[#2da021]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5 text-[#2da021]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-widest uppercase text-[#134c2c] leading-none group-hover:text-[#2da021] transition-colors">
                RELOOP <span className="text-[#f88a0d]">SCIENCES</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#2da021] mt-0.5">
                Circular Life Sciences
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links & CTA aligned to the right */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-7 ml-auto shrink-0">
          <ul
            className="flex items-center gap-1 lg:gap-2 xl:gap-3.5 shrink-0"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;

              return (
                <li key={link.href} className="relative shrink-0">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`text-[11px] lg:text-xs font-bold uppercase tracking-wider whitespace-nowrap relative px-2.5 lg:px-3 py-1.5 rounded-full transition-colors duration-200 flex items-center justify-center group shrink-0 ${
                      isActive
                        ? "text-[#2da021]"
                        : "text-gray-600 hover:text-[#134c2c]"
                    }`}
                  >
                    {/* Floating ambient capsule highlight on hover */}
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverBackdrop"
                        className="absolute inset-0 bg-[#2da021]/8 rounded-full -z-10 border border-[#2da021]/15"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}

                    {/* Label with micro-lift and strictly single-line nowrap */}
                    <span className="relative z-10 whitespace-nowrap transition-transform duration-200 group-hover:-translate-y-0.5 inline-block">
                      {link.label}
                    </span>

                    {/* Active Indicator Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2.5 right-2.5 lg:left-3 lg:right-3 h-[2.5px] bg-[#2da021] rounded-full shadow-[0_0_8px_rgba(45,160,33,0.4)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Non-active Hover Animated Underline (expands from center with smooth glow) */}
                    {!isActive && (
                      <span 
                        className="absolute bottom-0 left-2.5 right-2.5 lg:left-3 lg:right-3 h-[2px] bg-gradient-to-r from-[#2da021]/70 via-[#2da021] to-[#2da021]/70 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center opacity-0 group-hover:opacity-100" 
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Far Right: Start a Conversation CTA */}
          <div className="flex items-center shrink-0">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="relative group rounded-full p-[2px] bg-gradient-to-r from-[#f88a0d] via-[#fb923c] to-[#d97706] animate-border-shimmer shadow-xs"
            >
              <Link
                href="/contact"
                data-umami-event="nav-partner-click"
                className="relative flex items-center gap-2.5 px-5 lg:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f88a0d] via-[#ea580c] to-[#f88a0d] text-white text-xs font-black tracking-wider uppercase overflow-hidden shadow-inner group-hover:from-[#ea580c] group-hover:to-[#f88a0d] transition-all duration-300"
              >
                {/* Shimmer Light Beam Sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Pulsing live dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>

                {/* Button text */}
                <span className="relative z-10 font-extrabold text-white tracking-wider group-hover:tracking-widest transition-all duration-300">
                  Partner With Us
                </span>

                {/* Animated Arrow Icon */}
                <ArrowRight
                  size={14}
                  className="relative z-10 text-white transition-all duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[#134c2c]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-offwhite/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center justify-between text-sm font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "text-[#2da021] bg-[#2da021]/10 font-black" 
                          : "text-[#134c2c] hover:text-[#2da021] hover:bg-[#2da021]/8 hover:translate-x-1"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        {link.label}
                      </span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#2da021] shadow-[0_0_6px_rgba(45,160,33,0.6)]" />
                      ) : (
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#2da021]" />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 border-t border-border">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="relative group rounded-full p-[2px] bg-gradient-to-r from-[#f88a0d] via-[#fb923c] to-[#d97706] animate-border-shimmer shadow-xs"
                >
                  <Link
                    href="/contact"
                    data-umami-event="nav-mobile-partner-click"
                    className="relative flex items-center justify-between px-5 py-3 rounded-full bg-gradient-to-r from-[#f88a0d] to-[#ea580c] text-white text-xs font-black tracking-wider uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      Partner With Us
                    </span>
                    <ArrowRight size={15} className="text-white" />
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
