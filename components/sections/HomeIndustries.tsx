"use client";

import Link from "next/link";
import { industries } from "@/data/industries";

export default function HomeIndustries() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Industries
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              Built for how your industry works
            </h2>
          </div>
          <Link
            href="/industries"
            className="hidden lg:block font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors flex-shrink-0"
          >
            All 12 industries →
          </Link>
        </div>

        <p className="text-sm text-[#555555] leading-relaxed mb-12 max-w-xl">
          Operational OS™ is configured for the specific workflows, systems, and compliance requirements of your industry.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center justify-between bg-[#111111] px-5 py-4 hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="min-w-0">
                <div className="text-[#f0f0f0] text-sm group-hover:opacity-80 transition-opacity truncate">
                  {industry.name}
                </div>
                <div className="font-mono text-[10px] text-[#333333] truncate mt-0.5">{industry.tagline}</div>
              </div>
              <svg className="w-4 h-4 text-[#333333] group-hover:text-[#888888] transition-colors ml-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
