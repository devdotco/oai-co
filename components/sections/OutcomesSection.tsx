"use client";

import { motion } from "framer-motion";

interface Outcome {
  metric: string;
  label: string;
}

export default function OutcomesSection({
  outcomes,
  title = "Measured outcomes.",
  subtitle = "Real results from Operational OS™ deployments across middle market companies.",
  dark = false,
}: {
  outcomes: Outcome[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className={`py-24 ${dark ? "bg-[#07111F]" : "bg-[#0B1B2B]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Outcomes</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">{title}</h2>
          <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto">{subtitle}</p>
        </div>
        <div className={`grid gap-6 ${outcomes.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3"}`}>
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#07111F] border border-[#D7DEE8]/10 rounded-2xl p-8 text-center hover:border-[#1D4ED8]/40 transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3">
                {outcome.metric}
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{outcome.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
