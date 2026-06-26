import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Readiness Assessment — Know Where You Stand | OAI.co",
  description:
    "Evaluate your organization's readiness to deploy AI across data, infrastructure, process, people, and governance dimensions before you invest.",
};

const dimensions = [
  {
    name: "Data Readiness",
    score: "Critical",
    desc: "Quality, accessibility, and governance of your business data. AI agents are only as good as the data they operate on — poor data quality is the #1 failure point in AI deployments.",
    items: ["Data completeness and accuracy", "Accessibility and API availability", "Data governance and ownership", "Historical depth for training", "Real-time availability requirements"],
    color: "#22D3EE",
  },
  {
    name: "Infrastructure Readiness",
    score: "Essential",
    desc: "Your technology stack's ability to support AI integration — APIs, cloud infrastructure, security controls, and integration capacity.",
    items: ["API availability across core systems", "Cloud infrastructure capability", "Security and access controls", "Integration middleware availability", "Performance and scalability"],
    color: "#1D4ED8",
  },
  {
    name: "Process Readiness",
    score: "Foundational",
    desc: "How well-defined and documented your workflows are. Poorly defined processes are difficult to automate — process clarity is a prerequisite to process automation.",
    items: ["Process documentation and SOPs", "Process consistency across teams", "Defined exception handling", "Clear ownership and accountability", "Measurable performance metrics"],
    color: "#F97316",
  },
  {
    name: "People Readiness",
    score: "Accelerator",
    desc: "AI literacy, change management capacity, and executive sponsorship across the organization.",
    items: ["Executive AI sponsorship", "Manager-level AI understanding", "Front-line adoption willingness", "Change management capacity", "Internal AI champion identification"],
    color: "#22D3EE",
  },
  {
    name: "Governance Readiness",
    score: "Enabling",
    desc: "Policies, oversight frameworks, and risk management structures for responsible AI use.",
    items: ["AI use policy framework", "Data privacy and compliance", "Risk appetite definition", "Audit and monitoring capabilities", "Incident response procedures"],
    color: "#1D4ED8",
  },
];

export default function AIReadinessPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/operational-os" className="text-[#94a3b8] hover:text-white text-sm">Operational OS™</Link>
                <span className="text-[#475569]">/</span>
                <span className="text-[#22D3EE] text-sm">AI Readiness</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Readiness Assessment
              </h1>
              <p className="text-xl text-[#22D3EE] font-medium mb-4">
                Know exactly where you stand before you invest
              </p>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
                Most AI initiatives underdeliver because organizations aren't ready to support them. The AI
                Readiness Assessment gives you an honest picture of where your organization stands across
                five critical dimensions — and what needs to be in place before you invest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-[#1D4ED8] text-white font-bold rounded-lg text-sm">
                  Schedule Your Assessment →
                </Link>
                <Link href="/resources/ai-readiness-checklist" className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg text-sm">
                  Download the Checklist
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {dimensions.map((dim, i) => (
                <div
                  key={i}
                  className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-5"
                  style={{ gridColumn: i === 4 ? "span 2" : undefined }}
                >
                  <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: dim.color }} />
                  <div className="text-white font-semibold text-sm mb-1">{dim.name}</div>
                  <div className="text-xs px-2 py-0.5 rounded-full inline-block" style={{ color: dim.color, backgroundColor: `${dim.color}15` }}>
                    {dim.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five dimensions */}
      <section className="py-24 bg-[#0B1B2B]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Five Dimensions</span>
            <h2 className="text-4xl font-bold text-white mt-3">What we assess</h2>
          </div>
          <div className="space-y-6">
            {dimensions.map((dim, i) => (
              <div key={i} className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold" style={{ color: dim.color }}>0{i + 1}</span>
                      <h3 className="text-white font-bold text-xl">{dim.name}</h3>
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ color: dim.color, backgroundColor: `${dim.color}15`, border: `1px solid ${dim.color}30` }}
                      >
                        {dim.score}
                      </span>
                    </div>
                    <p className="text-[#94a3b8] leading-relaxed">{dim.desc}</p>
                  </div>
                  <ul className="space-y-2">
                    {dim.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${dim.color}15`, border: `1px solid ${dim.color}30` }}>
                          <svg className="w-3 h-3" style={{ color: dim.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Deliverable</span>
            <h2 className="text-4xl font-bold text-white mt-3">What you receive</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Readiness scorecard", desc: "Dimension-by-dimension scores with maturity-level descriptions and peer benchmarks." },
              { icon: "🎯", title: "Gap prioritization", desc: "Ranked list of readiness gaps with recommended remediation actions and timelines." },
              { icon: "🗺️", title: "Implementation sequence", desc: "Which AI initiatives to start with based on your readiness profile and business priorities." },
              { icon: "💰", title: "ROI projections", desc: "Estimated business impact for your top-priority AI opportunities." },
              { icon: "📋", title: "Action plan", desc: "30/60/90-day action plan to close your highest-priority readiness gaps." },
              { icon: "🤝", title: "Executive presentation", desc: "Board-ready summary of your AI readiness and recommended investment priorities." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Start your AI Readiness Assessment" subheadline="The first step toward Operational OS™ is knowing exactly where you stand." dark={false} />
    </>
  );
}
