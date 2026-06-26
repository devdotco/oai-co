"use client";

const disconnectedTools = [
  "ChatGPT", "CRM", "ERP", "Email", "Spreadsheets",
  "Shared Drives", "Slack / Teams", "Support Tickets",
  "Accounting", "HRIS", "Project Mgmt", "BI Tools",
];

export default function HomeProblem() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="border-b border-[#1e1e1e] pb-8 mb-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333]">
                The Problem
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] leading-tight mb-6">
              AI tools are everywhere.{" "}
              <span className="text-[#444444]">Operational intelligence is not.</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#555555] mb-5">
              Most middle market companies have adopted AI in pockets — a ChatGPT subscription here,
              an AI email tool there. But scattered AI tools don't create operational intelligence.
              They create more complexity.
            </p>
            <p className="text-sm leading-relaxed text-[#555555]">
              Your company's operational intelligence lives in disconnected systems, manual processes,
              and people's heads. The gap between your AI tools and your operational reality is where
              inefficiency compounds.
            </p>
            <div className="mt-8 border-l-2 border-[#1e1e1e] pl-5">
              <p className="text-[#f0f0f0] text-sm font-medium mb-1">The integration gap costs you time every day</p>
              <p className="text-[#555555] text-sm leading-relaxed">
                The average middle market knowledge worker spends 2–3 hours daily managing
                information between systems that don't talk to each other.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-6">
              Your current disconnected stack
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {disconnectedTools.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 border border-[#1e1e1e] text-sm text-[#444444]"
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-[#1e1e1e]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333]">replaced by</span>
              <div className="flex-1 h-px bg-[#1e1e1e]" />
            </div>

            <div className="border border-[#333333] p-6 text-center">
              <div className="text-2xl font-light text-[#f0f0f0] mb-1">Operational OS™</div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#555555]">
                One intelligent operating layer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
