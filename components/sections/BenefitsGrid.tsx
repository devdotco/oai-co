"use client";

import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export default function BenefitsGrid({
  benefits,
  title,
  subtitle,
  dark = true,
}: {
  benefits: Benefit[];
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className={`py-24 ${dark ? "bg-[#07111F]" : "bg-[#F8FAFC]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-[#22D3EE]" : "text-[#1D4ED8]"}`}>
            Capabilities
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mt-3 max-w-2xl ${dark ? "text-white" : "text-[#07111F]"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 max-w-xl ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>{subtitle}</p>
          )}
        </div>
        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 rounded-xl border group hover:border-[#1D4ED8]/50 transition-all hover:-translate-y-1 ${
                dark
                  ? "bg-[#0B1B2B] border-[#D7DEE8]/10"
                  : "bg-white border-[#D7DEE8] shadow-sm hover:shadow-lg"
              }`}
            >
              {benefit.icon && (
                <div className="text-2xl mb-4">{benefit.icon}</div>
              )}
              {!benefit.icon && (
                <div className="w-8 h-8 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                </div>
              )}
              <h3 className={`font-semibold text-sm mb-2 ${dark ? "text-white" : "text-[#07111F]"}`}>
                {benefit.title}
              </h3>
              <p className={`text-xs leading-relaxed ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
