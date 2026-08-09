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
  { href: "/challenges", label: "The Challenges" },
  { href: "/pilot", label: "Pilot Programme" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-border/60 shadow-xs">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20 md:h-24">
        {/* Logo / Wordmark (Anchored Flush to Far Left Boundary) */}
        <Link href="/" className="flex items-center gap-2.5 group py-1 overflow-visible -ml-3 sm:-ml-4 md:-ml-6">
          <Image
            src="/logo.png"
            alt="Reloop Sciences Logo"
            width={450}
            height={120}
            priority
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] object-contain transition-all duration-300 group-hover:opacity-90 scale-125 sm:scale-135 origin-left"
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#2da021]"
                      : "text-gray-600 hover:text-[#134c2c]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2da021] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Start a Conversation CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#f88a0d] hover:bg-[#d87609] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-orange-950/15 group"
          >
            Partner With Us
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
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
                      className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? "text-[#2da021]" : "text-[#134c2c] hover:text-[#2da021]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3 border-t border-border">
                <Link
                  href="/contact"
                  className="block text-sm font-bold text-[#f88a0d] uppercase tracking-wider"
                  onClick={() => setMobileOpen(false)}
                >
                  Partner With Us →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
