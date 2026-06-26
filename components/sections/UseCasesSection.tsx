"use client";

import { motion } from "framer-motion";

interface UseCase {
  title: string;
  description: string;
}

export default function UseCasesSection({
  useCases,
  title = "Use cases",
  dark = true,
}: {
  useCases: UseCase[];
  title?: string;
  dark?: boolean;
}) {
  return (
    <section className={`py-24 ${dark ? "bg-[#0B1B2B]" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">In Practice</span>
          <h2 className={`text-3xl lg:text-4xl font-bold mt-3 ${dark ? "text-white" : "text-[#07111F]"}`}>
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-8 rounded-2xl border group transition-all hover:border-[#22D3EE]/40 ${
                dark
                  ? "bg-[#07111F] border-[#D7DEE8]/10"
                  : "bg-[#F8FAFC] border-[#D7DEE8]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1D4ED8]/30 to-[#22D3EE]/20 border border-[#1D4ED8]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#22D3EE] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className={`font-bold text-base mb-2 ${dark ? "text-white" : "text-[#07111F]"}`}>
                    {uc.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
                    {uc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
