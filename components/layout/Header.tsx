"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import MegaMenu from "@/components/mega-menu/MegaMenu";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1e1e1e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 font-mono text-sm font-medium tracking-[0.2em] text-[#f0f0f0] transition-opacity hover:opacity-60"
            >
              OAI
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleMouseLeave}>
              {navigation.main.map((item) => (
                <div
                  key={item.key}
                  onMouseEnter={() => item.hasMega ? handleMouseEnter(item.key) : undefined}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] transition-colors duration-150 flex items-center gap-1.5 ${
                      activeMenu === item.key
                        ? "text-[#f0f0f0]"
                        : "text-[#555555] hover:text-[#f0f0f0]"
                    }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-150 ${activeMenu === item.key ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2 bg-[#f0f0f0] text-[#0a0a0a] text-[11px] font-mono uppercase tracking-[0.15em] transition-opacity hover:opacity-80"
              >
                Build Your AI OS
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-5 bg-[#f0f0f0] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-[#f0f0f0] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-[#f0f0f0] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <div onMouseEnter={() => handleMouseEnter(activeMenu)} onMouseLeave={handleMouseLeave}>
              <MegaMenu menuKey={activeMenu} onClose={() => setActiveMenu(null)} />
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-16 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-px border-t border-[#1e1e1e]">
              {navigation.main.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] border-b border-[#1e1e1e] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em]"
                >
                  Build Your AI OS
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
