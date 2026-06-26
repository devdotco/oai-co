import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Integrations — 200+ Connections for Operational OS™ | OAI.co",
  description: "Connect Operational OS™ to every system in your stack. 200+ pre-built integrations with CRM, ERP, HRIS, finance, communication, and productivity tools.",
};

const categories = [
  { name: "CRM & Sales", tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Close", "Monday Sales"] },
  { name: "ERP & Finance", tools: ["NetSuite", "SAP", "QuickBooks", "Xero", "Sage", "Microsoft Dynamics"] },
  { name: "HR & Recruiting", tools: ["Workday", "BambooHR", "Greenhouse", "Lever", "ADP", "Rippling"] },
  { name: "Communication", tools: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Zoom", "Webex"] },
  { name: "Project & Operations", tools: ["Asana", "Monday.com", "Jira", "Linear", "ClickUp", "Notion"] },
  { name: "Document & Storage", tools: ["SharePoint", "Google Drive", "Dropbox", "Box", "DocuSign", "Adobe Sign"] },
  { name: "Support & Service", tools: ["Zendesk", "Intercom", "Freshdesk", "ServiceNow", "Salesforce Service", "HubSpot Service"] },
  { name: "Data & Analytics", tools: ["Snowflake", "Databricks", "Tableau", "Power BI", "Looker", "BigQuery"] },
];

const slas = [
  { type: "Pre-built connectors", sla: "Same day activation" },
  { type: "Configuration-only custom", sla: "1–3 business days" },
  { type: "Light custom integration", sla: "5–10 business days" },
  { type: "Complex legacy integration", sla: "2–4 weeks" },
];

const customCapabilities = [
  "REST and SOAP API integration",
  "Database direct connection (read/write)",
  "File-based integration (SFTP, S3)",
  "Event-driven webhooks",
  "Legacy system connectors",
  "Custom middleware development",
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
            Operational OS™ / Integrations
          </p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Connects to everything in your stack.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              200+ pre-built integrations. Bidirectional data flow. Your systems feed the OS; agents write results back to your systems of record automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Ask About Your Stack →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-[#111111] border-y border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e]">
            {[
              { value: "200+", label: "Pre-built integrations" },
              { value: "<1 day", label: "Typical connection time" },
              { value: "Real-time", label: "Bidirectional sync" },
              { value: "Custom", label: "API & webhook support" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#111111] px-6 py-5">
                <div className="text-2xl font-light text-[#f0f0f0] mb-1">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration categories */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">By Category</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Integration library</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {categories.map((cat, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{cat.name}</p>
                <ul className="space-y-2">
                  {cat.tools.map((tool, j) => (
                    <li key={j} className="text-sm text-[#555555]">{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom integrations */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Custom</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">Don't see your system? We'll build it.</h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-8">
                Every company has at least one custom or legacy system. Our integration team builds custom connectors for proprietary systems, legacy applications, and niche tools.
              </p>
              <ul className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
                {customCapabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 px-5 py-3">
                    <span className="font-mono text-[10px] text-[#333333] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-[#555555]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Integration SLAs</p>
              </div>
              <div className="divide-y divide-[#1e1e1e] border border-[#1e1e1e]">
                {slas.map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-5 py-4">
                    <span className="text-sm text-[#555555]">{row.type}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#888888]">{row.sla}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Connect Operational OS™ to your entire stack."
        subheadline="Tell us your systems — we'll show you what's possible."
        primaryCTA={{ label: "Ask About Your Stack", href: "/contact" }}
        secondaryCTA={{ label: "View Architecture", href: "/operational-os/architecture" }}
      />
    </>
  );
}
