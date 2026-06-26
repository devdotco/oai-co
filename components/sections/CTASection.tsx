"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  headline = "Build the operating system your company will run on next.",
  subheadline = "Talk to an Operational OS™ specialist about your business.",
  primaryCTA = { label: "Build Your AI OS", href: "/contact" },
  secondaryCTA = { label: "Explore Operational OS™", href: "/operational-os" },
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-24 ${dark ? "bg-[#07111F]" : "bg-gradient-to-br from-[#1D4ED8] to-[#0891b2]"} relative overflow-hidden`}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {dark && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 text-[#22D3EE] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              Ready to get started?
            </div>
          )}
          <h2 className={`text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight ${dark ? "text-white" : "text-white"}`}>
            {headline}
          </h2>
          <p className={`text-lg mb-10 max-w-xl mx-auto ${dark ? "text-[#94a3b8]" : "text-blue-100"}`}>
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className={`px-8 py-4 font-bold rounded-lg transition-all shadow-xl text-sm ${
                dark
                  ? "bg-[#1D4ED8] hover:bg-[#1e40af] text-white hover:shadow-blue-900/30"
                  : "bg-white text-[#1D4ED8] hover:bg-[#F8FAFC]"
              }`}
            >
              {primaryCTA.label} →
            </Link>
            <Link
              href={secondaryCTA.href}
              className={`px-8 py-4 font-semibold rounded-lg transition-all border text-sm ${
                dark
                  ? "border-[#D7DEE8]/20 text-white hover:border-white/40 hover:bg-white/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {secondaryCTA.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
