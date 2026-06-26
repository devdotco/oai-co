"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-[#1e1e1e] pb-10 mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#f0f0f0]">
              Frequently asked questions
            </h2>
          </div>
          <div className="divide-y divide-[#1e1e1e]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className={`text-sm pr-8 transition-colors ${open === i ? "text-[#f0f0f0]" : "text-[#888888] group-hover:text-[#f0f0f0]"}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 font-mono text-lg leading-none transition-colors ${open === i ? "text-[#f0f0f0]" : "text-[#333333]"}`}>
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-[#555555] leading-relaxed">
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
