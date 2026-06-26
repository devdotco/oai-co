import type { Metadata } from "next";
import Link from "next/link";
import OperationalStackSVG from "@/components/svg/OperationalStackSVG";
import DataFlowSVG from "@/components/svg/DataFlowSVG";
import SecurityShieldSVG from "@/components/svg/SecurityShieldSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Operational OS™ — The AI Operating System for Middle Market Companies | OAI.co",
  description:
    "Operational OS™ is the intelligent operating layer that connects your people, workflows, data, tools, and decisions into one AI-enabled business system.",
};

const layers = [
  {
    name: "Decision Layer",
    description: "Real-time intelligence surfaced to the right people at the right time — executive dashboards, operational alerts, forecast models, and board reporting.",
    href: "/operational-os/architecture#decision",
    icon: "📊",
  },
  {
    name: "Agent Layer",
    description: "Specialized AI agents that execute repeatable tasks across every department — from invoice processing to recruiting coordination.",
    href: "/ai-agents",
    icon: "🤖",
  },
  {
    name: "Workflow Layer",
    description: "Your business processes digitized, automated, and monitored — with exception handling, approval routing, and SLA management built in.",
    href: "/operational-os/architecture#workflow",
    icon: "⚙️",
  },
  {
    name: "Knowledge Layer",
    description: "All your business information — policies, documents, procedures, customer data — indexed, searchable, and accessible to agents and people.",
    href: "/operational-os/architecture#knowledge",
    icon: "📚",
  },
  {
    name: "Integration Layer",
    description: "Bidirectional connections to every system in your stack — CRM, ERP, HRIS, support tools, communication platforms, and more.",
    href: "/operational-os/integrations",
    icon: "🔗",
  },
];

export default function OperationalOSPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4ED8 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 text-[#22D3EE] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Operational OS™
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                The intelligent operating layer for your business
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Operational OS™ is the business operating system that connects your people, workflows, data,
                tools, and decisions into one AI-enabled layer. Not a point solution — an operating system
                that learns, adapts, and improves as your business runs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                  Build Your AI OS →
                </Link>
                <Link href="/operational-os/architecture" className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg text-sm">
                  See the Architecture
                </Link>
              </div>
            </div>
            <div className="max-w-lg mx-auto">
              <OperationalStackSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Platform sections */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Architecture</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">Five layers. One intelligent system.</h2>
            <p className="text-[#94a3b8] max-w-xl">
              Operational OS™ is built on five interconnected layers that together create a complete, intelligent operating system for your business.
            </p>
          </div>
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <Link
                key={i}
                href={layer.href}
                className="group flex items-start gap-6 bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8 hover:border-[#1D4ED8]/50 transition-all"
              >
                <span className="text-3xl flex-shrink-0">{layer.icon}</span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {layer.name}
                  </h3>
                  <p className="text-[#94a3b8] leading-relaxed">{layer.description}</p>
                </div>
                <svg className="w-5 h-5 text-[#475569] group-hover:text-[#22D3EE] transition-colors flex-shrink-0 mt-1 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform links */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Platform</span>
            <h2 className="text-4xl font-bold text-white mt-3">Everything Operational OS™</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Readiness Assessment", href: "/operational-os/ai-readiness-assessment", desc: "Evaluate your organization's readiness to deploy AI across five dimensions." },
              { title: "AI Maturity Model", href: "/operational-os/ai-maturity-model", desc: "Understand where you are and how to advance to Operational OS™." },
              { title: "OS Architecture", href: "/operational-os/architecture", desc: "Explore the technical architecture behind the platform." },
              { title: "AI Governance", href: "/operational-os/governance", desc: "Enterprise-grade oversight, controls, and compliance framework." },
              { title: "AI Integrations", href: "/operational-os/integrations", desc: "200+ pre-built integrations for every system in your stack." },
              { title: "Implementation Methodology", href: "/methodology", desc: "The 6-phase process from assessment to always-on operation." },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group block bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6 hover:border-[#1D4ED8]/50 transition-all"
              >
                <h3 className="text-white font-bold mb-2 group-hover:text-[#22D3EE] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Data flow */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Data Architecture</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Your data flows to your agents
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                Operational OS™ connects bidirectionally to every system in your stack. Data flows in —
                normalized, validated, and structured. Agents act on it. Results flow back into your systems.
                The loop is closed automatically.
              </p>
              <Link href="/operational-os/architecture" className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm">
                Explore the architecture →
              </Link>
            </div>
            <DataFlowSVG />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-sm mx-auto">
              <SecurityShieldSVG />
            </div>
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Security</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Enterprise security built in from day one
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                Every Operational OS™ deployment runs on SOC 2 compliant infrastructure with end-to-end
                encryption, role-based access controls, complete audit logging, and data residency controls
                that meet enterprise security requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["SOC 2 Type II", "GDPR Compliant", "End-to-End Encryption", "Zero Data Training", "HIPAA Available", "Access Controls"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                    <svg className="w-4 h-4 text-[#22D3EE] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/operational-os/governance" className="inline-flex items-center gap-2 text-[#22D3EE] font-semibold text-sm">
                  Explore governance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="See Operational OS™ in action for your business." subheadline="Schedule a discovery call to learn how it works." dark={false} />
    </>
  );
}
