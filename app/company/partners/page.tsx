import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Partner Program — OAI.co",
  description:
    "Partner with OAI.co to deliver Operational OS™ to your clients. Technology partners, implementation partners, and referral programs available.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1D4ED8 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Partners</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Partner with OAI.co
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed mb-10">
              Deliver AI operating system transformation to your clients — with the technology, training, and
              support of the Operational OS™ platform behind you.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm inline-block">
              Explore Partnership →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Program Types</span>
            <h2 className="text-4xl font-bold text-white mt-3">Three ways to partner</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "Implementation Partner",
                color: "#22D3EE",
                icon: "🤝",
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
                color: "#1D4ED8",
                icon: "⚙️",
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
                color: "#F97316",
                icon: "📣",
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
            ].map((tier, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8" style={{ borderColor: `${tier.color}20` }}>
                <span className="text-4xl block mb-4">{tier.icon}</span>
                <h3 className="text-white font-bold text-2xl mb-3">{tier.type}</h3>
                <p className="text-[#94a3b8] mb-8 leading-relaxed">{tier.desc}</p>
                <ul className="space-y-2.5">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
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
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why OAI.co</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                Why partners choose Operational OS™
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
                The middle market AI opportunity is enormous — and underserved. Most enterprise AI vendors
                price out or over-engineer for the $10M–$500M company. Most SMB tools under-deliver on
                the complexity middle market companies actually face.
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                Operational OS™ is purpose-built for this gap. Partners who specialize in middle market
                transformation have a differentiated platform to offer clients — with a proven methodology,
                a built-out delivery framework, and a platform that scales with each engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$10M–$500M", label: "Addressable market" },
                { value: "6–12 mo", label: "Typical implementation" },
                { value: "3–5x", label: "Average ROI target" },
                { value: "200+", label: "Pre-built integrations" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[#475569] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Become an OAI.co partner." subheadline="Contact us to discuss the right partnership model for your business." dark={false} />
    </>
  );
}
