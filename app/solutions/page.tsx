import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions — Practical AI by Business Function | OAI.co",
  description: "12 practical AI solutions across leadership, revenue, operations, finance, and HR for middle market companies.",
};

const categories = ["Leadership", "Revenue", "Operations", "Finance & Admin", "People & Support"];

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#07111F]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">Solutions</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Practical AI implementation by business function
            </h1>
            <p className="text-[#94a3b8] text-xl leading-relaxed">
              Purpose-built AI solutions for every core business function — from executive intelligence to AP
              automation. Each solution is implemented on the Operational OS™ platform.
            </p>
          </div>

          {categories.map((cat) => {
            const catSolutions = solutions.filter((s) => s.category === cat);
            if (!catSolutions.length) return null;
            return (
              <div key={cat} className="mb-16">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-px h-6 bg-[#F97316]" />
                  {cat}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {catSolutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/solutions/${solution.slug}`}
                      className="group block bg-[#0B1B2B] border border-[#D7DEE8]/10 rounded-xl p-6 hover:border-[#1D4ED8]/50 hover:-translate-y-1 transition-all"
                    >
                      <span className="text-3xl block mb-4">{solution.icon}</span>
                      <h3 className="text-white font-bold mb-2 group-hover:text-[#22D3EE] transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{solution.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection headline="Find the right solution for your business." dark={false} />
    </>
  );
}
