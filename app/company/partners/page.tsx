import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Partner Program — OAI.co",
  description: "Partner with OAI.co to deliver Operational OS™ to your clients. Technology partners, implementation partners, and referral programs available.",
};

const partnerTypes = [
  {
    type: "Implementation Partner",
    desc: "Consulting firms and system integrators who deliver Operational OS™ implementations to their client base.",
    benefits: [
      "Full platform training and certification",
      "Partner portal and sales collateral",
      "Co-marketing opportunities",
      "Revenue share on client deployments",
      "Technical support and escalation path",
      "Early access to new platform features",
    ],
  },
  {
    type: "Technology Partner",
    desc: "SaaS companies and technology vendors who want native integration with Operational OS™.",
    benefits: [
      "Native integration development support",
      "Listing in the integration library",
      "Joint go-to-market opportunities",
      "API and developer documentation",
      "Customer co-selling",
      "Partner advisory council access",
    ],
  },
  {
    type: "Referral Partner",
    desc: "Advisors, brokers, and business consultants who refer middle market clients to OAI.co.",
    benefits: [
      "Competitive referral commissions",
      "Simple referral tracking portal",
      "Sales enablement resources",
      "Client progress visibility",
      "Quarterly partner calls",
      "No minimum referral requirements",
    ],
  },
];

const stats = [
  { value: "$10M–$500M", label: "Addressable market" },
  { value: "6–12 mo", label: "Typical implementation" },
  { value: "3–5x", label: "Average ROI target" },
  { value: "200+", label: "Pre-built integrations" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto w-full">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">Partners</p>
          <h1 className="max-w-4xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
            Partner with OAI.co.
          </h1>
          <div className="border-t border-[#1e1e1e] pt-10 flex flex-col md:flex-row md:items-start md:gap-20">
            <p className="max-w-sm text-sm leading-relaxed text-[#555555] mb-8 md:mb-0">
              Deliver AI operating system transformation to your clients — with the technology, training, and support of the Operational OS™ platform behind you.
            </p>
            <div>
              <Link href="/contact" className="px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Explore Partnership →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three ways to partner */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">Program Types</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">Three ways to partner</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {partnerTypes.map((tier, i) => (
              <div key={i} className="bg-[#111111] p-8 hover:bg-[#1a1a1a] transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[#f0f0f0] font-medium text-lg mb-3">{tier.type}</h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs text-[#444444]">
                      <span className="w-1 h-1 rounded-full bg-[#333333] flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="border-b border-[#1e1e1e] pb-8 mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">Why OAI.co</p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] mb-6">Why partners choose Operational OS™</h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-5">
                The middle market AI opportunity is enormous — and underserved. Most enterprise AI vendors price out or over-engineer for the $10M–$500M company. Most SMB tools under-deliver on the complexity middle market companies actually face.
              </p>
              <p className="text-sm text-[#555555] leading-relaxed">
                Operational OS™ is purpose-built for this gap. Partners who specialize in middle market transformation have a differentiated platform to offer clients — with a proven methodology, a built-out delivery framework, and a platform that scales with each engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e] self-start">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#0a0a0a] p-8 text-center hover:bg-[#111111] transition-colors">
                  <div className="text-3xl font-light text-[#f0f0f0] mb-2">{stat.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Become an OAI.co partner."
        subheadline="Contact us to discuss the right partnership model for your business."
        primaryCTA={{ label: "Explore Partnership", href: "/contact" }}
      />
    </>
  );
}
