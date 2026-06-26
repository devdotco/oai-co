import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About OAI.co — The AI Operating System for Middle Market Companies",
  description: "OAI.co builds Operational OS™ — the AI operating system that transforms how middle market companies run their operations.",
};

const beliefs = [
  {
    title: "AI should augment human judgment, not replace it",
    desc: "Every Operational OS™ deployment keeps humans in control of decisions that matter. Agents handle execution; your people handle judgment. Human-in-the-loop design isn't a compromise — it's a feature.",
  },
  {
    title: "Adoption is more important than implementation",
    desc: "The majority of AI failures happen during rollout, not development. Our methodology treats change management as equal in importance to technical delivery — because a system nobody uses isn't a system.",
  },
  {
    title: "Governance comes first",
    desc: "We configure your governance framework before the first agent goes live. Audit trails, access controls, and escalation paths are built in from day one — not retrofitted after something goes wrong.",
  },
  {
    title: "Outcomes are the only metric that matters",
    desc: "We don't declare success when agents are deployed. We declare success when they're delivering measurable business results. ROI is the goal, not deployment milestones.",
  },
  {
    title: "AI should connect your systems, not add to them",
    desc: "The best AI deployments integrate deeply with the systems your team already uses. We don't ask you to swap your stack — we make your existing stack intelligent.",
  },
  {
    title: "Complexity should decrease, not increase",
    desc: "When Operational OS™ is working right, your team's daily experience gets simpler — not more complicated. AI should absorb operational complexity, not transfer it to the user.",
  },
];

const facts = [
  { label: "Who we serve", value: "$10M–$500M middle market companies" },
  { label: "What we build", value: "Operational OS™ — the AI operating system for your business" },
  { label: "How we work", value: "Assessment → Architecture → Build → Adopt → Operate → Optimize" },
  { label: "Where we operate", value: "Seattle, WA and West Palm Beach, FL — serving clients nationally" },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Company</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            We build AI operating systems for middle market companies.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              OAI.co was founded on the belief that the most valuable AI opportunity isn't at the Fortune 500 — it's at the $10M–$500M companies that are too large to run on spreadsheets and too lean to build enterprise AI infrastructure in-house.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Mission</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">Making enterprise-grade AI accessible to middle market companies</h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-5">
                Large enterprises have the budget and talent to build AI infrastructure from scratch. Startups can move fast with lightweight tools. Middle market companies — those operating at $10M to $500M in revenue — are stuck in the middle.
              </p>
              <p className="text-sm text-[#555555] leading-relaxed">
                They're too complex for off-the-shelf tools, but don't have the resources to build custom AI infrastructure. Operational OS™ closes that gap — enterprise-grade AI operations, designed specifically for middle market complexity and middle market budgets.
              </p>
            </div>
            <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e] self-start">
              {facts.map((fact, i) => (
                <div key={i} className="px-6 py-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-2">{fact.label}</p>
                  <p className="text-sm text-[#888888]">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Our Beliefs</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">What we believe about AI in business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {beliefs.map((belief, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <h3 className="text-[#f0f0f0] font-medium mb-3">{belief.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Contact</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Get in touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#1e1e1e]">
            <div className="bg-[#111111] p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">Seattle, Washington</p>
              <p className="text-sm text-[#555555] mb-5">1420 5th Ave, Suite 2200<br />Seattle, WA 98101</p>
              <a href="mailto:info@dev.co" className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors block">info@dev.co</a>
              <a href="tel:+12062102954" className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors block mt-1">+1 (206) 210-2954</a>
            </div>
            <div className="bg-[#111111] p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">West Palm Beach, Florida</p>
              <p className="text-sm text-[#555555] mb-5">1700 Palm Beach Lakes Blvd<br />West Palm Beach, FL 33401</p>
              <Link href="/contact" className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors">Full contact details →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to build your Operational OS™?"
        subheadline="Schedule a discovery call to get started."
        primaryCTA={{ label: "Book a Discovery Call", href: "/contact" }}
        secondaryCTA={{ label: "View Methodology", href: "/methodology" }}
      />
    </>
  );
}
