import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Operational OS™ Architecture — Five-Layer AI Platform | OAI.co",
  description: "The technical architecture of Operational OS™ — five interconnected layers: Knowledge, Workflow, Agent, Data, and Decision.",
};

const layers = [
  {
    id: "decision",
    layer: "5",
    name: "Decision Layer",
    desc: "Surfaces intelligence to the right people at the right time — executive dashboards, operational alerts, forecast models, anomaly detection, and board reporting. Aggregates signal from across the OS and presents it in actionable form.",
    components: ["Executive intelligence dashboard", "KPI monitoring and alerting", "Forecast models", "Board reporting automation", "Anomaly detection"],
  },
  {
    id: "agent",
    layer: "4",
    name: "Agent Layer",
    desc: "Your AI workforce — specialized agents that execute repeatable tasks across every department. Agents operate within defined scopes, escalate intelligently, and improve over time.",
    components: ["Department agents (Sales, Finance, HR, etc.)", "Workflow agents (Invoice, Proposal, etc.)", "Multi-agent coordination", "Human-in-the-loop gates", "Agent monitoring and governance"],
  },
  {
    id: "workflow",
    layer: "3",
    name: "Workflow Layer",
    desc: "Your process engine — business workflows digitized, automated, and monitored. Approval routing, exception handling, SLA management, and cross-department handoffs run automatically.",
    components: ["SOP execution engine", "Approval workflow routing", "Exception detection and escalation", "Cross-department coordination", "Process performance analytics"],
  },
  {
    id: "knowledge",
    layer: "2",
    name: "Knowledge Layer",
    desc: "Your indexed business information — policies, procedures, customer data, market intelligence, and operational documentation — structured, searchable, and accessible to every agent and person in your organization.",
    components: ["Document ingestion and indexing", "Semantic search", "Knowledge gap detection", "Freshness monitoring", "Expert routing"],
  },
  {
    id: "data",
    layer: "1",
    name: "Data & Integration Layer",
    desc: "The foundation — bidirectional integrations to every system in your stack, data normalization and validation, real-time event streaming, and secure data infrastructure that enables every layer above it.",
    components: ["200+ pre-built integrations", "Real-time and batch data sync", "Data normalization and mapping", "Event streaming infrastructure", "Data privacy and residency controls"],
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Operational OS™ / Architecture
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Five layers. One intelligent system.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              Operational OS™ is built on five interconnected layers that together create a complete intelligent operating system. Each layer is independently configurable and collectively powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                See It For Your Business →
              </Link>
              <Link href="/operational-os" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                Back to Operational OS™
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">The Layers</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">From data to decisions</h2>
          </div>
          <div className="space-y-px">
            {layers.map((layer) => (
              <div key={layer.id} id={layer.id} className="grid lg:grid-cols-3 gap-8 bg-[#111111] border border-[#1e1e1e] p-8 hover:bg-[#161616] transition-colors">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-2">Layer {layer.layer}</p>
                  <h3 className="text-[#f0f0f0] text-lg font-medium">{layer.name}</h3>
                </div>
                <p className="text-[#555555] text-sm leading-relaxed">{layer.desc}</p>
                <ul className="space-y-2">
                  {layer.components.map((comp, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs text-[#444444]">
                      <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="See the architecture in action for your business."
        subheadline="We map every layer to your specific systems, workflows, and team structure."
        primaryCTA={{ label: "Schedule a Technical Review", href: "/contact" }}
        secondaryCTA={{ label: "View Integrations", href: "/operational-os/integrations" }}
      />
    </>
  );
}
