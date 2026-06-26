import type { Metadata } from "next";
import Link from "next/link";
import OperationalStackSVG from "@/components/svg/OperationalStackSVG";
import DataFlowSVG from "@/components/svg/DataFlowSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Operational OS™ Architecture — Five-Layer AI Platform | OAI.co",
  description:
    "The technical architecture of Operational OS™ — five interconnected layers: Knowledge, Workflow, Agent, Data, Decision, and Security.",
};

export default function ArchitecturePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/operational-os" className="text-[#94a3b8] hover:text-white text-sm">Operational OS™</Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">Architecture</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Operational OS™ Architecture
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                Five interconnected layers. One intelligent system.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Operational OS™ is built on five interconnected layers that together create a complete
                intelligent operating system — from the data layer at the foundation to the decision layer
                at the top. Each layer is independently configurable and collectively powerful.
              </p>
            </div>
            <OperationalStackSVG />
          </div>
        </div>
      </section>

      {/* Layers */}
      <section className="py-24 bg-[#0B1B2B]" id="layers">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {[
              {
                id: "decision",
                layer: "5",
                name: "Decision Layer",
                color: "#22D3EE",
                desc: "The Decision Layer surfaces intelligence to the right people at the right time — executive dashboards, operational alerts, forecast models, anomaly detection, and board reporting. It aggregates signal from across the OS and presents it in actionable form.",
                components: ["Executive intelligence dashboard", "KPI monitoring and alerting", "Forecast models", "Board reporting automation", "Anomaly detection"],
              },
              {
                id: "agent",
                layer: "4",
                name: "Agent Layer",
                color: "#1D4ED8",
                desc: "The Agent Layer is your AI workforce — specialized agents that execute repeatable tasks across every department. Agents operate within defined scopes, escalate intelligently, and improve over time. The Agent Layer is where operational work gets done.",
                components: ["Department agents (Sales, Finance, HR, etc.)", "Workflow agents (Invoice, Proposal, etc.)", "Multi-agent coordination", "Human-in-the-loop gates", "Agent monitoring and governance"],
              },
              {
                id: "workflow",
                layer: "3",
                name: "Workflow Layer",
                color: "#F97316",
                desc: "The Workflow Layer is your process engine — business workflows digitized, automated, and monitored. Approval routing, exception handling, SLA management, and cross-department handoffs run through the Workflow Layer automatically.",
                components: ["SOP execution engine", "Approval workflow routing", "Exception detection and escalation", "Cross-department coordination", "Process performance analytics"],
              },
              {
                id: "knowledge",
                layer: "2",
                name: "Knowledge Layer",
                color: "#22D3EE",
                desc: "The Knowledge Layer is your indexed business information — policies, procedures, customer data, market intelligence, and operational documentation — structured, searchable, and accessible to every agent and every person in your organization.",
                components: ["Document ingestion and indexing", "Semantic search", "Knowledge gap detection", "Freshness monitoring", "Expert routing"],
              },
              {
                id: "data",
                layer: "1",
                name: "Data & Integration Layer",
                color: "#1D4ED8",
                desc: "The foundation of the OS — bidirectional integrations to every system in your stack, data normalization and validation, real-time event streaming, and the secure data infrastructure that enables every layer above it.",
                components: ["200+ pre-built integrations", "Real-time and batch data sync", "Data normalization and mapping", "Event streaming infrastructure", "Data privacy and residency controls"],
              },
            ].map((layer, i) => (
              <div key={layer.id} id={layer.id} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: `${layer.color}20`, border: `2px solid ${layer.color}40`, color: layer.color }}
                    >
                      L{layer.layer}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{layer.name}</h2>
                  </div>
                  <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">{layer.desc}</p>
                  <ul className="space-y-3">
                    {layer.components.map((comp, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${layer.color}20`, border: `1px solid ${layer.color}40` }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                        </span>
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  style={{ borderColor: `${layer.color}20` }}>
                  <div className="text-6xl font-bold mb-4" style={{ color: `${layer.color}30` }}>
                    L{layer.layer}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{layer.name}</div>
                  <div className="text-sm" style={{ color: layer.color }}>
                    Layer {layer.layer} of 5
                  </div>
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: layer.color, opacity: 0.3 }} />
                  <div className="mt-6 text-[#475569] text-sm">
                    {layer.components.length} core components
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data flow */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Data Flow</span>
            <h2 className="text-4xl font-bold text-white mt-3">How data moves through the OS</h2>
          </div>
          <DataFlowSVG className="max-h-64" />
        </div>
      </section>

      <CTASection headline="See the architecture in action for your business." dark={false} />
    </>
  );
}
