import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries — Operational AI for Middle Market Companies | OAI.co",
  description: "Operational OS™ for 12 middle market industries including manufacturing, construction, logistics, healthcare, professional services, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Industries</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Built for how your industry works.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              Operational OS™ is configured for the specific workflows, systems, compliance requirements, and operational realities of middle market companies in your industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-[#111111] p-8 hover:bg-[#1a1a1a] transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">Industry</p>
                <h2 className="text-[#f0f0f0] font-medium text-lg mb-2 group-hover:opacity-80 transition-opacity">{industry.name}</h2>
                <p className="text-[#444444] text-xs mb-5">{industry.tagline}</p>
                <p className="text-[#555555] text-xs leading-relaxed mb-6">{industry.description.slice(0, 120)}…</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industry.agents.slice(0, 3).map((agent, j) => (
                    <span key={j} className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#333333] border border-[#1e1e1e] px-2 py-1">{agent}</span>
                  ))}
                  {industry.agents.length > 3 && (
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#2a2a2a] border border-[#1e1e1e] px-2 py-1">+{industry.agents.length - 3} more</span>
                  )}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Don't see your industry?"
        subheadline="We build Operational OS™ for any middle market business. Let's talk."
        primaryCTA={{ label: "Talk to a Specialist", href: "/contact" }}
        secondaryCTA={{ label: "View Methodology", href: "/methodology" }}
      />
    </>
  );
}
