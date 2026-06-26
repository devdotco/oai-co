import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Know Before You Build | OAI.co",
  description: "Evaluate your company's AI readiness across data, systems, people, and processes before deploying Operational OS™.",
};

const dimensions = [
  { title: "Data Readiness", desc: "Are your data sources accessible, structured, and connected? We assess data quality, availability, and the integration work required to feed Operational OS™." },
  { title: "Systems Inventory", desc: "What tools, platforms, and databases are in your stack? We map every system that needs to connect to the operating layer." },
  { title: "Process Mapping", desc: "Which workflows are repeatable, rule-based, and high-frequency? We identify the highest-value automation targets." },
  { title: "Team Readiness", desc: "How is your team positioned to work alongside AI? We assess adoption readiness, change management needs, and skill gaps." },
  { title: "Governance Baseline", desc: "What controls, compliance requirements, and approval structures exist today? We map governance requirements into the OS design." },
  { title: "AI Opportunity Scoring", desc: "Every identified opportunity is scored by ROI potential, implementation complexity, and time-to-value — giving you a prioritized roadmap." },
];

const deliverables = [
  "AI Opportunity Map — ranked by ROI and feasibility",
  "System Integration Blueprint — what connects to what",
  "Data Gap Analysis — what needs to be fixed or added",
  "Governance Requirements Matrix — security and compliance needs",
  "Agent Deployment Roadmap — which agents to build and in what order",
  "Investment and Timeline Estimate — phased implementation plan",
];

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Operational OS™ / Assessment
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            AI Readiness Assessment
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              Before deploying AI across your business, you need a clear picture of what you have, what's missing, and where to start. That's what the AI Readiness Assessment delivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Request Your Assessment →
              </Link>
              <Link href="/operational-os/ai-maturity-model" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                View AI Maturity Model
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we assess */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">What We Assess</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Six dimensions of AI readiness</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {dimensions.map((d, i) => (
              <div key={i} className="bg-[#111111] p-6 hover:bg-[#161616] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[#f0f0f0] font-medium mb-3">{d.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Deliverables</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">What you walk away with</h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-8">
                The assessment is not a report that sits in a drawer. It's a working document your team uses to make deployment decisions, prioritize investments, and align stakeholders.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="border border-[#1e1e1e] px-5 py-3 text-center">
                  <div className="text-2xl font-light text-[#f0f0f0]">2–3</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mt-1">Weeks to complete</div>
                </div>
                <div className="border border-[#1e1e1e] px-5 py-3 text-center">
                  <div className="text-2xl font-light text-[#f0f0f0]">6</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mt-1">Deliverable documents</div>
                </div>
                <div className="border border-[#1e1e1e] px-5 py-3 text-center">
                  <div className="text-2xl font-light text-[#f0f0f0]">100%</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mt-1">Specific to your business</div>
                </div>
              </div>
            </div>
            <ul className="divide-y divide-[#1e1e1e] border border-[#1e1e1e] self-start">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-4 px-5 py-4">
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-[#555555]">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start your AI Readiness Assessment."
        subheadline="Two to three weeks. A clear picture of where to start and what to build first."
        primaryCTA={{ label: "Request Your Assessment", href: "/contact" }}
        secondaryCTA={{ label: "View AI Maturity Model", href: "/operational-os/ai-maturity-model" }}
      />
    </>
  );
}
