import type { Metadata } from "next";
import Link from "next/link";
import { departmentAgents, workflowAgents } from "@/data/agents";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Agents — Specialized AI Workers for Every Department | OAI.co",
  description: "16 specialized AI agents that execute repeatable work across sales, finance, operations, HR, and more — built on Operational OS™.",
};

export default function AIAgentsPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">AI Agents</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Your AI agent workforce.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              Specialized agents that execute repeatable work across every department — built on Operational OS™ with full governance, audit logging, and human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Department Agents */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Department Agents</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">By business function</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {departmentAgents.map((agent) => (
              <Link key={agent.slug} href={`/ai-agents/${agent.slug}`} className="group bg-[#111111] p-6 hover:bg-[#1a1a1a] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">Department</p>
                <h3 className="text-[#f0f0f0] font-medium mb-3 group-hover:opacity-80 transition-opacity">{agent.name}</h3>
                <p className="text-[#555555] text-xs leading-relaxed mb-5">{agent.tagline}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Agents */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Workflow Agents</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">By business process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {workflowAgents.map((agent) => (
              <Link key={agent.slug} href={`/ai-agents/${agent.slug}`} className="group bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">Workflow</p>
                <h3 className="text-[#f0f0f0] font-medium mb-3 group-hover:opacity-80 transition-opacity">{agent.name}</h3>
                <p className="text-[#555555] text-xs leading-relaxed mb-5">{agent.tagline}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Build your AI agent workforce."
        subheadline="Start with an AI Readiness Assessment to identify which agents to deploy first."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment" }}
      />
    </>
  );
}
