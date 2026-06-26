"use client";

import Link from "next/link";

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
}: CTASectionProps) {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#1e1e1e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Get started
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-[#f0f0f0] leading-tight mb-6">
            {headline}
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCTA.href}
              className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              {primaryCTA.label} →
            </Link>
            <Link
              href={secondaryCTA.href}
              className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
