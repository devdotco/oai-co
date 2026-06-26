import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OAI.co — Build Your AI Operating System",
  description:
    "Talk to an Operational OS™ specialist about building your AI operating system. Seattle, WA and West Palm Beach, FL.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden min-h-screen">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Contact</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
                Let's build your AI OS.
              </h1>
              <p className="text-[#94a3b8] text-xl leading-relaxed mb-12">
                Every Operational OS™ engagement starts with a conversation about your business — your
                challenges, your goals, and what your AI operating system should do. Let's talk.
              </p>

              {/* Contact info */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@dev.co" className="text-white text-lg hover:text-[#22D3EE] transition-colors font-medium">
                      info@dev.co
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-semibold uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:+12062102954" className="text-white text-lg hover:text-[#22D3EE] transition-colors font-medium">
                      +1 (206) 210-2954
                    </a>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">What happens next</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Discovery call (30 min)", desc: "We learn about your business, challenges, and goals." },
                    { step: "2", title: "AI Readiness Assessment", desc: "Map your data, systems, and AI opportunity landscape." },
                    { step: "3", title: "Proposal and roadmap", desc: "Receive a phased implementation plan with ROI projections." },
                    { step: "4", title: "Kickoff", desc: "Start with your first high-impact agent in weeks." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#22D3EE] text-xs font-bold">{item.step}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{item.title}</div>
                        <div className="text-[#94a3b8] text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Offices */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-8">Our offices</h2>
              <div className="space-y-6">
                {[
                  {
                    city: "Seattle, WA",
                    address: "1425 Broadway 22689",
                    cityState: "Seattle, WA 98112",
                    icon: "🌲",
                  },
                  {
                    city: "West Palm Beach, FL",
                    address: "700 S Rosemary Ave Suite 204",
                    cityState: "West Palm Beach, FL 33401",
                    icon: "🌴",
                  },
                ].map((office, i) => (
                  <div key={i} className="bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-2xl p-8 hover:border-[#1D4ED8]/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{office.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-xl mb-3">{office.city}</h3>
                        <p className="text-[#94a3b8]">{office.address}</p>
                        <p className="text-[#94a3b8]">{office.cityState}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resources */}
              <div className="mt-12">
                <h3 className="text-white font-bold text-lg mb-6">Explore before you call</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "AI Readiness Checklist", href: "/resources/ai-readiness-checklist" },
                    { label: "AI ROI Calculator", href: "/resources/ai-roi-calculator" },
                    { label: "Agent Opportunity Scorecard", href: "/resources/agent-opportunity-scorecard" },
                    { label: "Executive AI Playbook", href: "/resources/executive-ai-playbook" },
                  ].map((r, i) => (
                    <a
                      key={i}
                      href={r.href}
                      className="block bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-4 text-sm text-[#94a3b8] hover:text-white hover:border-[#1D4ED8]/40 transition-colors"
                    >
                      {r.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
