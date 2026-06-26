"use client";

interface UseCase {
  title: string;
  description: string;
}

export default function UseCasesSection({
  useCases,
  title = "Use cases",
}: {
  useCases: UseCase[];
  title?: string;
  dark?: boolean;
}) {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="border-b border-[#1e1e1e] pb-10 mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
            In Practice
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
            {title}
          </h2>
        </div>
        <div className="grid gap-px bg-[#1e1e1e] md:grid-cols-2">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-[#111111] p-8 hover:bg-[#161616] transition-colors"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[#f0f0f0] font-medium text-base mb-3">
                {uc.title}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
