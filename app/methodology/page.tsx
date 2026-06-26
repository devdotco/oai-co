import type { Metadata } from "next";
import Link from "next/link";
import WorkflowPipelineSVG from "@/components/svg/WorkflowPipelineSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Implementation Methodology — How We Build Operational OS™ | OAI.co",
  description:
    "Our proven 6-phase implementation methodology: Assess, Architect, Build, Adopt, Operate, Optimize. From first conversation to always-on AI operations.",
};

const phases = [
  {
    id: "assess",
    number: "01",
    title: "Assess",
    subtitle: "AI Readiness and Opportunity Assessment",
    duration: "2–3 weeks",
    description:
      "Every Operational OS™ engagement begins with an honest assessment of where you are — your data quality, process maturity, technology stack, and organizational readiness to adopt AI. We identify your highest-impact opportunities and map your critical blockers.",
    deliverables: [
      "AI Readiness Assessment report (5 dimensions)",
      "Opportunity map with ROI estimates",
      "Data and integration landscape",
      "Organizational readiness profile",
      "Risk and dependency identification",
    ],
    color: "#22D3EE",
  },
  {
    id: "architect",
    number: "02",
    title: "Architect",
    subtitle: "Operational OS™ Design",
    duration: "2–4 weeks",
    description:
      "With assessment in hand, we design your Operational OS™ — the specific agents, workflows, integrations, knowledge architecture, and governance framework that will power your business. The architecture balances quick wins with long-term capability building.",
    deliverables: [
      "Operational OS™ architecture document",
      "Agent specifications and workflow diagrams",
      "Integration design and data flow maps",
      "Governance framework design",
      "12-month implementation roadmap",
    ],
    color: "#1D4ED8",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    subtitle: "Agent and Workflow Development",
    duration: "4–8 weeks",
    description:
      "We build your agents, configure your workflows, establish your integrations, and populate your knowledge layer. Development happens in close collaboration with your team — regular reviews, iterative testing, and continuous refinement against real business scenarios.",
    deliverables: [
      "Configured and tested AI agents",
      "Automated workflow implementations",
      "Live system integrations",
      "Knowledge base setup and population",
      "Governance controls and audit logging",
    ],
    color: "#F97316",
  },
  {
    id: "adopt",
    number: "04",
    title: "Adopt",
    subtitle: "Rollout and Change Management",
    duration: "2–4 weeks",
    description:
      "Deployment is the most underestimated phase. We run structured rollouts with phased team onboarding, hands-on training, change management communication, and feedback loops that ensure your team adopts new workflows rather than working around them.",
    deliverables: [
      "Phased deployment plan by department",
      "User training and enablement sessions",
      "Change management communications",
      "Feedback collection and rapid iteration",
      "Adoption metrics baseline",
    ],
    color: "#22D3EE",
  },
  {
    id: "operate",
    number: "05",
    title: "Operate",
    subtitle: "Managed Operations and Monitoring",
    duration: "Ongoing",
    description:
      "Once deployed, your Operational OS™ requires active management — agent performance monitoring, exception handling, model drift detection, and continuous improvement. Our Managed AI Operations service handles this so you don't have to build an internal AI operations team.",
    deliverables: [
      "24/7 agent performance monitoring",
      "Exception escalation management",
      "Monthly operational review reports",
      "SLA management and incident response",
      "Continuous optimization recommendations",
    ],
    color: "#1D4ED8",
  },
  {
    id: "optimize",
    number: "06",
    title: "Optimize",
    subtitle: "Continuous Improvement and Expansion",
    duration: "Ongoing",
    description:
      "Operational OS™ improves with use. We run quarterly optimization reviews that analyze agent performance, identify workflow improvement opportunities, and propose expansion areas. Each optimization cycle pushes your business closer to full AI-enabled operations.",
    deliverables: [
      "Quarterly performance review",
      "Optimization recommendations",
      "New agent and workflow proposals",
      "Roadmap update and prioritization",
      "ROI measurement and reporting",
    ],
    color: "#F97316",
  },
];

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
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
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Methodology</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              From conversation to always-on AI operations
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed mb-10">
              Our 6-phase methodology is built on what we've learned deploying Operational OS™ across
              middle market companies — what works, what stalls, and how to move from first agent to full
              operating system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                Start Your Assessment →
              </Link>
            </div>
          </div>
          <div className="mt-16">
            <WorkflowPipelineSVG className="max-h-48" />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div
                key={phase.id}
                id={phase.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: `${phase.color}20`, border: `2px solid ${phase.color}40` }}
                    >
                      <span style={{ color: phase.color }}>{phase.number}</span>
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                        style={{ color: phase.color }}
                      >
                        Phase {phase.number} · {phase.duration}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{phase.title}</h2>
                    </div>
                  </div>
                  <p className="text-white text-lg font-medium mb-4">{phase.subtitle}</p>
                  <p className="text-[#94a3b8] leading-relaxed text-lg">{phase.description}</p>
                </div>

                <div
                  className="bg-[#07111F] border rounded-2xl p-8"
                  style={{ borderColor: `${phase.color}20` }}
                >
                  <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                    Phase deliverables
                  </h4>
                  <ul className="space-y-3">
                    {phase.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${phase.color}20`, border: `1px solid ${phase.color}40` }}
                        >
                          <svg className="w-3 h-3" style={{ color: phase.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Differentiation</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">
              What makes this methodology different
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Outcomes first",
                desc: "Every phase is designed around measurable business outcomes — not deployment milestones. We don't declare success until agents are delivering ROI.",
              },
              {
                icon: "🔄",
                title: "Adoption is built in",
                desc: "The majority of AI failures happen during adoption, not implementation. Our methodology treats change management as equal in importance to technical delivery.",
              },
              {
                icon: "📈",
                title: "Designed to expand",
                desc: "We build your first agents with your second and third agents in mind. Infrastructure, governance, and integrations are designed to scale across your full AI roadmap.",
              },
              {
                icon: "🛡️",
                title: "Governance from day one",
                desc: "We configure your governance framework before the first agent goes live — not as an afterthought. Audit trails, approval chains, and monitoring are built into every deployment.",
              },
              {
                icon: "🤝",
                title: "Your team stays in control",
                desc: "Human-in-the-loop design keeps your team in control of every decision that matters. Agents handle execution; your people handle judgment.",
              },
              {
                icon: "⚡",
                title: "Fast to first value",
                desc: "We deliver your first measurable win within the first 90 days — typically a single high-impact agent deployment that demonstrates clear ROI and builds organizational confidence.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to start your AI OS implementation?"
        subheadline="The first step is an AI Readiness Assessment — let's see where you stand."
        dark={false}
      />
    </>
  );
}
