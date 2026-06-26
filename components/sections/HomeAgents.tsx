"use client";

import Link from "next/link";
import { departmentAgents } from "@/data/agents";

export default function HomeAgents() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Agentic Workforce
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              Build your AI agent team
            </h2>
          </div>
          <Link
            href="/ai-agents"
            className="hidden lg:block font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors flex-shrink-0"
          >
            All 16 agents →
          </Link>
        </div>

        <p className="text-sm text-[#555555] leading-relaxed mb-12 max-w-xl">
          Specialized agents that execute repeatable work across every department — built on Operational OS™.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
          {departmentAgents.map((agent) => (
            <Link
              key={agent.slug}
              href={`/ai-agents/${agent.slug}`}
              className="group bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">
                {agent.category === "department" ? "Department" : "Workflow"} Agent
              </p>
              <h3 className="text-[#f0f0f0] font-medium text-base mb-3 group-hover:opacity-80 transition-opacity">
                {agent.name}
              </h3>
              <p className="text-[#555555] text-xs leading-relaxed">
                {agent.description.slice(0, 100)}...
              </p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 lg:hidden text-center">
          <Link
            href="/ai-agents"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors"
          >
            View all 16 agents →
          </Link>
        </div>
      </div>
    </section>
  );
}
