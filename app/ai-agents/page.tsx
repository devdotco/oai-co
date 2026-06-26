import type { Metadata } from "next";
import Link from "next/link";
import { departmentAgents, workflowAgents } from "@/data/agents";
import AgentNetworkSVG from "@/components/svg/AgentNetworkSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Agents — Build Your Agentic Workforce | OAI.co",
  description:
    "16 specialized AI agents that execute repeatable work across every department. Department agents and workflow agents built on Operational OS™.",
};

export default function AIAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #22D3EE 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 text-[#22D3EE] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                Agentic Workforce
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build your AI agent workforce
              </h1>
              <p className="text-[#94a3b8] text-xl leading-relaxed mb-10">
                Secure, specialized AI agents that execute repeatable work across every department. Built on
                Operational OS™ with enterprise-grade governance and human oversight at every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                  Deploy Your First Agent →
                </Link>
                <Link href="/operational-os/ai-readiness-assessment" className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg text-sm">
                  AI Readiness Assessment
                </Link>
              </div>
            </div>
            <div className="max-w-lg mx-auto">
              <AgentNetworkSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Department Agents */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Department Agents</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              One agent for every department
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl">
              Department agents handle the operational work of each business function — continuously, accurately, and at scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentAgents.map((agent) => {
              const colorMap: Record<string, string> = { cyan: "#22D3EE", blue: "#1D4ED8", orange: "#F97316" };
              const accent = colorMap[agent.color] || "#22D3EE";
              return (
                <Link
                  key={agent.slug}
                  href={`/ai-agents/${agent.slug}`}
                  className="group block bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-6 hover:border-[#1D4ED8]/50 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{agent.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{agent.tagline}</p>
                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: accent }}>
                    Explore
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Agents */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Workflow Agents</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Agents that run specific workflows end-to-end
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl">
              Workflow agents handle specific high-volume processes — from proposal generation to invoice processing to recruiting coordination.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowAgents.map((agent) => {
              const colorMap: Record<string, string> = { cyan: "#22D3EE", blue: "#1D4ED8", orange: "#F97316" };
              const accent = colorMap[agent.color] || "#22D3EE";
              return (
                <Link
                  key={agent.slug}
                  href={`/ai-agents/${agent.slug}`}
                  className="group block bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-6 hover:border-[#F97316]/40 hover:-translate-y-1 transition-all"
                >
                  <span className="text-3xl block mb-4">{agent.icon}</span>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#F97316] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{agent.tagline}</p>
                  <div className="flex items-center gap-1 text-sm font-medium" style={{ color: accent }}>
                    Explore
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to build your AI agent workforce?" subheadline="Deploy your first agent in weeks, not months." dark={false} />
    </>
  );
}
