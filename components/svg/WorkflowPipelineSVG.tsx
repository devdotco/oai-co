"use client";

import { motion } from "framer-motion";

const steps = [
  { label: "Assess", icon: "🔍", color: "#22D3EE" },
  { label: "Architect", icon: "🏗️", color: "#1D4ED8" },
  { label: "Build", icon: "⚙️", color: "#F97316" },
  { label: "Adopt", icon: "🚀", color: "#22D3EE" },
  { label: "Operate", icon: "📊", color: "#1D4ED8" },
  { label: "Optimize", icon: "✨", color: "#F97316" },
];

export default function WorkflowPipelineSVG({ className = "" }: { className?: string }) {
  const nodeW = 70, nodeH = 70, gap = 24;
  const totalW = steps.length * nodeW + (steps.length - 1) * gap + 40;
  const cy = 80;

  return (
    <svg
      viewBox={`0 0 ${totalW} 160`}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#1D4ED8" />
        </marker>
      </defs>

      {/* Connector lines */}
      {steps.slice(0, -1).map((_, i) => {
        const x1 = 20 + i * (nodeW + gap) + nodeW;
        const x2 = 20 + (i + 1) * (nodeW + gap);
        return (
          <motion.line
            key={i}
            x1={x1} y1={cy}
            x2={x2 - 8} y2={cy}
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
          />
        );
      })}

      {/* Nodes */}
      {steps.map((step, i) => {
        const x = 20 + i * (nodeW + gap);
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <rect
              x={x} y={cy - nodeH / 2}
              width={nodeW} height={nodeH}
              rx="10"
              fill="#0B1B2B"
              stroke={step.color}
              strokeWidth="1.5"
            />
            <text x={x + nodeW / 2} y={cy - 8} textAnchor="middle" fontSize="22">
              {step.icon}
            </text>
            <text
              x={x + nodeW / 2} y={cy + 18}
              textAnchor="middle"
              fill="white"
              fontSize="9"
              fontWeight="600"
            >
              {step.label}
            </text>
          </motion.g>
        );
      })}

      {/* Animated flow dot */}
      <motion.circle
        r="5"
        fill="#22D3EE"
        cy={cy}
        animate={{
          cx: steps.map((_, i) => 20 + i * (nodeW + gap) + nodeW / 2),
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        opacity="0.8"
      />
    </svg>
  );
}
