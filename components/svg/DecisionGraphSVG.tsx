"use client";

import { motion } from "framer-motion";

export default function DecisionGraphSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} aria-hidden="true">
      <defs>
        <marker id="dg-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#22D3EE" />
        </marker>
      </defs>

      {/* Data inputs */}
      {["Sales Data", "Ops Metrics", "Finance KPIs", "HR Data"].map((label, i) => {
        const y = 30 + i * 60;
        return (
          <g key={i}>
            <rect x="10" y={y} width="90" height="34" rx="6" fill="#0B1B2B" stroke="#475569" strokeWidth="1" />
            <text x="55" y={y + 21} textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="500">{label}</text>
            <motion.line
              x1="100" y1={y + 17}
              x2="165" y2="150"
              stroke="#22D3EE"
              strokeWidth="1"
              strokeDasharray="3 3"
              markerEnd="url(#dg-arrow)"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1.2, delay: i * 0.25, repeat: Infinity, ease: "linear" }}
            />
          </g>
        );
      })}

      {/* Decision engine */}
      <rect x="165" y="110" width="100" height="80" rx="12" fill="#0B1B2B" stroke="#22D3EE" strokeWidth="2" />
      <text x="215" y="145" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">Decision</text>
      <text x="215" y="160" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="700">Engine</text>
      <motion.rect
        x="165" y="110" width="100" height="80" rx="12"
        fill="none" stroke="#22D3EE" strokeWidth="1"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Outputs */}
      {["Alert Board", "Action Item", "Forecast", "Recommendation"].map((label, i) => {
        const y = 30 + i * 60;
        return (
          <g key={i}>
            <motion.line
              x1="265" y1="150"
              x2="295" y2={y + 17}
              stroke="#F97316"
              strokeWidth="1"
              strokeDasharray="3 3"
              markerEnd="url(#dg-arrow)"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 1.2, delay: i * 0.25, repeat: Infinity, ease: "linear" }}
            />
            <rect x="295" y={y} width="95" height="34" rx="6" fill="#0B1B2B" stroke="#F97316" strokeWidth="1" />
            <text x="342" y={y + 21} textAnchor="middle" fill="white" fontSize="8" fontWeight="500">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
