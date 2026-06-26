import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions — Practical AI by Business Function | OAI.co",
  description: "12 practical AI solutions across leadership, revenue, operations, finance, and HR for middle market companies.",
};

const categories = ["Leadership", "Revenue", "Operations", "Finance & Admin", "People & Support"];

export default function SolutionsPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Solutions</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Practical AI by business function.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              Purpose-built AI solutions for every core business function — from executive intelligence to AP automation. Each solution is implemented on the Operational OS™ platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {categories.map((cat) => {
            const catSolutions = solutions.filter((s) => s.category === cat);
            if (!catSolutions.length) return null;
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <div className="border-b border-[#1e1e1e] pb-6 mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">{cat}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
                  {catSolutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className="group bg-[#111111] p-6 hover:bg-[#1a1a1a] transition-colors"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{cat}</p>
                      <h3 className="text-[#f0f0f0] font-medium mb-3 group-hover:opacity-80 transition-opacity">{solution.name}</h3>
                      <p className="text-[#555555] text-xs leading-relaxed mb-5">{solution.tagline}</p>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] group-hover:text-[#888888] transition-colors">Explore →</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        headline="Find the right solution for your business."
        subheadline="Start with an AI Readiness Assessment to identify which solutions to deploy first."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment" }}
      />
    </>
  );
}
