"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SolutionData } from "@/data/solutions";
import UseCasesSection from "@/components/sections/UseCasesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function SolutionPageTemplate({ solution }: { solution: SolutionData }) {
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
              <Link href="/solutions" className="hover:text-[#888888] transition-colors">
                Solutions
              </Link>
              <span>/</span>
              <span>{solution.category}</span>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-6">
              {solution.category}
            </p>

            <h1 className="text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-6 max-w-4xl">
              {solution.name}
            </h1>
            <p className="text-lg text-[#888888] mb-6 max-w-xl">
              {solution.tagline}
            </p>
            <p className="text-sm text-[#555555] leading-relaxed mb-12 max-w-2xl">
              {solution.heroDescription}
            </p>

            <div className="border-t border-[#1e1e1e] pt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
              >
                Build Your AI OS →
              </Link>
              <Link
                href="/resources/ai-roi-calculator"
                className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors"
              >
                Calculate Your ROI
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
              Why this matters
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">{solution.problem}</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              What {solution.name} handles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {solution.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors"
              >
                <div className="w-6 h-px bg-[#333333] mb-5" />
                <p className="text-sm text-[#555555] leading-relaxed">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <UseCasesSection useCases={solution.useCases} title="How companies use it" />

      {/* Outcomes */}
      <OutcomesSection outcomes={solution.outcomes} title={`${solution.name} outcomes`} />

      {/* Integrations */}
      <IntegrationsSection integrations={solution.integrations} title="Integrates with your stack" />

      {/* Process */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Implementation
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              From conversation to deployed solution
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {[
              { phase: "Week 1–2", title: "AI Readiness Assessment", desc: "Map your systems, data sources, and workflow requirements." },
              { phase: "Week 3–4", title: "Solution Architecture", desc: "Design the agent workflows, integrations, and governance framework." },
              { phase: "Week 5–8", title: "Build & Configure", desc: "Develop agents, connect integrations, and configure approval workflows." },
              { phase: "Week 9–10", title: "Test & Refine", desc: "Validate performance, tune responses, and train your team." },
              { phase: "Week 11–12", title: "Deploy & Adopt", desc: "Phased rollout with change management and user training." },
              { phase: "Ongoing", title: "Monitor & Optimize", desc: "Continuous performance monitoring, improvement, and expansion." },
            ].map((step, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-3">{step.phase}</p>
                <h4 className="text-[#f0f0f0] text-sm font-medium mb-2">{step.title}</h4>
                <p className="text-[#555555] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={solution.faqs} />

      {/* CTA */}
      <CTASection
        headline={`Ready to implement ${solution.name}?`}
        subheadline="Talk to an Operational OS™ specialist about your business requirements."
      />
    </>
  );
}
