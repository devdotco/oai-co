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
            ? "bg-[#07111F]/95 backdrop-blur-xl border-b border-[#D7DEE8]/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 font-bold text-xl tracking-[0.1em]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
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
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center gap-1 ${
                      activeMenu === item.key
                        ? "text-white bg-white/10"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${activeMenu === item.key ? "rotate-180 text-[#22D3EE]" : ""}`}
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
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#1D4ED8] hover:bg-[#1e40af] text-white text-sm font-semibold rounded-lg transition-all duration-150 hover:shadow-lg hover:shadow-blue-900/30"
              >
                Build Your AI OS
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#94a3b8] hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
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
            className="fixed inset-0 z-40 bg-[#07111F] pt-16 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-lg"
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
