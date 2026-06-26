import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/data/resources";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Resources — AI Tools, Guides, and Proof | OAI.co",
  description: "AI readiness tools, implementation guides, and proof points for middle market AI transformation.",
};

export default function ResourcesPage() {
  const tools = resources.filter((r) => r.category === "tool");
  const guides = resources.filter((r) => r.category === "guide");
  const proof = resources.filter((r) => r.category === "proof");

  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Resources</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Tools, guides, and proof to accelerate your AI transformation
            </h1>
          </div>

          {[
            { label: "Tools", items: tools, color: "#22D3EE" },
            { label: "Guides", items: guides, color: "#1D4ED8" },
            { label: "Proof", items: proof, color: "#F97316" },
          ].map((group) => (
            <div key={group.label} className="mb-16">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-px h-6" style={{ backgroundColor: group.color }} />
                {group.label}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.items.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="group block bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6 hover:border-[#1D4ED8]/50 hover:-translate-y-1 transition-all"
                  >
                    <span className="text-3xl block mb-4">{resource.icon}</span>
                    <div
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        color: group.color,
                        backgroundColor: `${group.color}15`,
                        border: `1px solid ${group.color}30`,
                      }}
                    >
                      {group.label}
                    </div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#22D3EE] transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{resource.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection headline="Ready to start your AI journey?" dark={false} />
    </>
  );
}
