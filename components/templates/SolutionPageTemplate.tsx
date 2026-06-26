"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SolutionData } from "@/data/solutions";
import UseCasesSection from "@/components/sections/UseCasesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import WorkflowPipelineSVG from "@/components/svg/WorkflowPipelineSVG";

export default function SolutionPageTemplate({ solution }: { solution: SolutionData }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F97316 1px, transparent 0)`,
            backgroundSize: "44px 44px",
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
                <Link href="/solutions" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
                  Solutions
                </Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#F97316] text-sm">{solution.category}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-xs font-semibold mb-6">
                {solution.icon} {solution.category}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {solution.name}
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">{solution.tagline}</p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                {solution.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold rounded-lg transition-all shadow-lg text-sm"
                >
                  Build Your AI OS →
                </Link>
                <Link
                  href="/resources/ai-roi-calculator"
                  className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all text-sm"
                >
                  Calculate Your ROI
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <WorkflowPipelineSVG />
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
              Why this matters
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed">{solution.problem}</p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              What {solution.name} handles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-5 hover:border-[#1D4ED8]/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#22D3EE] mb-4" />
                <p className="text-sm text-[#94a3b8]">{cap}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <UseCasesSection useCases={solution.useCases} title="How companies use it" dark={false} />

      {/* Outcomes */}
      <OutcomesSection outcomes={solution.outcomes} title={`${solution.name} outcomes`} />

      {/* Integrations */}
      <IntegrationsSection integrations={solution.integrations} title="Integrates with your stack" />

      {/* Process */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Implementation</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
              From conversation to deployed solution
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { phase: "Week 1-2", title: "AI Readiness Assessment", desc: "Map your systems, data sources, and workflow requirements." },
              { phase: "Week 3-4", title: "Solution Architecture", desc: "Design the agent workflows, integrations, and governance framework." },
              { phase: "Week 5-8", title: "Build & Configure", desc: "Develop agents, connect integrations, and configure approval workflows." },
              { phase: "Week 9-10", title: "Test & Refine", desc: "Validate performance, tune responses, and train your team." },
              { phase: "Week 11-12", title: "Deploy & Adopt", desc: "Phased rollout with change management and user training." },
              { phase: "Ongoing", title: "Monitor & Optimize", desc: "Continuous performance monitoring, improvement, and expansion." },
            ].map((step, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6">
                <div className="text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-3">{step.phase}</div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-[#94a3b8] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={solution.faqs} dark={true} />

      {/* CTA */}
      <CTASection
        headline={`Ready to implement ${solution.name}?`}
        subheadline="Talk to an Operational OS™ specialist about your business requirements."
        dark={false}
      />
    </>
  );
}
