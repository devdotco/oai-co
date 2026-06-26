"use client";

import { motion } from "framer-motion";

export default function SecurityShieldSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 340" className={`w-full h-full ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="shield-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#07111F" stopOpacity="0" />
        </radialGradient>
        <filter id="shield-filter">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <ellipse cx="150" cy="160" rx="120" ry="100" fill="url(#shield-glow)" />

      {/* Shield shape */}
      <motion.path
        d="M150 30 L240 70 L240 160 C240 220 200 265 150 285 C100 265 60 220 60 160 L60 70 Z"
        fill="#0B1B2B"
        stroke="#1D4ED8"
        strokeWidth="2"
        filter="url(#shield-filter)"
        animate={{ strokeOpacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Inner shield */}
      <path
        d="M150 55 L220 85 L220 160 C220 205 190 240 150 255 C110 240 80 205 80 160 L80 85 Z"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Lock icon */}
      <rect x="132" y="155" width="36" height="28" rx="4" fill="#1D4ED8" />
      <path
        d="M140 155 L140 148 C140 141 160 141 160 148 L160 155"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="150" cy="167" r="4" fill="white" />
      <rect x="149" y="167" width="2" height="8" fill="white" rx="1" />

      {/* Security labels */}
      {["SOC 2", "GDPR", "Encrypted", "Access Control"].map((label, i) => {
        const angle = -60 + i * 40;
        const rad = (angle * Math.PI) / 180;
        const r = 105;
        const lx = 150 + r * Math.sin(rad);
        const ly = 150 - r * Math.cos(rad);

        return (
          <motion.g key={i} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}>
            <rect
              x={lx - 28} y={ly - 9}
              width="56" height="18"
              rx="9"
              fill="#0B1B2B"
              stroke="#22D3EE"
              strokeWidth="0.8"
            />
            <text x={lx} y={ly + 4} textAnchor="middle" fill="#22D3EE" fontSize="7" fontWeight="600">
              {label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
