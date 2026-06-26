"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DepartmentOrbitSVG from "@/components/svg/DepartmentOrbitSVG";

export default function HomeHero() {
  return (
    <section className="pt-32 pb-20 bg-[#07111F] relative overflow-hidden min-h-screen flex items-center">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07111F] via-[#07111F]/80 to-[#0B1B2B]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1D4ED8]/8 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#22D3EE]/6 blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 text-[#22D3EE] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              Operational OS™ — Now Available
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
              The AI{" "}
              <span className="gradient-text">Operating System</span>{" "}
              for Middle Market Companies
            </h1>

            <p className="text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-xl">
              Operational OS™ helps SMB and middle market companies turn scattered tools, workflows,
              documents, and decisions into one intelligent operating layer powered by secure AI agents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold rounded-lg transition-all shadow-xl hover:shadow-blue-900/40 text-sm"
              >
                Build Your AI OS →
              </Link>
              <Link
                href="/operational-os"
                className="px-8 py-4 border border-[#D7DEE8]/20 text-white font-semibold rounded-lg hover:border-white/30 hover:bg-white/5 transition-all text-sm"
              >
                Explore Operational OS™
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-[#475569] text-xs">Deployments</div>
              </div>
              <div className="w-px h-8 bg-[#D7DEE8]/10" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">12</div>
                <div className="text-[#475569] text-xs">Industries</div>
              </div>
              <div className="w-px h-8 bg-[#D7DEE8]/10" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">16</div>
                <div className="text-[#475569] text-xs">AI Agents</div>
              </div>
              <div className="w-px h-8 bg-[#D7DEE8]/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F97316]">70%</div>
                <div className="text-[#475569] text-xs">Avg. admin reduction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <DepartmentOrbitSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
