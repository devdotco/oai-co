"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, dark = true }: { faqs: FAQ[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`py-24 ${dark ? "bg-[#07111F]" : "bg-[#F8FAFC]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-[#22D3EE] text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className={`text-3xl lg:text-4xl font-bold mt-3 ${dark ? "text-white" : "text-[#07111F]"}`}>
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  dark
                    ? open === i
                      ? "border-[#1D4ED8]/50 bg-[#0B1B2B]"
                      : "border-[#D7DEE8]/10 bg-[#0B1B2B]/50 hover:border-[#D7DEE8]/20"
                    : open === i
                    ? "border-[#1D4ED8]/30 bg-white shadow-lg"
                    : "border-[#D7DEE8] bg-white hover:border-[#1D4ED8]/30"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-sm pr-4 ${dark ? "text-white" : "text-[#07111F]"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-lg leading-none ${
                      dark
                        ? open === i
                          ? "border-[#22D3EE] text-[#22D3EE]"
                          : "border-[#475569] text-[#475569]"
                        : open === i
                        ? "border-[#1D4ED8] text-[#1D4ED8]"
                        : "border-[#D7DEE8] text-[#475569]"
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className={`px-6 pb-5 text-sm leading-relaxed ${dark ? "text-[#94a3b8]" : "text-[#475569]"}`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
