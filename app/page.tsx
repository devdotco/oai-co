import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="py-24 bg-[#0a0a0a]" id="platform">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                  Platform
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] leading-tight mb-6">
                One intelligent layer for how your company works.
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-10">
                Operational OS™ is the business operating layer that connects your people, workflows, data,
                tools, and decisions into one AI-enabled system. Not a point solution. Not another SaaS tool.
                An operating system for your business.
              </p>
              <div className="grid grid-cols-2 gap-px bg-[#1e1e1e] mb-10">
                {[
                  { title: "Agents", desc: "Specialized AI workers that execute repeatable tasks" },
                  { title: "Workflows", desc: "Automated processes that run without manual coordination" },
                  { title: "Knowledge", desc: "Indexed and searchable business intelligence" },
                  { title: "Governance", desc: "Oversight, controls, and audit trail for every action" },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-[#0a0a0a] p-5 hover:bg-[#111111] transition-colors">
                    <h4 className="text-[#f0f0f0] text-sm font-medium mb-2">{pillar.title}</h4>
                    <p className="text-[#555555] text-xs leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/operational-os"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors"
              >
                Explore Operational OS™ →
              </Link>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-6">
                The Operational OS™ Stack
              </p>
              <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
                {[
                  { layer: "Decision Layer", desc: "Real-time insights and recommendations for leadership" },
                  { layer: "Agent Layer", desc: "Specialized AI agents executing department workflows" },
                  { layer: "Workflow Layer", desc: "Automated processes connecting people and systems" },
                  { layer: "Knowledge Layer", desc: "Indexed business intelligence from all your sources" },
                  { layer: "Data Layer", desc: "Unified connectors to your existing tools and databases" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4">
                    <span className="text-[#f0f0f0] text-sm">{row.layer}</span>
                    <span className="text-[#333333] text-xs text-right max-w-[200px] hidden sm:block">{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic Workforce */}
      <HomeAgents />

      {/* AI Maturity Model */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                  AI Maturity
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] leading-tight mb-6">
                Where are you on the AI maturity ladder?
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-8">
                Most companies are still at Level 2 — using AI as a copilot for individual work. Operational
                OS™ takes you to Level 5, where AI runs operational processes across the entire business.
              </p>
              <Link
                href="/operational-os/ai-maturity-model"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors"
              >
                Explore the AI Maturity Model →
              </Link>
            </div>

            <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
              {[
                { level: "1", label: "Manual", desc: "Spreadsheets, email, and manual coordination" },
                { level: "2", label: "AI-Assisted", desc: "Copilots helping individuals work faster" },
                { level: "3", label: "Workflow-Automated", desc: "Rules-based automation for defined processes" },
                { level: "4", label: "Agentic", desc: "AI agents executing repeatable operational work" },
                { level: "5", label: "Operational OS™", desc: "Full intelligent operating layer", highlight: true },
              ].map((item) => (
                <div
                  key={item.level}
                  className={`flex items-center gap-6 px-5 py-4 ${item.highlight ? "bg-[#1a1a1a]" : ""}`}
                >
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 w-4">{item.level}</span>
                  <span className={`text-sm flex-shrink-0 w-40 ${item.highlight ? "text-[#f0f0f0]" : "text-[#888888]"}`}>
                    {item.label}
                  </span>
                  <span className="text-[#333333] text-xs hidden sm:block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Method */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Methodology
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              From assessment to always-on
            </h2>
            <p className="text-sm text-[#555555] mt-4 max-w-xl leading-relaxed">
              A proven 6-phase implementation methodology that delivers measurable results at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#1e1e1e]">
            {[
              { phase: "Assess", desc: "Map your AI readiness, data, and opportunities." },
              { phase: "Architect", desc: "Design the Operational OS™ for your business." },
              { phase: "Build", desc: "Develop agents, integrate systems, configure workflows." },
              { phase: "Adopt", desc: "Deploy with change management and team training." },
              { phase: "Operate", desc: "Monitor performance and ensure agent reliability." },
              { phase: "Optimize", desc: "Continuously improve and expand your AI OS." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] p-5 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="text-[#f0f0f0] text-sm font-medium mb-2">{item.phase}</h4>
                <p className="text-[#555555] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/methodology"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#555555] hover:text-[#f0f0f0] transition-colors"
            >
              Explore our methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <HomeIndustries />

      {/* Outcomes */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Outcomes
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              What Operational OS™ delivers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {[
              { metric: "70%", label: "Average reduction in operational admin time" },
              { metric: "3×", label: "More output per operational team member" },
              { metric: "50%", label: "Faster close, reporting, and decision cycles" },
              { metric: "100%", label: "Process audit trail and governance coverage" },
            ].map((outcome) => (
              <div
                key={outcome.metric}
                className="bg-[#0a0a0a] p-10 text-center hover:bg-[#111111] transition-colors"
              >
                <div className="text-4xl lg:text-5xl font-light text-[#f0f0f0] mb-3">{outcome.metric}</div>
                <p className="text-[#555555] text-sm leading-relaxed">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Build the operating system your company will run on next."
        subheadline="Talk to an Operational OS™ specialist about your business."
      />
    </>
  );
}
