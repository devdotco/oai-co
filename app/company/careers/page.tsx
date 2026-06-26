import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Careers at OAI.co — Join the Operational OS™ Team",
  description: "Build the future of AI operations for middle market companies. Explore open roles at OAI.co.",
};

const whyOai = [
  {
    title: "Real impact",
    desc: "You see your work in production, changing how real businesses run. No six-month spec cycles. Direct line from your work to client outcomes.",
  },
  {
    title: "Frontier AI work",
    desc: "We work with the most advanced AI systems available. Every project pushes what's possible with agentic AI in production business environments.",
  },
  {
    title: "A growing market",
    desc: "Middle market AI is one of the largest underserved opportunities in enterprise software. We're early, and the market is moving fast.",
  },
  {
    title: "Build from scratch",
    desc: "We're not maintaining legacy code. You're building new systems — agents, workflows, integrations — that didn't exist before.",
  },
  {
    title: "Learn constantly",
    desc: "Every engagement is a new industry, a new tech stack, a new set of problems. You'll build a broader operational AI skill set than anywhere else.",
  },
  {
    title: "Small team, high trust",
    desc: "We operate with a small, senior team. High trust, high autonomy, high accountability. Your judgment matters here.",
  },
];

const roles = [
  { title: "AI Systems Architect", type: "Full-time", location: "Seattle, WA or Remote", dept: "Engineering" },
  { title: "AI Implementation Consultant", type: "Full-time", location: "Seattle, WA or Remote", dept: "Delivery" },
  { title: "Business Process Analyst", type: "Full-time", location: "Seattle, WA", dept: "Delivery" },
  { title: "Enterprise Account Executive", type: "Full-time", location: "Remote", dept: "Sales" },
  { title: "AI Operations Manager", type: "Full-time", location: "Seattle, WA or Remote", dept: "Operations" },
];

export default function CareersPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Careers</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Build the future of AI operations.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10">
            <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
              We're building Operational OS™ — the AI operating system for middle market companies. If you want to work on something that genuinely changes how businesses run, we want to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Why OAI */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Why OAI.co</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">What it's like to work here</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {whyOai.map((item, i) => (
              <div key={i} className="bg-[#111111] p-6 hover:bg-[#1a1a1a] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[#f0f0f0] font-medium mb-3">{item.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Open Roles</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Current openings</h2>
          </div>
          <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e] mb-8">
            {roles.map((role, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-5 hover:bg-[#111111] transition-colors group">
                <div>
                  <h3 className="text-[#f0f0f0] font-medium group-hover:opacity-80 transition-opacity">{role.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="font-mono text-[10px] text-[#333333]">{role.dept}</span>
                    <span className="font-mono text-[10px] text-[#2a2a2a]">·</span>
                    <span className="font-mono text-[10px] text-[#333333]">{role.location}</span>
                    <span className="font-mono text-[10px] text-[#2a2a2a]">·</span>
                    <span className="font-mono text-[10px] text-[#555555]">{role.type}</span>
                  </div>
                </div>
                <Link href="/contact" className="px-4 py-2 border border-[#1e1e1e] font-mono text-[10px] uppercase tracking-[0.15em] text-[#555555] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors flex-shrink-0">
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#555555]">
            Don't see a role that fits? We're always interested in exceptional people.{" "}
            <Link href="/contact" className="text-[#888888] hover:text-[#f0f0f0] transition-colors">
              Send us a note →
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to build the future of AI operations?"
        subheadline="Reach out with your background and why you're interested."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
