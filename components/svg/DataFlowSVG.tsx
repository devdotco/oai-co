"use client";

import { motion } from "framer-motion";

export default function DataFlowSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 260" className={`w-full h-full ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="1" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Source nodes */}
      {["CRM", "ERP", "HRIS", "Email", "Docs"].map((label, i) => (
        <g key={i}>
          <rect x="20" y={20 + i * 46} width="70" height="36" rx="6" fill="#0B1B2B" stroke="#475569" strokeWidth="1" />
          <text x="55" y={20 + i * 46 + 22} textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="500">{label}</text>
        </g>
      ))}

      {/* Flow lines */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 38 + i * 46;
        return (
          <motion.line
            key={i}
            x1="90" y1={y}
            x2="200" y2="130"
            stroke="#22D3EE"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
          />
        );
      })}

      {/* Central platform */}
      <rect x="200" y="90" width="100" height="80" rx="12" fill="#0B1B2B" stroke="#1D4ED8" strokeWidth="2" />
      <motion.rect
        x="200" y="90" width="100" height="80" rx="12"
        fill="none" stroke="#22D3EE" strokeWidth="1"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <text x="250" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Operational</text>
      <text x="250" y="140" textAnchor="middle" fill="#22D3EE" fontSize="10" fontWeight="700">OS™</text>

      {/* Output lines */}
      {["Sales Agent", "Fin Agent", "HR Agent", "Ops Agent", "Reports"].map((label, i) => {
        const y = 20 + i * 46;
        return (
          <g key={i}>
            <motion.line
              x1="300" y1="130"
              x2="390" y2={y + 18}
              stroke="#F97316"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "linear" }}
            />
            <rect x="390" y={y} width="90" height="36" rx="6" fill="#0B1B2B" stroke="#F97316" strokeWidth="1" />
            <text x="435" y={y + 22} textAnchor="middle" fill="white" fontSize="8" fontWeight="500">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
