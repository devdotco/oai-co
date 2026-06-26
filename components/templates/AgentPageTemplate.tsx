"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { AgentData } from "@/data/agents";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import UseCasesSection from "@/components/sections/UseCasesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import AgentNetworkSVG from "@/components/svg/AgentNetworkSVG";

export default function AgentPageTemplate({ agent }: { agent: AgentData }) {
  const colorMap: Record<string, string> = {
    cyan: "#22D3EE",
    blue: "#1D4ED8",
    orange: "#F97316",
  };
  const accentColor = colorMap[agent.color] || "#22D3EE";

  const capabilityBenefits = agent.capabilities.map((cap, i) => ({
    title: cap,
    description: `Automated capability that eliminates manual effort and improves consistency across your team.`,
    icon: ["⚡", "🔄", "📊", "🎯", "🔍", "📋", "🚀", "✅"][i % 8],
  }));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #22D3EE 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Link href="/ai-agents" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
                  AI Agents
                </Link>
                <span className="text-[#475569]">/</span>
                <span className="text-sm" style={{ color: accentColor }}>
                  {agent.category === "department" ? "Department" : "Workflow"}
                </span>
              </div>

              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-4xl">{agent.icon}</span>
                <div
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}40` }}
                >
                  {agent.category === "department" ? "Department Agent" : "Workflow Agent"}
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {agent.name}
              </h1>
              <p className="text-xl font-medium mb-4" style={{ color: accentColor }}>
                {agent.tagline}
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                {agent.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-900/30 text-sm"
                >
                  Deploy This Agent →
                </Link>
                <Link
                  href="/operational-os/ai-readiness-assessment"
                  className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all text-sm"
                >
                  Take AI Readiness Assessment
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-lg mx-auto lg:mx-0"
            >
              <AgentNetworkSVG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">The Problem</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
              Why this agent exists
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed">{agent.problem}</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <BenefitsGrid
        benefits={capabilityBenefits}
        title={`What the ${agent.name} handles`}
        subtitle="A complete set of automated capabilities that eliminate manual work and improve operational consistency."
        dark={true}
      />

      {/* Use cases */}
      <UseCasesSection
        useCases={agent.useCases}
        title="How companies deploy this agent"
        dark={false}
      />

      {/* Outcomes */}
      <OutcomesSection
        outcomes={agent.outcomes}
        title={`${agent.name} outcomes`}
        subtitle="Measured results from Operational OS™ deployments."
      />

      {/* Integrations */}
      <IntegrationsSection
        integrations={agent.integrations}
        title={`The ${agent.name} connects to your stack`}
        dark={true}
      />

      {/* Governance */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Security & Governance</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
                Built with enterprise-grade oversight
              </h2>
              <p className="text-[#94a3b8] leading-relaxed mb-8">
                Every OAI agent operates within a strict governance framework — human-in-the-loop approval
                points, complete audit logging, access controls aligned to your existing permissions, and
                monitoring that surfaces anomalies before they become problems.
              </p>
              <ul className="space-y-3">
                {[
                  "Role-based access controls",
                  "Complete audit trail on every action",
                  "Human approval gates on sensitive workflows",
                  "Anomaly detection and alerting",
                  "Data residency and privacy controls",
                  "SOC 2 compliant infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <span className="w-5 h-5 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🔐", title: "Zero Trust Access", desc: "Every request authenticated and authorized" },
                { icon: "📋", title: "Full Audit Log", desc: "Every action recorded and traceable" },
                { icon: "👁️", title: "Human Oversight", desc: "Configurable approval points at every stage" },
                { icon: "🔒", title: "Data Privacy", desc: "Your data never trains our models" },
              ].map((item, i) => (
                <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-6">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-[#94a3b8] text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={agent.faqs} dark={true} />

      {/* CTA */}
      <CTASection
        headline={`Ready to deploy your ${agent.name}?`}
        subheadline="Talk to an Operational OS™ specialist about building your AI agent workforce."
        dark={false}
      />
    </>
  );
}
