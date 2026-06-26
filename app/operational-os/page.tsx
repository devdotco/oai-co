import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Operational OS™ — The AI Operating System for Middle Market Companies | OAI.co",
  description: "Operational OS™ is the intelligent operating layer that connects your people, workflows, data, tools, and decisions into one AI-enabled business system.",
};

const layers = [
  { name: "Decision Layer", description: "Real-time intelligence surfaced to the right people at the right time — executive dashboards, operational alerts, forecast models, and board reporting.", href: "/operational-os/architecture#decision" },
  { name: "Agent Layer", description: "Specialized AI agents that execute repeatable tasks across every department — from invoice processing to recruiting coordination.", href: "/ai-agents" },
  { name: "Workflow Layer", description: "Your business processes digitized, automated, and monitored — with exception handling, approval routing, and SLA management built in.", href: "/operational-os/architecture#workflow" },
  { name: "Knowledge Layer", description: "All your business information — policies, documents, procedures, customer data — indexed, searchable, and accessible to agents and people.", href: "/operational-os/architecture#knowledge" },
  { name: "Integration Layer", description: "200+ pre-built connectors to your ERP, CRM, HRIS, accounting, project management, and communication platforms.", href: "/operational-os/integrations" },
];

const pillars = [
  { title: "AI Readiness Assessment", desc: "Evaluate your data, systems, and processes to identify the highest-value AI opportunities.", href: "/operational-os/ai-readiness-assessment" },
  { title: "AI Maturity Model", desc: "Understand where your company sits on the AI maturity curve and what it takes to reach the next level.", href: "/operational-os/ai-maturity-model" },
  { title: "Agentic Architecture", desc: "The five-layer architecture that powers Operational OS™ — from data ingestion to executive decisions.", href: "/operational-os/architecture" },
  { title: "AI Governance", desc: "Enterprise-grade security, compliance, and human oversight built into every layer of the OS.", href: "/operational-os/governance" },
  { title: "AI Integrations", desc: "200+ native integrations connecting Operational OS™ to the tools your business already uses.", href: "/operational-os/integrations" },
];

export default function OperationalOSPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Platform
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Operational OS™
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              The intelligent operating layer that connects your people, workflows, data, tools, and decisions into one AI-enabled business system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Build Your AI OS →
              </Link>
              <Link href="/operational-os/ai-readiness-assessment" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                AI Readiness Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Five Layers */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Architecture</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Five layers. One operating system.</h2>
          </div>
          <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
            {layers.map((layer, i) => (
              <Link key={i} href={layer.href} className="group flex items-start justify-between gap-8 p-6 hover:bg-[#1a1a1a] transition-colors">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium mb-2 group-hover:opacity-80 transition-opacity">{layer.name}</h3>
                    <p className="text-[#555555] text-sm leading-relaxed max-w-xl">{layer.description}</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-[#333333] group-hover:text-[#888888] flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pillars */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Platform</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Everything you need to run on AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {pillars.map((pillar, i) => (
              <Link key={i} href={pillar.href} className="group bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[#f0f0f0] font-medium mb-3 group-hover:opacity-80 transition-opacity">{pillar.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-4">{pillar.desc}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Outcomes</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">What Operational OS™ delivers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {[
              { metric: "70%", label: "Reduction in operational admin time" },
              { metric: "3×", label: "More output per team member" },
              { metric: "50%", label: "Faster close and reporting cycles" },
              { metric: "100%", label: "Audit trail and governance coverage" },
            ].map((o) => (
              <div key={o.metric} className="bg-[#111111] p-10 text-center hover:bg-[#161616] transition-colors">
                <div className="text-4xl lg:text-5xl font-light text-[#f0f0f0] mb-3">{o.metric}</div>
                <p className="text-[#555555] text-sm leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to build your Operational OS™?"
        subheadline="Talk to a specialist about deploying AI across your business."
      />
    </>
  );
}
