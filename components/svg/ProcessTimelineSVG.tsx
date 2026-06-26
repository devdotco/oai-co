"use client";

import { motion } from "framer-motion";

interface Step {
  label: string;
  description: string;
  color?: string;
}

export default function ProcessTimelineSVG({
  steps,
  className = "",
}: {
  steps: Step[];
  className?: string;
}) {
  const nodeX = 60;
  const stepH = 80;
  const totalH = steps.length * stepH + 20;
  const colors = ["#22D3EE", "#1D4ED8", "#F97316", "#22D3EE", "#1D4ED8", "#F97316"];

  return (
    <svg
      viewBox={`0 0 400 ${totalH}`}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      {/* Vertical line */}
      <line
        x1={nodeX} y1="20"
        x2={nodeX} y2={totalH - 20}
        stroke="#1D4ED8"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.4"
      />

      {steps.map((step, i) => {
        const cy = 20 + i * stepH + stepH / 2;
        const color = step.color || colors[i % colors.length];

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            {/* Node */}
            <circle
              cx={nodeX} cy={cy}
              r="14"
              fill="#0B1B2B"
              stroke={color}
              strokeWidth="2"
            />
            <motion.circle
              cx={nodeX} cy={cy}
              r="14"
              fill="none"
              stroke={color}
              strokeWidth="1"
              animate={{ r: [14, 20, 14], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
            />
            <text
              x={nodeX} y={cy + 4}
              textAnchor="middle"
              fill="white"
              fontSize="9"
              fontWeight="700"
            >
              {i + 1}
            </text>

            {/* Text */}
            <text
              x={nodeX + 28} y={cy - 6}
              fill="white"
              fontSize="12"
              fontWeight="700"
            >
              {step.label}
            </text>
            <foreignObject x={nodeX + 28} y={cy + 4} width="300" height="40">
              <p
                style={{
                  fontSize: "10px",
                  color: "#94a3b8",
                  lineHeight: "1.4",
                  margin: 0,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {step.description}
              </p>
            </foreignObject>
          </motion.g>
        );
      })}
    </svg>
  );
}
