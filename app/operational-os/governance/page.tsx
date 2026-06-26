import type { Metadata } from "next";
import Link from "next/link";
import SecurityShieldSVG from "@/components/svg/SecurityShieldSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Governance & Security — Enterprise-Grade Controls | OAI.co",
  description:
    "Enterprise AI governance built into Operational OS™ — SOC 2 compliance, audit logging, role-based access, data residency, and responsible AI controls.",
};

const pillars = [
  {
    icon: "🛡️",
    title: "Security & Compliance",
    color: "#22D3EE",
    items: [
      "SOC 2 Type II certified infrastructure",
      "End-to-end encryption (AES-256 at rest, TLS 1.3 in transit)",
      "GDPR and CCPA compliance",
      "HIPAA Business Associate Agreement available",
      "ISO 27001 alignment",
      "Annual third-party penetration testing",
    ],
  },
  {
    icon: "🔑",
    title: "Access Control",
    color: "#1D4ED8",
    items: [
      "Role-based access control (RBAC)",
      "Attribute-based access policies",
      "SSO integration (SAML 2.0, OIDC)",
      "Multi-factor authentication enforcement",
      "Privileged access management",
      "Session management and timeout controls",
    ],
  },
  {
    icon: "📋",
    title: "Audit & Monitoring",
    color: "#F97316",
    items: [
      "Immutable audit log for every agent action",
      "Real-time anomaly detection",
      "User activity monitoring",
      "Agent performance and drift monitoring",
      "SLA tracking and alerting",
      "Exportable compliance reports",
    ],
  },
  {
    icon: "⚖️",
    title: "AI Ethics & Responsibility",
    color: "#22D3EE",
    items: [
      "Human-in-the-loop for high-stakes decisions",
      "AI output validation and confidence thresholds",
      "Bias monitoring for automated decisions",
      "Transparent model documentation",
      "Escalation path for agent uncertainty",
      "Regular model behavior reviews",
    ],
  },
  {
    icon: "🏗️",
    title: "Data Governance",
    color: "#1D4ED8",
    items: [
      "Data residency controls by region",
      "Zero data training on your data",
      "Data classification and tagging",
      "Retention policy enforcement",
      "Data lineage tracking",
      "Right-to-deletion support",
    ],
  },
  {
    icon: "🔄",
    title: "Operational Oversight",
    color: "#F97316",
    items: [
      "Governance council template",
      "AI change management process",
      "Incident response playbooks",
      "Agent rollback capabilities",
      "Policy enforcement automation",
      "Quarterly governance reviews",
    ],
  },
];

export default function GovernancePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/operational-os" className="text-[#94a3b8] hover:text-white text-sm">Operational OS™</Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">Governance</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Governance & Security
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                Enterprise-grade controls. Built in from day one.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Operational OS™ is designed for middle market companies that need enterprise-grade security
                and governance — not bolt-on compliance after the fact. Every deployment ships with SOC 2
                infrastructure, complete audit logging, and a governance framework that satisfies your legal,
                compliance, and risk teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                  Discuss Your Requirements →
                </Link>
              </div>
            </div>
            <div className="max-w-sm mx-auto">
              <SecurityShieldSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="py-10 bg-[#0B1B2B] border-y border-[#D7DEE8]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#475569]">
            {["SOC 2 Type II", "GDPR", "HIPAA", "CCPA", "ISO 27001 Aligned", "AES-256 Encryption", "TLS 1.3", "Zero Data Training"].map((cert, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Framework</span>
            <h2 className="text-4xl font-bold text-white mt-3">Six pillars of AI governance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8" style={{ borderColor: `${pillar.color}15` }}>
                <span className="text-3xl block mb-4">{pillar.icon}</span>
                <h3 className="text-white font-bold text-xl mb-6">{pillar.title}</h3>
                <ul className="space-y-2.5">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: pillar.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human in the loop */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Core Principle</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Your team stays in control
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                Every Operational OS™ agent is configured with explicit human-in-the-loop gates — decision
                points where an agent pauses and escalates to a human when the stakes are high, confidence
                is low, or policy requires review.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                You define the thresholds. The OS enforces them automatically, maintaining a complete audit
                trail of every decision, escalation, and override.
              </p>
              <ul className="space-y-3">
                {[
                  "Contract approvals above defined dollar thresholds",
                  "Customer communications flagged for sensitivity",
                  "Financial transactions exceeding approval limits",
                  "Hiring decisions requiring manager sign-off",
                  "Compliance exceptions requiring legal review",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <svg className="w-4 h-4 text-[#22D3EE] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { step: "01", label: "Agent executes task", desc: "The agent processes the workflow automatically within defined parameters." },
                { step: "02", label: "Threshold check", desc: "Every action is evaluated against governance rules configured for your business." },
                { step: "03", label: "Auto-approve or escalate", desc: "Low-risk, high-confidence actions proceed automatically. Others escalate." },
                { step: "04", label: "Human review and decision", desc: "Your team receives a clear summary, context, and decision options." },
                { step: "05", label: "Audit trail recorded", desc: "Every decision — automatic or human — is logged immutably for compliance." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-5">
                  <span className="text-[#22D3EE] font-bold text-sm flex-shrink-0 mt-0.5">{step.step}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{step.label}</div>
                    <div className="text-[#475569] text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Enterprise security that meets your requirements." subheadline="Discuss your compliance needs with our team." dark={false} />
    </>
  );
}
