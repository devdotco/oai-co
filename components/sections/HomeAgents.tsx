"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { departmentAgents } from "@/data/agents";

export default function HomeAgents() {
  return (
    <section className="py-24 bg-[#0B1B2B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Agentic Workforce</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              Build your AI agent team
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl">
              Specialized agents that execute repeatable work across every department — built on Operational OS™.
            </p>
          </div>
          <Link
            href="/ai-agents"
            className="hidden lg:inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            All 16 agents
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentAgents.map((agent, i) => {
            const colorMap: Record<string, string> = { cyan: "#22D3EE", blue: "#1D4ED8", orange: "#F97316" };
            const accent = colorMap[agent.color] || "#22D3EE";
            return (
              <motion.div
                key={agent.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/ai-agents/${agent.slug}`}
                  className="block bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-6 hover:border-[#1D4ED8]/50 hover:-translate-y-1 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{agent.icon}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: accent, backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
                    >
                      AI Agent
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{agent.description.slice(0, 120)}...</p>
                  <div className="flex items-center gap-1 mt-5 text-sm font-medium" style={{ color: accent }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm"
          >
            View all 16 agents →
          </Link>
        </div>
      </div>
    </section>
  );
}
