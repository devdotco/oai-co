"use client";

import { motion } from "framer-motion";

const layers = [
  { label: "Decision Layer", sublabel: "Intelligence & Insights", color: "#22D3EE", y: 40 },
  { label: "Agent Layer", sublabel: "Autonomous AI Workers", color: "#1D4ED8", y: 110 },
  { label: "Workflow Layer", sublabel: "Process Orchestration", color: "#F97316", y: 180 },
  { label: "Knowledge Layer", sublabel: "Data & Context", color: "#1D4ED8", y: 250 },
  { label: "Integration Layer", sublabel: "Systems & APIs", color: "#22D3EE", y: 320 },
];

export default function OperationalStackSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 400"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stack-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B1B2B" />
          <stop offset="100%" stopColor="#07111F" />
        </linearGradient>
        <filter id="stack-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Vertical connector */}
      <line x1="250" y1="60" x2="250" y2="360" stroke="#1D4ED8" strokeWidth="1" strokeDasharray="3 6" opacity="0.3" />

      {layers.map((layer, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          {/* Layer bar */}
          <rect
            x="40" y={layer.y}
            width="420" height="52"
            rx="8"
            fill="url(#stack-grad)"
            stroke={layer.color}
            strokeWidth="1"
            opacity="0.9"
          />

          {/* Color accent */}
          <rect
            x="40" y={layer.y}
            width="4" height="52"
            rx="2"
            fill={layer.color}
            filter="url(#stack-glow)"
          />

          {/* Pulsing dot */}
          <motion.circle
            cx="70" cy={layer.y + 26}
            r="5"
            fill={layer.color}
            animate={{ opacity: [0.4, 1, 0.4], r: [4, 6, 4] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
          />

          <text x="90" y={layer.y + 20} fill="white" fontSize="13" fontWeight="700">
            {layer.label}
          </text>
          <text x="90" y={layer.y + 37} fill="#94a3b8" fontSize="10">
            {layer.sublabel}
          </text>

          {/* Right indicator */}
          <circle
            cx="440" cy={layer.y + 26}
            r="16"
            fill={layer.color}
            opacity="0.15"
            stroke={layer.color}
            strokeWidth="1"
          />
          <text x="440" y={layer.y + 31} textAnchor="middle" fill={layer.color} fontSize="10" fontWeight="700">
            {i + 1}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
