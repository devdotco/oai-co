import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries — Operational AI for Middle Market Companies | OAI.co",
  description:
    "Operational OS™ for 12 middle market industries including manufacturing, construction, logistics, healthcare, professional services, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Industries</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Built for how your industry works
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed">
              Operational OS™ is configured for the specific workflows, systems, compliance requirements, and
              operational realities of middle market companies in your industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8 hover:border-[#1D4ED8]/50 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{industry.icon}</span>
                  <div>
                    <h2 className="text-white font-bold text-xl mb-1 group-hover:text-[#22D3EE] transition-colors">
                      {industry.name}
                    </h2>
                    <p className="text-[#F97316] text-sm font-medium">{industry.tagline}</p>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{industry.description.slice(0, 140)}...</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industry.agents.slice(0, 3).map((agent, j) => (
                    <span key={j} className="px-2.5 py-1 bg-[#07111F] border border-[#D7DEE8]/10 rounded-md text-xs text-[#94a3b8]">
                      {agent}
                    </span>
                  ))}
                  {industry.agents.length > 3 && (
                    <span className="px-2.5 py-1 bg-[#07111F] border border-[#D7DEE8]/10 rounded-md text-xs text-[#475569]">
                      +{industry.agents.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[#22D3EE] text-sm font-medium">
                  Explore {industry.name}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection headline="Don't see your industry?" subheadline="We build Operational OS™ for any middle market business. Let's talk." dark={true} />
    </>
  );
}
