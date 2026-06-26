import type { Metadata } from "next";
import Link from "next/link";
import IntegrationGridSVG from "@/components/svg/IntegrationGridSVG";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Integrations — 200+ Connections for Operational OS™ | OAI.co",
  description:
    "Connect Operational OS™ to every system in your stack. 200+ pre-built integrations with CRM, ERP, HRIS, finance, communication, and productivity tools.",
};

const categories = [
  {
    name: "CRM & Sales",
    color: "#22D3EE",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Close", "Monday Sales"],
  },
  {
    name: "ERP & Finance",
    color: "#1D4ED8",
    tools: ["NetSuite", "SAP", "QuickBooks", "Xero", "Sage", "Microsoft Dynamics"],
  },
  {
    name: "HR & Recruiting",
    color: "#F97316",
    tools: ["Workday", "BambooHR", "Greenhouse", "Lever", "ADP", "Rippling"],
  },
  {
    name: "Communication",
    color: "#22D3EE",
    tools: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Zoom", "Webex"],
  },
  {
    name: "Project & Operations",
    color: "#1D4ED8",
    tools: ["Asana", "Monday.com", "Jira", "Linear", "ClickUp", "Notion"],
  },
  {
    name: "Document & Storage",
    color: "#F97316",
    tools: ["SharePoint", "Google Drive", "Dropbox", "Box", "DocuSign", "Adobe Sign"],
  },
  {
    name: "Support & Service",
    color: "#22D3EE",
    tools: ["Zendesk", "Intercom", "Freshdesk", "ServiceNow", "Salesforce Service", "HubSpot Service"],
  },
  {
    name: "Data & Analytics",
    color: "#1D4ED8",
    tools: ["Snowflake", "Databricks", "Tableau", "Power BI", "Looker", "BigQuery"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/operational-os" className="text-[#94a3b8] hover:text-white text-sm">Operational OS™</Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">Integrations</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Connects to everything in your stack
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                200+ pre-built integrations. Bidirectional data flow.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Operational OS™ plugs into the systems your business already runs on — CRM, ERP, HRIS,
                finance, communication, and productivity tools. Data flows in both directions: your systems
                feed the OS; agents write results back to your systems of record.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                  Ask About Your Stack →
                </Link>
                <Link href="/resources/integration-library" className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg text-sm">
                  Full Integration List
                </Link>
              </div>
            </div>
            <IntegrationGridSVG />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0B1B2B] border-y border-[#D7DEE8]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Pre-built integrations" },
              { value: "<1 day", label: "Typical connection time" },
              { value: "Real-time", label: "Bidirectional sync" },
              { value: "Custom", label: "API & webhook support" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#475569] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration categories */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">By Category</span>
            <h2 className="text-4xl font-bold text-white mt-3">Integration library</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-6" style={{ borderColor: `${cat.color}20` }}>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </h3>
                <ul className="space-y-2">
                  {cat.tools.map((tool, j) => (
                    <li key={j} className="text-sm text-[#94a3b8]">{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Architecture</span>
            <h2 className="text-4xl font-bold text-white mt-3">How integration works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔌",
                title: "Connect in minutes",
                desc: "Use pre-built connectors to authenticate and configure your tools. Most integrations take less than 30 minutes to configure — no code required.",
                color: "#22D3EE",
              },
              {
                icon: "🔄",
                title: "Data flows bidirectionally",
                desc: "Data from your systems flows into the OS in real time. Agents write results, updates, and records back to your systems of record automatically.",
                color: "#1D4ED8",
              },
              {
                icon: "📊",
                title: "Monitor everything",
                desc: "Every integration has a health dashboard showing sync status, error rates, latency, and data freshness. Alerts fire before problems affect operations.",
                color: "#F97316",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8" style={{ borderColor: `${item.color}20` }}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom integrations */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Custom</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Don't see your system? We'll build it.
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                Every company has at least one custom or legacy system. Our integration team builds custom
                connectors for proprietary systems, legacy applications, and niche tools that don't have
                native integrations.
              </p>
              <ul className="space-y-3">
                {[
                  "REST and SOAP API integration",
                  "Database direct connection (read/write)",
                  "File-based integration (SFTP, S3)",
                  "Event-driven webhooks",
                  "Legacy system connectors",
                  "Custom middleware development",
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
            <div className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Integration SLAs</h3>
              <div className="space-y-4">
                {[
                  { type: "Pre-built connectors", sla: "Same day activation" },
                  { type: "Configuration-only custom", sla: "1–3 business days" },
                  { type: "Light custom integration", sla: "5–10 business days" },
                  { type: "Complex legacy integration", sla: "2–4 weeks" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#D7DEE8]/10 last:border-0">
                    <span className="text-[#94a3b8] text-sm">{row.type}</span>
                    <span className="text-[#22D3EE] text-sm font-medium">{row.sla}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Connect Operational OS™ to your entire stack." subheadline="Tell us your systems — we'll show you what's possible." dark={false} />
    </>
  );
}
