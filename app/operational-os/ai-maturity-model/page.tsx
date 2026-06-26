import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Maturity Model — Where Does Your Company Stand? | OAI.co",
  description: "Understand your company's AI maturity level and the concrete steps to advance from manual operations to a fully intelligent operating system.",
};

const levels = [
  { level: "1", label: "Manual", desc: "Spreadsheets, email, and manual coordination. Decisions made on incomplete, stale data. High administrative overhead.", current: false },
  { level: "2", label: "AI-Assisted", desc: "Copilot tools helping individuals write, summarize, and search faster. No operational intelligence. Fragmented adoption.", current: false },
  { level: "3", label: "Workflow-Automated", desc: "Rules-based automation for defined, repetitive processes. Brittle when exceptions occur. Limited cross-system intelligence.", current: false },
  { level: "4", label: "Agentic", desc: "AI agents executing repeatable operational work across departments. Human oversight on key decisions. Real-time data access.", current: false },
  { level: "5", label: "Operational OS™", desc: "Full intelligent operating layer. Agents, workflows, knowledge, governance, and data unified into one operating system.", current: true },
];

const signals = [
  "Executives spend hours gathering data for weekly reviews",
  "AI tools are used by individuals but not connected across teams",
  "Manual handoffs between departments create delays and errors",
  "Reporting cycles take days instead of being always current",
  "Compliance and audit documentation is mostly manual",
  "Customer-facing processes depend on individual knowledge",
];

export default function AIMaturityModelPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Operational OS™ / AI Maturity
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            AI Maturity Model
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              Most middle market companies are at Level 2. Operational OS™ takes you to Level 5 — where AI runs operational processes across the entire business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/operational-os/ai-readiness-assessment" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Assess Your Maturity →
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-[#1e1e1e] text-[#555555] font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[#333333] hover:text-[#f0f0f0] transition-colors">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maturity Levels */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">The Five Levels</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Where does your company sit?</h2>
          </div>
          <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
            {levels.map((l) => (
              <div key={l.level} className={`flex items-start gap-8 p-6 ${l.current ? "bg-[#1a1a1a]" : "hover:bg-[#161616]"} transition-colors`}>
                <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-1 w-4">{l.level}</span>
                <div className="flex-1">
                  <h3 className={`font-medium mb-2 ${l.current ? "text-[#f0f0f0]" : "text-[#888888]"}`}>{l.label}</h3>
                  <p className="text-[#555555] text-sm leading-relaxed">{l.desc}</p>
                </div>
                {l.current && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#f0f0f0] flex-shrink-0 border border-[#333333] px-3 py-1">Target</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signals you need OS */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Signals</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">Signs your company is stuck at Level 2</h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                These are the operational patterns that indicate your business is ready — and overdue — for an intelligent operating layer.
              </p>
            </div>
            <ul className="divide-y divide-[#1e1e1e] border border-[#1e1e1e] self-start">
              {signals.map((s, i) => (
                <li key={i} className="flex items-start gap-4 px-5 py-4">
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-[#555555]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to move beyond Level 2?"
        subheadline="Start with an AI Readiness Assessment to map your path to Operational OS™."
        primaryCTA={{ label: "Start Your Assessment", href: "/operational-os/ai-readiness-assessment" }}
        secondaryCTA={{ label: "Talk to a Specialist", href: "/contact" }}
      />
    </>
  );
}
