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

export default function AgentPageTemplate({ agent }: { agent: AgentData }) {
  const capabilityBenefits = agent.capabilities.map((cap) => ({
    title: cap,
    description: "Automated capability that eliminates manual effort and improves consistency across your team.",
  }));

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.15em] text-[#333333]">
              <Link href="/ai-agents" className="hover:text-[#888888] transition-colors">
                AI Agents
              </Link>
              <span>/</span>
              <span>{agent.category === "department" ? "Department" : "Workflow"}</span>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-6">
              {agent.category === "department" ? "Department Agent" : "Workflow Agent"}
            </p>

            <h1 className="text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-6 max-w-4xl">
              {agent.name}
            </h1>
            <p className="text-lg text-[#888888] mb-6 max-w-xl">
              {agent.tagline}
            </p>
            <p className="text-sm text-[#555555] leading-relaxed mb-12 max-w-2xl">
              {agent.heroDescription}
            </p>

            <div className="border-t border-[#1e1e1e] pt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
              >
                Deploy This Agent →
              </Link>
              <Link
                href="/operational-os/ai-readiness-assessment"
                className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors"
              >
                Take AI Readiness Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="border-b border-[#1e1e1e] pb-8 mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                The Problem
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">
              Why this agent exists
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed text-lg">{agent.problem}</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <BenefitsGrid
        benefits={capabilityBenefits}
        title={`What the ${agent.name} handles`}
        subtitle="A complete set of automated capabilities that eliminate manual work and improve operational consistency."
      />

      {/* Use cases */}
      <UseCasesSection
        useCases={agent.useCases}
        title="How companies deploy this agent"
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
      />

      {/* Governance */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                  Security &amp; Governance
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">
                Built with enterprise-grade oversight
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-8">
                Every OAI agent operates within a strict governance framework — human-in-the-loop
                approval points, complete audit logging, access controls aligned to your existing
                permissions, and monitoring that surfaces anomalies before they become problems.
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
                  <li key={i} className="flex items-center gap-3 text-sm text-[#555555]">
                    <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
              {[
                { title: "Zero Trust Access", desc: "Every request authenticated and authorized" },
                { title: "Full Audit Log", desc: "Every action recorded and traceable" },
                { title: "Human Oversight", desc: "Configurable approval points at every stage" },
                { title: "Data Privacy", desc: "Your data never trains our models" },
              ].map((item, i) => (
                <div key={i} className="bg-[#111111] p-6 hover:bg-[#161616] transition-colors">
                  <h4 className="text-[#f0f0f0] text-sm font-medium mb-2">{item.title}</h4>
                  <p className="text-[#555555] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={agent.faqs} />

      {/* CTA */}
      <CTASection
        headline={`Ready to deploy your ${agent.name}?`}
        subheadline="Talk to an Operational OS™ specialist about building your AI agent workforce."
      />
    </>
  );
}
