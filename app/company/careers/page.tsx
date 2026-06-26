import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Careers at OAI.co — Join the Operational OS™ Team",
  description:
    "Build the future of AI operations for middle market companies. Explore open roles at OAI.co.",
};

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F97316 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Careers</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Build the future of AI operations
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed">
              We're building Operational OS™ — the AI operating system for middle market companies. If you
              want to work on something that genuinely changes how businesses run, we want to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Why OAI */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Why OAI.co</span>
            <h2 className="text-4xl font-bold text-white mt-3">What it's like to work here</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Real impact",
                desc: "You see your work in production, changing how real businesses run. No six-month spec cycles. Direct line from your work to client outcomes.",
              },
              {
                icon: "🤖",
                title: "Frontier AI work",
                desc: "We work with the most advanced AI systems available. Every project pushes what's possible with agentic AI in production business environments.",
              },
              {
                icon: "📈",
                title: "A growing market",
                desc: "Middle market AI is one of the largest underserved opportunities in enterprise software. We're early, and the market is moving fast.",
              },
              {
                icon: "🏗️",
                title: "Build from scratch",
                desc: "We're not maintaining legacy code. You're building new systems — agents, workflows, integrations — that didn't exist before.",
              },
              {
                icon: "🧠",
                title: "Learn constantly",
                desc: "Every engagement is a new industry, a new tech stack, a new set of problems. You'll build a broader operational AI skill set than anywhere else.",
              },
              {
                icon: "🤝",
                title: "Small team, high trust",
                desc: "We operate with a small, senior team. High trust, high autonomy, high accountability. Your judgment matters here.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-6">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Open Roles</span>
            <h2 className="text-4xl font-bold text-white mt-3">Current openings</h2>
          </div>
          <div className="space-y-4">
            {[
              { title: "AI Systems Architect", type: "Full-time", location: "Seattle, WA or Remote", dept: "Engineering" },
              { title: "AI Implementation Consultant", type: "Full-time", location: "Seattle, WA or Remote", dept: "Delivery" },
              { title: "Business Process Analyst", type: "Full-time", location: "Seattle, WA", dept: "Delivery" },
              { title: "Enterprise Account Executive", type: "Full-time", location: "Remote", dept: "Sales" },
              { title: "AI Operations Manager", type: "Full-time", location: "Seattle, WA or Remote", dept: "Operations" },
            ].map((role, i) => (
              <div key={i} className="flex items-center justify-between bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6 hover:border-[#1D4ED8]/50 transition-all group">
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-[#22D3EE] transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[#475569] text-sm">{role.dept}</span>
                    <span className="text-[#475569] text-sm">·</span>
                    <span className="text-[#475569] text-sm">{role.location}</span>
                    <span className="text-[#475569] text-sm">·</span>
                    <span className="text-[#22D3EE] text-sm">{role.type}</span>
                  </div>
                </div>
                <Link href="/contact" className="px-5 py-2 border border-[#D7DEE8]/20 text-white text-sm font-medium rounded-lg hover:bg-[#1D4ED8] hover:border-[#1D4ED8] transition-all">
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl">
            <p className="text-[#94a3b8] text-sm">
              Don't see a role that fits? We're always interested in exceptional people.{" "}
              <Link href="/contact" className="text-[#22D3EE] hover:text-white transition-colors">
                Send us a note →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to build the future of AI operations?" subheadline="Reach out to info@dev.co with your background and why you're interested." dark={false} />
    </>
  );
}
