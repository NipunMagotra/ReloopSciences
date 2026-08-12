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
  { href: "/solutions", label: "Our Approach & Solutions" },
  { href: "/pilot", label: "Pilot Programme" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-border/60 shadow-xs">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20 md:h-22">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/logo.png"
            alt="Reloop Sciences Logo"
            width={380}
            height={96}
            priority
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">
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
          <motion.div
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="relative group rounded-full p-[2px] bg-gradient-to-r from-[#134c2c] via-[#2da021] to-[#f88a0d] animate-border-shimmer shadow-lg hover:shadow-[#2da021]/35 hover:shadow-xl transition-all duration-300"
          >
            <Link
              href="/contact"
              className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0c2a19] text-white text-xs font-black tracking-wider uppercase overflow-hidden"
            >
              {/* Shimmer Light Beam Sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Pulsing live dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f88a0d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f88a0d]" />
              </span>

              {/* Button text */}
              <span className="relative z-10 font-extrabold text-white group-hover:text-emerald-300 transition-colors duration-200">
                Partner With Us
              </span>

              {/* Animated Arrow Icon */}
              <ArrowRight
                size={14}
                className="relative z-10 text-[#f88a0d] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
            </Link>
          </motion.div>
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
              <li className="pt-4 border-t border-border">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full p-[2px] bg-gradient-to-r from-[#134c2c] via-[#2da021] to-[#f88a0d] animate-border-shimmer shadow-md"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-[#0c2a19] text-white text-xs font-black tracking-wider uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f88a0d] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f88a0d]" />
                      </span>
                      Partner With Us
                    </span>
                    <ArrowRight size={15} className="text-[#f88a0d]" />
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
