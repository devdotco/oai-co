"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Manual", sublabel: "Spreadsheets & email", color: "#475569", active: false },
  { label: "AI-Assisted", sublabel: "Copilots & suggestions", color: "#1D4ED8", active: false },
  { label: "Workflow-Automated", sublabel: "Rules-based automation", color: "#1D4ED8", active: false },
  { label: "Agentic", sublabel: "AI agents executing work", color: "#22D3EE", active: false },
  { label: "Operational OS™", sublabel: "Full intelligent operating layer", color: "#F97316", active: true },
];

export default function MaturityLadderSVG({ className = "" }: { className?: string }) {
  const totalWidth = 560;
  const barH = 48;
  const gap = 8;
  const topY = 20;

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${stages.length * (barH + gap) + topY + 20}`}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="ladder-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {stages.map((stage, i) => {
        const y = topY + i * (barH + gap);
        const width = 120 + i * 88;
        const isActive = stage.active;

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{ transformOrigin: "0px" }}
          >
            {/* Bar */}
            <rect
              x="0" y={y}
              width={width}
              height={barH}
              rx="6"
              fill={isActive ? "#F97316" : "#0B1B2B"}
              stroke={isActive ? "#F97316" : stage.color}
              strokeWidth={isActive ? "0" : "1"}
              opacity={isActive ? 1 : 0.8}
              filter={isActive ? "url(#ladder-glow)" : "none"}
            />

            {/* Step number */}
            <circle
              cx="24" cy={y + barH / 2}
              r="14"
              fill={isActive ? "rgba(255,255,255,0.2)" : stage.color}
              opacity={isActive ? 1 : 0.3}
            />
            <text
              x="24" y={y + barH / 2 + 4}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="700"
            >
              {i + 1}
            </text>

            {/* Labels */}
            <text
              x="50" y={y + barH / 2 - 5}
              fill={isActive ? "white" : "white"}
              fontSize="12"
              fontWeight={isActive ? "700" : "600"}
            >
              {stage.label}
            </text>
            <text
              x="50" y={y + barH / 2 + 11}
              fill={isActive ? "rgba(255,255,255,0.8)" : "#94a3b8"}
              fontSize="9"
            >
              {stage.sublabel}
            </text>

            {/* Active badge */}
            {isActive && (
              <motion.g
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <rect
                  x={width - 70} y={y + 12}
                  width="60" height="24"
                  rx="12"
                  fill="rgba(255,255,255,0.2)"
                />
                <text
                  x={width - 40} y={y + 28}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                  fontWeight="700"
                >
                  YOUR GOAL
                </text>
              </motion.g>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}
