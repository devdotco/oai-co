import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Implementation Methodology — From Assessment to Always-On | OAI.co",
  description: "OAI's proven 6-phase methodology takes you from AI readiness assessment to a fully deployed, continuously optimized Operational OS™.",
};

const phases = [
  {
    id: "workshop",
    phase: "Phase 1",
    title: "Strategy Workshop",
    duration: "Week 1–2",
    desc: "Executive alignment on AI priorities, business goals, and success metrics. We map your current state and define what Level 5 AI maturity looks like for your specific business.",
    outputs: ["AI Opportunity Map", "Executive Alignment Document", "Success Metrics Framework"],
  },
  {
    id: "roadmap",
    phase: "Phase 2",
    title: "AI Roadmap",
    duration: "Week 3–4",
    desc: "Full AI Readiness Assessment across data, systems, people, and processes. We produce your complete implementation roadmap with sequenced priorities.",
    outputs: ["AI Readiness Assessment", "System Integration Blueprint", "Phased Implementation Roadmap"],
  },
  {
    id: "sprint",
    phase: "Phase 3",
    title: "Prototype Sprint",
    duration: "Week 5–8",
    desc: "Rapid build of your first two to three agents and core workflow automations. You see real results within weeks, not months.",
    outputs: ["Deployed Agent Prototypes", "Integration Architecture", "Governance Framework v1"],
  },
  {
    id: "rollout",
    phase: "Phase 4",
    title: "Department Rollout",
    duration: "Week 9–14",
    desc: "Phased deployment across departments with change management, team training, and feedback loops. Governance controls activated and monitored.",
    outputs: ["Trained Team", "Full Department Deployment", "Governance Dashboard Live"],
  },
  {
    id: "scaling",
    phase: "Phase 5",
    title: "Enterprise Scaling",
    duration: "Month 4–6",
    desc: "Expansion across remaining departments, agents, and workflows. The Operational OS™ becomes the operational backbone of the business.",
    outputs: ["Cross-Department AI OS", "Performance Reporting", "Optimization Backlog"],
  },
  {
    id: "managed",
    phase: "Phase 6",
    title: "Managed AI Operations",
    duration: "Ongoing",
    desc: "Continuous monitoring, improvement, and expansion of your AI OS. New agents added as business needs evolve. Performance tracked against outcomes.",
    outputs: ["Monthly Performance Reports", "Continuous Improvement", "New Agent Deployment"],
  },
];

export default function MethodologyPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Methodology
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            From assessment to always-on.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              A proven 6-phase process that takes you from where you are today to a fully deployed, continuously optimized Operational OS™ — with measurable results at every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Start the Process →
              </Link>
              <Link href="/operational-os/ai-readiness-assessment" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                AI Readiness Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">The Process</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Six phases to Operational OS™</h2>
          </div>
          <div className="space-y-px">
            {phases.map((p) => (
              <div key={p.id} id={p.id} className="grid lg:grid-cols-3 gap-8 bg-[#111111] border border-[#1e1e1e] p-8 hover:bg-[#161616] transition-colors">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-2">{p.phase} · {p.duration}</p>
                  <h3 className="text-[#f0f0f0] text-lg font-medium">{p.title}</h3>
                </div>
                <p className="text-[#555555] text-sm leading-relaxed">{p.desc}</p>
                <ul className="space-y-2">
                  {p.outputs.map((o, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-[#444444]">
                      <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {[
              { metric: "2–3 wks", label: "To first working prototype" },
              { metric: "12 wks", label: "Full department deployment" },
              { metric: "50+", label: "Companies deployed" },
              { metric: "100%", label: "Governance from day one" },
            ].map((s) => (
              <div key={s.metric} className="bg-[#0a0a0a] p-10 text-center hover:bg-[#111111] transition-colors">
                <div className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-3">{s.metric}</div>
                <p className="text-[#555555] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to start the process?"
        subheadline="We begin every engagement with an AI Readiness Assessment — so you know exactly what to build and in what order."
        primaryCTA={{ label: "Book a Strategy Workshop", href: "/contact" }}
        secondaryCTA={{ label: "View Operational OS™", href: "/operational-os" }}
      />
    </>
  );
}
