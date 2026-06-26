"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ResourceData } from "@/data/resources";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const categoryColors = {
  tool: { color: "#22D3EE", bg: "#22D3EE20", border: "#22D3EE40", label: "Tool" },
  guide: { color: "#1D4ED8", bg: "#1D4ED820", border: "#1D4ED840", label: "Guide" },
  proof: { color: "#F97316", bg: "#F9731620", border: "#F9731640", label: "Proof" },
};

export default function ResourcePageTemplate({ resource }: { resource: ResourceData }) {
  const cat = categoryColors[resource.category];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4ED8 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Link href="/resources" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
                Resources
              </Link>
              <span className="text-[#475569]">/</span>
              <span className="text-sm" style={{ color: cat.color }}>{cat.label}</span>
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: cat.bg, border: `1px solid ${cat.border}`, color: cat.color }}
            >
              {resource.icon} {cat.label}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {resource.name}
            </h1>
            <p className="text-xl font-medium mb-4" style={{ color: cat.color }}>
              {resource.tagline}
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 max-w-2xl">
              {resource.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold rounded-lg transition-all shadow-lg text-sm"
              >
                Get Access →
              </Link>
              <Link
                href="/operational-os/ai-readiness-assessment"
                className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all text-sm"
              >
                Start AI Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resource.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-4"
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  <svg className="w-3 h-3" style={{ color: cat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-[#94a3b8]">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="prose-oai space-y-12">
              {resource.content.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
                  <p className="text-[#94a3b8] leading-relaxed">{section.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-16 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-white mb-6">Related resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "AI Readiness Checklist", href: "/resources/ai-readiness-checklist" },
              { label: "AI ROI Calculator", href: "/resources/ai-roi-calculator" },
              { label: "Agent Opportunity Scorecard", href: "/resources/agent-opportunity-scorecard" },
              { label: "Operational OS™ Guide", href: "/resources/operational-os-guide" },
              { label: "Executive AI Playbook", href: "/resources/executive-ai-playbook" },
            ]
              .filter((r) => !r.href.includes(resource.slug))
              .slice(0, 4)
              .map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="px-4 py-2 bg-[#07111F] border border-[#D7DEE8]/10 rounded-lg text-sm text-[#94a3b8] hover:text-white hover:border-[#1D4ED8]/40 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={resource.faqs} dark={true} />

      {/* CTA */}
      <CTASection
        headline="Ready to start your AI transformation?"
        subheadline="Talk to an Operational OS™ specialist about your business."
        dark={false}
      />
    </>
  );
}
