import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About OAI.co — The AI Operating System for Middle Market Companies",
  description:
    "OAI.co builds Operational OS™ — the AI operating system that transforms how middle market companies run their operations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #22D3EE 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Company</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              We build AI operating systems for middle market companies
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed">
              OAI.co was founded on the belief that the most valuable AI opportunity isn't at the Fortune 500 — it's at the $10M–$500M companies that are too large to run on spreadsheets and too lean to build enterprise AI infrastructure in-house.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Mission</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Making enterprise-grade AI operations accessible to middle market companies
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                Large enterprises have the budget and talent to build AI infrastructure from scratch. Startups
                can move fast with lightweight tools. Middle market companies — those operating at $10M to
                $500M in revenue — are stuck in the middle.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                They're too complex for off-the-shelf tools, but don't have the resources to build custom AI
                infrastructure. Operational OS™ closes that gap — enterprise-grade AI operations, designed
                specifically for middle market complexity and middle market budgets.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  label: "Who we serve",
                  value: "$10M–$500M middle market companies",
                  color: "#22D3EE",
                },
                {
                  label: "What we build",
                  value: "Operational OS™ — the AI operating system for your business",
                  color: "#1D4ED8",
                },
                {
                  label: "How we work",
                  value: "Assessment → Architecture → Build → Adopt → Operate → Optimize",
                  color: "#F97316",
                },
                {
                  label: "Where we operate",
                  value: "Seattle, WA and West Palm Beach, FL — serving clients nationally",
                  color: "#22D3EE",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Beliefs</span>
            <h2 className="text-4xl font-bold text-white mt-3">What we believe about AI in business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((belief, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-8">
                <h3 className="text-white font-bold text-lg mb-3">{belief.title}</h3>
                <p className="text-[#94a3b8] leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl font-bold text-white mt-3">Get in touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Seattle, Washington</h3>
              <p className="text-[#94a3b8]">Seattle, WA</p>
              <div className="mt-6 space-y-3">
                <a href="mailto:info@dev.co" className="block text-[#22D3EE] hover:text-white transition-colors">info@dev.co</a>
                <a href="tel:+12062102954" className="block text-[#94a3b8] hover:text-white transition-colors">+1 (206) 210-2954</a>
              </div>
            </div>
            <div className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">West Palm Beach, Florida</h3>
              <p className="text-[#94a3b8]">West Palm Beach, FL</p>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm">
                  Full contact details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to build your Operational OS™?" subheadline="Schedule a discovery call to get started." dark={false} />
    </>
  );
}
