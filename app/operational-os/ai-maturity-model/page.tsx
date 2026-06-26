import type { Metadata } from "next";
import Link from "next/link";
import MaturityLadderSVG from "@/components/svg/MaturityLadderSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Maturity Model — From Manual to Operational OS™ | OAI.co",
  description:
    "The 5-stage AI maturity model for middle market companies: Manual → AI-Assisted → Workflow-Automated → Agentic → Operational OS™.",
};

const levels = [
  {
    level: 1,
    name: "Manual",
    subtitle: "Spreadsheets, email, and manual coordination",
    description:
      "Operations run on human effort, email threads, spreadsheets, and disconnected point solutions. Every process requires manual coordination. Information lives in people's heads. Decisions are made on incomplete data. Most middle market companies at this level spend 40-60% of operational capacity on administrative work.",
    characteristics: [
      "All reporting assembled manually from multiple systems",
      "Process execution depends entirely on individual initiative",
      "No standardized workflows or documented SOPs",
      "Data lives in silos with no integration between systems",
      "Knowledge exists in email and individual memories",
    ],
    path: "Foundation work: Process documentation, data cleanup, and technology stack rationalization prepare the ground for AI.",
    color: "#475569",
  },
  {
    level: 2,
    name: "AI-Assisted",
    subtitle: "Copilots and suggestions for individual work",
    description:
      "Individual team members use AI tools — ChatGPT, Copilot, AI writing tools — to augment their personal productivity. Work goes faster, but these gains are individual, inconsistent, and don't integrate with business systems. This is where most companies currently sit.",
    characteristics: [
      "Individual AI tool adoption (ChatGPT, Copilot)",
      "Productivity gains are personal, not organizational",
      "AI outputs don't integrate with business systems",
      "No governance or standardization of AI use",
      "Value is real but fragmented and unmeasurable",
    ],
    path: "Key actions: Standardize AI tools, establish usage policies, and begin connecting AI outputs to business systems.",
    color: "#1D4ED8",
  },
  {
    level: 3,
    name: "Workflow-Automated",
    subtitle: "Rules-based automation for defined processes",
    description:
      "Specific, well-defined workflows are automated using rules-based tools — Zapier, Make, or native automation within CRM, ERP, and other systems. Automation handles clear if-then scenarios, but struggles with exceptions, variable inputs, and multi-step processes that require context.",
    characteristics: [
      "Zapier/Make automations for simple if-then workflows",
      "CRM, ERP, or HRIS workflow automation in use",
      "Automation handles defined scenarios only",
      "Exception handling reverts to manual processes",
      "Limited scalability as workflow complexity increases",
    ],
    path: "Key actions: Map your highest-value automation opportunities and build the data infrastructure AI requires.",
    color: "#1D4ED8",
  },
  {
    level: 4,
    name: "Agentic",
    subtitle: "AI agents executing repeatable operational work",
    description:
      "Purpose-built AI agents handle specific operational workflows end-to-end — qualifying leads, processing invoices, answering support questions, generating reports. Agents operate with defined scope and escalate to humans for judgment calls. This is where transformative ROI begins.",
    characteristics: [
      "Specific AI agents deployed for defined workflows",
      "Agents handle exceptions and escalate intelligently",
      "Business systems integrated bidirectionally",
      "Measurable ROI on deployed agent use cases",
      "Early governance framework in place",
    ],
    path: "Key actions: Scale agent deployment across departments, build governance infrastructure, and connect agents into multi-agent workflows.",
    color: "#22D3EE",
  },
  {
    level: 5,
    name: "Operational OS™",
    subtitle: "Full intelligent operating layer",
    description:
      "The full Operational OS™: agents across every department connected through a unified platform, workflows running autonomously with intelligent exception handling, knowledge indexed and accessible, data flowing in real time, and decisions supported by live business intelligence. The business operates with a new kind of organizational intelligence.",
    characteristics: [
      "AI agents deployed across all major departments",
      "Cross-department agent coordination and data sharing",
      "Real-time operational intelligence for leadership",
      "Continuous self-improvement from operational data",
      "AI governance embedded in all operating procedures",
    ],
    path: "Ongoing: Regular optimization, expansion into new areas, and continuous improvement as the OS learns from your business.",
    color: "#F97316",
  },
];

export default function AIMaturityModelPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/operational-os" className="text-[#94a3b8] hover:text-white text-sm">Operational OS™</Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">AI Maturity Model</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The AI Maturity Model
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                From manual operations to Operational OS™
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Five stages define the journey from manual business operations to a fully AI-enabled
                Operational OS™. Most middle market companies are at Level 2. Here's how to advance.
              </p>
              <Link href="/operational-os/ai-readiness-assessment" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm inline-block">
                Assess Your Current Level →
              </Link>
            </div>
            <div className="max-w-lg mx-auto">
              <MaturityLadderSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {levels.map((level) => (
              <div
                key={level.level}
                className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8"
                style={level.level === 5 ? { borderColor: "#F9731630", background: "linear-gradient(135deg, #07111F, #0B1B2B)" } : {}}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                        style={{ backgroundColor: level.color, opacity: level.level < 4 ? 0.7 : 1 }}
                      >
                        {level.level}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-2xl">{level.name}</h3>
                        <p className="text-sm" style={{ color: level.color }}>{level.subtitle}</p>
                      </div>
                      {level.level === 5 && (
                        <span className="ml-auto px-3 py-1 bg-[#F97316]/20 border border-[#F97316]/30 text-[#F97316] text-xs font-bold rounded-full uppercase">
                          Goal
                        </span>
                      )}
                    </div>
                    <p className="text-[#94a3b8] leading-relaxed">{level.description}</p>
                    <div className="mt-6 p-4 bg-[#0B1B2B] rounded-xl border border-[#D7DEE8]/10">
                      <span className="text-[#22D3EE] text-xs font-semibold uppercase tracking-wider">What's next</span>
                      <p className="text-[#94a3b8] text-sm mt-1">{level.path}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {level.characteristics.map((char, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0B1B2B] border border-[#D7DEE8]/10">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: level.color }} />
                        </span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to advance your AI maturity?" subheadline="Start with an AI Readiness Assessment to identify your current level and fastest path forward." dark={false} />
    </>
  );
}
