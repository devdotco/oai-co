"use client";

import { motion } from "framer-motion";

const integrations = [
  "Salesforce", "HubSpot", "NetSuite", "SAP", "Workday",
  "QuickBooks", "Slack", "Microsoft 365", "Google Workspace", "Zendesk",
  "Jira", "Asana", "Stripe", "Greenhouse", "DocuSign",
];

export default function IntegrationGridSVG({ className = "" }: { className?: string }) {
  const cols = 5, itemW = 90, itemH = 44, gapX = 12, gapY = 10;
  const rows = Math.ceil(integrations.length / cols);
  const totalW = cols * itemW + (cols - 1) * gapX + 40;
  const totalH = rows * itemH + (rows - 1) * gapY + 40;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
    >
      {integrations.map((name, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = 20 + col * (itemW + gapX);
        const y = 20 + row * (itemH + gapY);

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <rect
              x={x} y={y}
              width={itemW} height={itemH}
              rx="6"
              fill="#0B1B2B"
              stroke="#1D4ED8"
              strokeWidth="0.8"
              opacity="0.8"
            />
            <motion.rect
              x={x} y={y}
              width={itemW} height={itemH}
              rx="6"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="0.5"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
            <text
              x={x + itemW / 2}
              y={y + itemH / 2 + 4}
              textAnchor="middle"
              fill="white"
              fontSize="8"
              fontWeight="500"
            >
              {name}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
