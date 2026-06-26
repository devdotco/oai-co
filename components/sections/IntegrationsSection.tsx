"use client";

export default function IntegrationsSection({
  integrations,
  title = "Connected to your stack",
}: {
  integrations: string[];
  title?: string;
  dark?: boolean;
}) {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
            Integrations
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-[#555555] leading-relaxed">
            Operational OS™ connects natively with the systems your business already uses.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {integrations.map((name) => (
            <div
              key={name}
              className="px-4 py-2 border border-[#1e1e1e] text-sm text-[#555555] hover:text-[#f0f0f0] hover:border-[#333333] transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
