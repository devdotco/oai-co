"use client";

import { motion } from "framer-motion";

const disconnectedTools = [
  "ChatGPT", "CRM", "ERP", "Email", "Spreadsheets",
  "Shared Drives", "Slack / Teams", "Support Tickets",
  "Accounting", "HRIS", "Project Mgmt", "BI Tools",
];

export default function HomeProblem() {
  return (
    <section className="py-24 bg-[#0B1B2B]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">The Problem</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              AI tools are everywhere.{" "}
              <span className="text-[#475569]">Operational intelligence is not.</span>
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              Most middle market companies have adopted AI in pockets — a ChatGPT subscription here, an
              AI email tool there. But scattered AI tools don't create operational intelligence. They create
              more complexity.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
              Your company's operational intelligence lives in disconnected systems, manual processes, and
              people's heads. The gap between your AI tools and your operational reality is where inefficiency
              compounds — and where Operational OS™ closes the loop.
            </p>
            <div className="flex items-start gap-4 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">The integration gap costs you time every day</p>
                <p className="text-[#94a3b8] text-sm">
                  The average middle market knowledge worker spends 2–3 hours daily managing information between systems
                  that don't talk to each other.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#475569] text-xs font-semibold uppercase tracking-widest mb-5">
              Your current disconnected stack
            </p>
            <div className="flex flex-wrap gap-3">
              {disconnectedTools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2.5 bg-[#07111F] border border-[#D7DEE8]/10 rounded-xl text-sm text-[#475569] relative"
                >
                  {tool}
                  {/* Disconnected indicator */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F97316]/60 border border-[#F97316]" />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-[#D7DEE8]/10" />
              <span className="text-[#475569] text-xs font-medium px-3">replaced by</span>
              <div className="flex-1 h-px bg-[#D7DEE8]/10" />
            </div>

            <div className="mt-6 bg-gradient-to-br from-[#1D4ED8]/20 to-[#22D3EE]/10 border border-[#1D4ED8]/30 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">Operational OS™</div>
              <p className="text-[#22D3EE] text-sm font-medium">One intelligent operating layer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
