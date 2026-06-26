import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Governance & Security — Enterprise-Grade Controls | OAI.co",
  description: "Enterprise AI governance built into Operational OS™ — SOC 2 compliance, audit logging, role-based access, data residency, and responsible AI controls.",
};

const pillars = [
  {
    title: "Security & Compliance",
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
    title: "Access Control",
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
    title: "Audit & Monitoring",
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
    title: "AI Ethics & Responsibility",
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
    title: "Data Governance",
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
    title: "Operational Oversight",
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

const certifications = ["SOC 2 Type II", "GDPR", "HIPAA", "CCPA", "ISO 27001 Aligned", "AES-256 Encryption", "TLS 1.3", "Zero Data Training"];

const approvalSteps = [
  { step: "01", label: "Agent executes task", desc: "The agent processes the workflow automatically within defined parameters." },
  { step: "02", label: "Threshold check", desc: "Every action is evaluated against governance rules configured for your business." },
  { step: "03", label: "Auto-approve or escalate", desc: "Low-risk, high-confidence actions proceed automatically. Others escalate." },
  { step: "04", label: "Human review and decision", desc: "Your team receives a clear summary, context, and decision options." },
  { step: "05", label: "Audit trail recorded", desc: "Every decision — automatic or human — is logged immutably for compliance." },
];

export default function GovernancePage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Operational OS™ / Governance
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Enterprise-grade controls. Built in from day one.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              Every deployment ships with SOC 2 infrastructure, complete audit logging, and a governance framework designed to satisfy your legal, compliance, and risk teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Discuss Your Requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 bg-[#111111] border-y border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            {certifications.map((cert, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#555555]">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Framework</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Six pillars of AI governance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[#f0f0f0] font-medium mb-4">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs text-[#555555]">
                      <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0 mt-1.5" />
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
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Core Principle</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">Your team stays in control</h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-6">
                Every agent is configured with explicit human-in-the-loop gates — decision points where an agent pauses and escalates to a human when stakes are high, confidence is low, or policy requires review.
              </p>
              <ul className="space-y-2 border border-[#1e1e1e]">
                {[
                  "Contract approvals above defined dollar thresholds",
                  "Customer communications flagged for sensitivity",
                  "Financial transactions exceeding approval limits",
                  "Hiring decisions requiring manager sign-off",
                  "Compliance exceptions requiring legal review",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 px-5 py-3 border-b border-[#1e1e1e] last:border-0">
                    <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-[#555555]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-px">
              {approvalSteps.map((step) => (
                <div key={step.step} className="flex gap-5 bg-[#0a0a0a] border border-[#1e1e1e] p-5 hover:bg-[#161616] transition-colors">
                  <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">{step.step}</span>
                  <div>
                    <div className="text-[#f0f0f0] text-sm font-medium mb-1">{step.label}</div>
                    <div className="text-[#555555] text-xs leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Enterprise security that meets your requirements."
        subheadline="Discuss your compliance needs with our governance team."
        primaryCTA={{ label: "Discuss Your Requirements", href: "/contact" }}
        secondaryCTA={{ label: "View Architecture", href: "/operational-os/architecture" }}
      />
    </>
  );
}
