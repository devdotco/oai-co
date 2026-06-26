"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            OAI.co — Operational OS™
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            The AI Operating System for Middle Market Companies
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20"
        >
          <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
            Turn scattered tools, workflows, documents, and decisions into one intelligent
            operating layer powered by secure AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              Build Your AI OS →
            </Link>
            <Link
              href="/operational-os"
              className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors"
            >
              Explore Operational OS™
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-10 border-t border-[#1e1e1e] pt-8"
        >
          {[
            { metric: "50+", label: "Deployments" },
            { metric: "12", label: "Industries" },
            { metric: "16", label: "AI Agents" },
            { metric: "70%", label: "Avg. admin reduction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-light text-[#f0f0f0]">{stat.metric}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
