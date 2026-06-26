"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IndustryData } from "@/data/industries";
import UseCasesSection from "@/components/sections/UseCasesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function IndustryPageTemplate({ industry }: { industry: IndustryData }) {
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
              <Link href="/industries" className="hover:text-[#888888] transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span>{industry.name}</span>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-6">
              Operational OS™ for {industry.name}
            </p>

            <h1 className="text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-6 max-w-4xl">
              AI for {industry.name}
            </h1>
            <p className="text-lg text-[#888888] mb-6 max-w-xl">
              {industry.tagline}
            </p>
            <p className="text-sm text-[#555555] leading-relaxed mb-12 max-w-2xl">
              {industry.heroDescription}
            </p>

            <div className="border-t border-[#1e1e1e] pt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
              >
                Build Your AI OS →
              </Link>
              <Link
                href="/operational-os/ai-readiness-assessment"
                className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors"
              >
                AI Readiness Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                  The Challenge
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">
                What holds {industry.name.toLowerCase()} companies back
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                {industry.description}
              </p>
            </div>
            <ul className="space-y-3 pt-8 lg:pt-20">
              {industry.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-4 border-b border-[#1e1e1e] pb-3">
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#555555]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Solutions
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              How Operational OS™ solves it
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {industry.solutions.map((solution, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] p-8 hover:bg-[#111111] transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[#f0f0f0] font-medium text-base mb-3">{solution.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              AI Agents
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              Agents deployed for {industry.name}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {industry.agents.map((agent, i) => (
              <div
                key={i}
                className="px-4 py-2 border border-[#1e1e1e] text-sm text-[#555555] hover:text-[#f0f0f0] hover:border-[#333333] transition-colors cursor-default"
              >
                {agent}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <UseCasesSection useCases={industry.useCases} title={`${industry.name} use cases`} />

      {/* Outcomes */}
      <OutcomesSection outcomes={industry.outcomes} title={`${industry.name} outcomes`} />

      {/* Integrations */}
      <IntegrationsSection integrations={industry.integrations} title="Integrated with your industry stack" />

      {/* Implementation */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Implementation
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              How we build your {industry.name} AI OS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#1e1e1e]">
            {["Assess", "Architect", "Build", "Adopt", "Operate", "Optimize"].map((phase, i) => (
              <div key={i} className="bg-[#111111] p-6 text-center hover:bg-[#161616] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="text-[#f0f0f0] text-sm">{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={industry.faqs} />

      {/* CTA */}
      <CTASection
        headline={`Build your ${industry.name} AI OS`}
        subheadline={`Talk to a specialist who understands ${industry.name.toLowerCase()} operations.`}
      />
    </>
  );
}
