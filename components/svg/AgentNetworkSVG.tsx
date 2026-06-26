"use client";

import { motion } from "framer-motion";

const agentNodes = [
  { label: "Sales", x: 120, y: 80, color: "#22D3EE" },
  { label: "Finance", x: 300, y: 60, color: "#1D4ED8" },
  { label: "HR", x: 460, y: 100, color: "#F97316" },
  { label: "Ops", x: 80, y: 220, color: "#1D4ED8" },
  { label: "Support", x: 240, y: 260, color: "#22D3EE" },
  { label: "IT", x: 400, y: 230, color: "#F97316" },
];

const connections = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [1, 5],
];

export default function AgentNetworkSVG({ className = "" }: { className?: string }) {
  const cx = 280, cy = 165;

  return (
    <svg viewBox="0 0 560 330" className={`w-full h-full ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#07111F" stopOpacity="0" />
        </radialGradient>
        <filter id="agent-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <ellipse cx={cx} cy={cy} rx="200" ry="140" fill="url(#net-glow)" />

      {/* Connection lines */}
      {connections.map(([from, to], i) => {
        const a = agentNodes[from], b = agentNodes[to];
        return (
          <motion.line
            key={i}
            x1={a.x} y1={a.y}
            x2={b.x} y2={b.y}
            stroke="#1D4ED8"
            strokeWidth="1"
            strokeDasharray="5 5"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="36" fill="#0B1B2B" stroke="#22D3EE" strokeWidth="1.5" />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="700">OAI</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="#22D3EE" fontSize="8" fontWeight="700">Platform</text>

      {/* Agent nodes */}
      {agentNodes.map((node, i) => (
        <motion.g
          key={i}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle
            cx={node.x} cy={node.y}
            r="24"
            fill="#0B1B2B"
            stroke={node.color}
            strokeWidth="1.5"
            filter="url(#agent-glow)"
          />
          <text
            x={node.x} y={node.y + 4}
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="600"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Hub connections */}
      {agentNodes.map((node, i) => (
        <motion.line
          key={`hub-${i}`}
          x1={cx} y1={cy}
          x2={node.x} y2={node.y}
          stroke="#22D3EE"
          strokeWidth="0.5"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}
