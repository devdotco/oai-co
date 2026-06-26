"use client";

import Link from "next/link";
import type { ResourceData } from "@/data/resources";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function ResourcePageTemplate({ resource }: { resource: ResourceData }) {
  const categoryLabel = { tool: "Tool", guide: "Guide", proof: "Proof" }[resource.category];

  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Resources / {categoryLabel}
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-6">
            {resource.name}
          </h1>
          <p className="max-w-xl text-sm text-[#555555] leading-relaxed mb-10">{resource.tagline}</p>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
              Get Access →
            </Link>
            <Link href="/operational-os/ai-readiness-assessment" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
              Start AI Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#111111] border-t border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {resource.highlights.map((highlight, i) => (
              <div key={i} className="bg-[#111111] p-5 flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0 mt-2" />
                <span className="text-sm text-[#555555] leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl space-y-12">
            {resource.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-light text-[#f0f0f0] mb-4">{section.heading}</h2>
                <p className="text-sm text-[#555555] leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-12 bg-[#111111] border-t border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-6">Related Resources</p>
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
                <Link key={i} href={r.href} className="border border-[#1e1e1e] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555555] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                  {r.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={resource.faqs} dark={true} />

      <CTASection
        headline="Ready to start your AI transformation?"
        subheadline="Talk to an Operational OS™ specialist about your business."
        primaryCTA={{ label: "Talk to a Specialist", href: "/contact" }}
        secondaryCTA={{ label: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment" }}
      />
    </>
  );
}
