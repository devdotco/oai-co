"use client";

import { motion } from "framer-motion";

export default function IntegrationsSection({
  integrations,
  title = "Connected to your stack",
  dark = true,
}: {
  integrations: string[];
  title?: string;
  dark?: boolean;
}) {
  return (
    <section className={`py-24 ${dark ? "bg-[#07111F]" : "bg-[#F8FAFC]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-[#22D3EE]" : "text-[#1D4ED8]"}`}>
            Integrations
          </span>
          <h2 className={`text-3xl lg:text-4xl font-bold mt-3 ${dark ? "text-white" : "text-[#07111F]"}`}>
            {title}
          </h2>
          <p className={`mt-4 max-w-xl mx-auto text-sm ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
            Operational OS™ connects natively with the systems your business already uses.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {integrations.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`px-5 py-3 rounded-xl border text-sm font-medium transition-colors hover:border-[#1D4ED8]/50 ${
                dark
                  ? "bg-[#0B1B2B] border-[#D7DEE8]/10 text-[#94a3b8] hover:text-white"
                  : "bg-white border-[#D7DEE8] text-[#475569] hover:text-[#07111F]"
              }`}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
