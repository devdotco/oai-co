"use client";

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export default function BenefitsGrid({
  benefits,
  title,
  subtitle,
}: {
  benefits: Benefit[];
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0] max-w-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-sm text-[#555555] leading-relaxed">{subtitle}</p>
          )}
        </div>
        <div className="grid gap-px bg-[#1e1e1e] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 hover:bg-[#111111] transition-colors"
            >
              <div className="w-6 h-px bg-[#333333] mb-5" />
              <h3 className="text-[#f0f0f0] text-sm font-medium mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#555555] text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
