"use client";

interface Outcome {
  metric: string;
  label: string;
}

export default function OutcomesSection({
  outcomes,
  title = "Measured outcomes.",
  subtitle = "Real results from Operational OS™ deployments across middle market companies.",
}: {
  outcomes: Outcome[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
            Outcomes
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">{title}</h2>
          <p className="text-sm text-[#555555] mt-4 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
        <div className={`grid gap-px bg-[#1e1e1e] ${outcomes.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3"}`}>
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-10 text-center hover:bg-[#111111] transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-light text-[#f0f0f0] mb-3">
                {outcome.metric}
              </div>
              <p className="text-[#555555] text-sm leading-relaxed">{outcome.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
