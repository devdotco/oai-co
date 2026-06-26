"use client";

import { motion } from "framer-motion";

const departments = [
  { label: "Sales", angle: 0, color: "#22D3EE" },
  { label: "Finance", angle: 60, color: "#1D4ED8" },
  { label: "Ops", angle: 120, color: "#F97316" },
  { label: "HR", angle: 180, color: "#22D3EE" },
  { label: "Support", angle: 240, color: "#1D4ED8" },
  { label: "IT", angle: 300, color: "#F97316" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

export default function DepartmentOrbitSVG({ className = "" }: { className?: string }) {
  const cx = 200, cy = 200, orbitR = 130, nodeR = 26;

  return (
    <svg
      viewBox="0 0 400 400"
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#07111F" stopOpacity="0" />
        </radialGradient>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx={cx} cy={cy} r="160" fill="url(#orb-glow)" />

      {/* Orbit ring */}
      <circle
        cx={cx} cy={cy} r={orbitR}
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="1"
        strokeDasharray="4 8"
        opacity="0.3"
      />

      {/* Connection lines */}
      {departments.map((dept, i) => {
        const pos = polarToCartesian(cx, cy, orbitR, dept.angle);
        return (
          <motion.line
            key={i}
            x1={cx} y1={cy}
            x2={pos.x} y2={pos.y}
            stroke={dept.color}
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
          />
        );
      })}

      {/* Center — Operational OS */}
      <circle cx={cx} cy={cy} r="42" fill="#0B1B2B" stroke="#1D4ED8" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="38" fill="url(#orb-glow)" />
      <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">
        Operational
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#22D3EE" fontSize="9" fontWeight="700">
        OS™
      </text>

      {/* Department nodes */}
      {departments.map((dept, i) => {
        const pos = polarToCartesian(cx, cy, orbitR, dept.angle);
        return (
          <motion.g
            key={i}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            style={{ originX: `${pos.x}px`, originY: `${pos.y}px` }}
          >
            <circle
              cx={pos.x} cy={pos.y} r={nodeR}
              fill="#0B1B2B"
              stroke={dept.color}
              strokeWidth="1.5"
              filter="url(#glow-filter)"
            />
            <text
              x={pos.x} y={pos.y + 4}
              textAnchor="middle"
              fill="white"
              fontSize="8"
              fontWeight="600"
            >
              {dept.label}
            </text>
          </motion.g>
        );
      })}

      {/* Orbiting dot */}
      <motion.circle
        r="4"
        fill="#22D3EE"
        filter="url(#glow-filter)"
        animate={{
          cx: departments.map((d) => polarToCartesian(cx, cy, orbitR, d.angle).x),
          cy: departments.map((d) => polarToCartesian(cx, cy, orbitR, d.angle).y),
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
