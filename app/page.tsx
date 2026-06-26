import type { Metadata } from "next";
import Link from "next/link";
import DepartmentOrbitSVG from "@/components/svg/DepartmentOrbitSVG";
import MaturityLadderSVG from "@/components/svg/MaturityLadderSVG";
import WorkflowPipelineSVG from "@/components/svg/WorkflowPipelineSVG";
import OperationalStackSVG from "@/components/svg/OperationalStackSVG";
import CTASection from "@/components/sections/CTASection";
import HomeHero from "@/components/sections/HomeHero";
import HomeProblem from "@/components/sections/HomeProblem";
import HomeAgents from "@/components/sections/HomeAgents";
import HomeIndustries from "@/components/sections/HomeIndustries";

export const metadata: Metadata = {
  title: "OAI.co — The AI Operating System for Middle Market Companies",
  description:
    "Operational OS™ helps SMB and middle market companies turn scattered tools, workflows, documents, and decisions into one intelligent operating layer powered by secure AI agents.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />

      {/* Introducing Operational OS™ */}
      <section className="py-24 bg-[#07111F]" id="platform">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 text-[#22D3EE] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                Introducing Operational OS™
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                One intelligent layer for how your company works.
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Operational OS™ is the business operating layer that connects your people, workflows, data,
                tools, and decisions into one AI-enabled system. Not a point solution. Not another SaaS tool.
                An operating system for your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Agents", desc: "Specialized AI workers that execute repeatable tasks", icon: "🤖" },
                  { title: "Workflows", desc: "Automated processes that run without manual coordination", icon: "⚙️" },
                  { title: "Knowledge", desc: "Indexed and searchable business intelligence", icon: "📚" },
                  { title: "Governance", desc: "Oversight, controls, and audit trail for every action", icon: "🛡️" },
                ].map((pillar, i) => (
                  <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-5 hover:border-[#1D4ED8]/40 transition-colors">
                    <span className="text-2xl mb-3 block">{pillar.icon}</span>
                    <h4 className="text-white font-semibold text-sm mb-1">{pillar.title}</h4>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/operational-os"
                className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore Operational OS™
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-lg mx-auto">
              <OperationalStackSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Agentic Workforce */}
      <HomeAgents />

      {/* AI Maturity Model */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="w-full max-w-lg mx-auto">
              <MaturityLadderSVG />
            </div>
            <div>
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">AI Maturity</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
                Where are you on the AI maturity ladder?
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                Most companies are still at Level 2 — using AI as a copilot for individual work. Operational
                OS™ takes you to Level 5, where AI runs operational processes across the entire business.
              </p>
              <div className="space-y-3">
                {[
                  { level: "1", label: "Manual", desc: "Spreadsheets, email, and manual coordination" },
                  { level: "2", label: "AI-Assisted", desc: "Copilots helping individuals work faster" },
                  { level: "3", label: "Workflow-Automated", desc: "Rules-based automation for defined processes" },
                  { level: "4", label: "Agentic", desc: "AI agents executing repeatable operational work" },
                  { level: "5", label: "Operational OS™", desc: "Full intelligent operating layer", highlight: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl border text-sm ${
                      item.highlight
                        ? "bg-[#F97316]/10 border-[#F97316]/30"
                        : "bg-[#0B1B2B] border-[#D7DEE8]/10"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${item.highlight ? "bg-[#F97316] text-white" : "bg-[#1D4ED8]/20 text-[#22D3EE]"}`}>
                      {item.level}
                    </span>
                    <span className={`font-semibold ${item.highlight ? "text-[#F97316]" : "text-white"}`}>{item.label}</span>
                    <span className="text-[#94a3b8] text-xs ml-auto">{item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/operational-os/ai-maturity-model"
                  className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore the AI Maturity Model
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Method */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              From assessment to always-on
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto">
              A proven 6-phase implementation methodology that delivers measurable results at every stage.
            </p>
          </div>
          <WorkflowPipelineSVG className="max-h-40" />
          <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { phase: "Assess", desc: "Map your AI readiness, data, and opportunities." },
              { phase: "Architect", desc: "Design the Operational OS™ for your business." },
              { phase: "Build", desc: "Develop agents, integrate systems, configure workflows." },
              { phase: "Adopt", desc: "Deploy with change management and team training." },
              { phase: "Operate", desc: "Monitor performance and ensure agent reliability." },
              { phase: "Optimize", desc: "Continuously improve and expand your AI OS." },
            ].map((item, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center mb-3">
                  <span className="text-[#22D3EE] text-xs font-bold">{i + 1}</span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{item.phase}</h4>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm hover:gap-3 transition-all"
            >
              Explore our methodology
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <HomeIndustries />

      {/* Outcomes */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Outcomes</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              What Operational OS™ delivers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "70%", label: "Average reduction in operational admin time" },
              { metric: "3x", label: "More output per operational team member" },
              { metric: "50%", label: "Faster close, reporting, and decision cycles" },
              { metric: "100%", label: "Process audit trail and governance coverage" },
            ].map((outcome, i) => (
              <div
                key={i}
                className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8 text-center hover:border-[#1D4ED8]/40 transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3">{outcome.metric}</div>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Build the operating system your company will run on next."
        subheadline="Talk to an Operational OS™ specialist about your business."
        dark={false}
      />
    </>
  );
}
