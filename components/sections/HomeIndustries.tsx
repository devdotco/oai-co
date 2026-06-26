"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { industries } from "@/data/industries";

export default function HomeIndustries() {
  return (
    <section className="py-24 bg-[#0B1B2B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Industries</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              Built for how your industry works
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl">
              Operational OS™ is configured for the specific workflows, systems, and compliance requirements of your industry.
            </p>
          </div>
          <Link
            href="/industries"
            className="hidden lg:inline-flex items-center gap-2 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            All 12 industries
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex items-center gap-4 p-5 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl hover:border-[#1D4ED8]/40 hover:bg-[#0B1B2B] transition-all"
              >
                <span className="text-2xl flex-shrink-0">{industry.icon}</span>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm group-hover:text-[#22D3EE] transition-colors truncate">
                    {industry.name}
                  </div>
                  <div className="text-[#475569] text-xs truncate">{industry.tagline}</div>
                </div>
                <svg className="w-4 h-4 text-[#475569] group-hover:text-[#22D3EE] transition-colors ml-auto flex-shrink-0 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
