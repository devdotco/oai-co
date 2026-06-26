"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IndustryData } from "@/data/industries";
import UseCasesSection from "@/components/sections/UseCasesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import DataFlowSVG from "@/components/svg/DataFlowSVG";

export default function IndustryPageTemplate({ industry }: { industry: IndustryData }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4ED8 1px, transparent 0)`,
            backgroundSize: "48px 48px",
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
                <Link href="/industries" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
                  Industries
                </Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">{industry.name}</span>
              </div>

              <div className="text-5xl mb-6">{industry.icon}</div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI for {industry.name}
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">{industry.tagline}</p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                {industry.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold rounded-lg transition-all shadow-lg text-sm"
                >
                  Build Your AI OS →
                </Link>
                <Link
                  href="/operational-os/ai-readiness-assessment"
                  className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all text-sm"
                >
                  AI Readiness Assessment
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DataFlowSVG />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">The Challenge</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
                What holds {industry.name.toLowerCase()} companies back
              </h2>
              <p className="text-[#94a3b8] leading-relaxed">
                {industry.description}
              </p>
            </div>
            <ul className="space-y-3 pt-8 lg:pt-0">
              {industry.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-4">
                  <span className="w-6 h-6 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  </span>
                  <span className="text-sm text-[#94a3b8]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              How Operational OS™ solves it
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8 hover:border-[#1D4ED8]/40 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#1D4ED820", border: "1px solid #1D4ED840" }}
                >
                  <span className="text-[#22D3EE] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{solution.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">AI Agents</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              Agents deployed for {industry.name}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {industry.agents.map((agent, i) => (
              <div
                key={i}
                className="px-5 py-3 bg-[#07111F] border border-[#1D4ED8]/30 rounded-xl text-sm text-[#94a3b8] hover:text-white hover:border-[#22D3EE]/40 transition-colors cursor-default"
              >
                {agent}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <UseCasesSection useCases={industry.useCases} title={`${industry.name} use cases`} dark={true} />

      {/* Outcomes */}
      <OutcomesSection outcomes={industry.outcomes} title={`${industry.name} outcomes`} />

      {/* Integrations */}
      <IntegrationsSection integrations={industry.integrations} title="Integrated with your industry stack" />

      {/* Implementation */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Implementation</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              How we build your {industry.name} AI OS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Assess", "Architect", "Build", "Adopt", "Operate", "Optimize"].map((phase, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-5 text-center">
                <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#22D3EE] text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-white text-sm font-semibold">{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={industry.faqs} dark={true} />

      {/* CTA */}
      <CTASection
        headline={`Build your ${industry.name} AI OS`}
        subheadline={`Talk to a specialist who understands ${industry.name.toLowerCase()} operations.`}
        dark={false}
      />
    </>
  );
}
