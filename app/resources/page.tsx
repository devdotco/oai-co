import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/data/resources";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Resources — AI Tools, Guides, and Proof | OAI.co",
  description: "AI readiness tools, implementation guides, and proof points for middle market AI transformation.",
};

export default function ResourcesPage() {
  const tools = resources.filter((r) => r.category === "tool");
  const guides = resources.filter((r) => r.category === "guide");
  const proof = resources.filter((r) => r.category === "proof");

  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Resources</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Tools, guides, and proof.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              Everything you need to evaluate, plan, and justify an AI transformation for your middle market business.
            </p>
          </div>
        </div>
      </section>

      {[
        { label: "Tools", items: tools },
        { label: "Guides", items: guides },
        { label: "Proof", items: proof },
      ].map((group) => (
        <section key={group.label} className="py-16 bg-[#111111] border-t border-[#1e1e1e] first:border-t-0">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="border-b border-[#1e1e1e] pb-8 mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">{group.label}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
              {group.items.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group bg-[#111111] p-6 hover:bg-[#1a1a1a] transition-colors"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{group.label}</p>
                  <h3 className="text-[#f0f0f0] font-medium mb-3 group-hover:opacity-80 transition-opacity">{resource.name}</h3>
                  <p className="text-[#555555] text-xs leading-relaxed mb-5">{resource.tagline}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Access →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to start your AI transformation?"
        subheadline="Begin with the AI Readiness Assessment to get your personalized roadmap."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment" }}
      />
    </>
  );
}
