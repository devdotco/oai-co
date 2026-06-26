"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { megaMenus } from "@/data/navigation";

interface MegaMenuProps {
  menuKey: string;
  onClose: () => void;
}

export default function MegaMenu({ menuKey, onClose }: MegaMenuProps) {
  const menu = megaMenus[menuKey as keyof typeof megaMenus];
  if (!menu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-0 right-0 border-b border-[#D7DEE8]/10 bg-[#0B1B2B]/98 backdrop-blur-xl shadow-2xl shadow-black/40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
        {"intro" in menu && (
          <p className="text-[#94a3b8] text-sm mb-8 max-w-xl">{menu.intro}</p>
        )}

        {/* Industry grid layout */}
        {"links" in menu && !("columns" in menu) && menuKey === "industries" && (
          <div className="flex gap-8">
            <div className="flex-1 grid grid-cols-3 gap-2">
              {(menu as { intro: string; links: { label: string; href: string }[]; featured?: { title: string; description: string; href: string } }).links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            {"featured" in menu && menu.featured && (
              <FeaturedCard featured={menu.featured as { title: string; description: string; href: string }} onClose={onClose} />
            )}
          </div>
        )}

        {/* Company links */}
        {"links" in menu && menuKey === "company" && (
          <div className="grid grid-cols-2 gap-2 max-w-sm">
            {(menu as { links: { label: string; href: string }[] }).links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Column layout */}
        {"columns" in menu && (
          <div className="flex gap-8">
            <div className="flex-1 grid gap-8" style={{ gridTemplateColumns: `repeat(${(menu as { columns: unknown[] }).columns.length}, 1fr)` }}>
              {(menu as { columns: { title: string; links: { label: string; href: string }[] }[] }).columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-xs font-semibold text-[#22D3EE] uppercase tracking-wider mb-3">
                    {col.title}
                  </h3>
                  <ul className="space-y-1">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block px-2 py-1.5 text-sm text-[#94a3b8] hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {"featured" in menu && menu.featured && (
              <FeaturedCard featured={menu.featured as { title: string; description: string; href: string }} onClose={onClose} />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FeaturedCard({
  featured,
  onClose,
}: {
  featured: { title: string; description: string; href: string };
  onClose: () => void;
}) {
  return (
    <Link
      href={featured.href}
      onClick={onClose}
      className="group w-72 flex-shrink-0 bg-gradient-to-br from-[#1D4ED8]/20 to-[#22D3EE]/10 border border-[#1D4ED8]/30 rounded-xl p-5 hover:border-[#22D3EE]/40 transition-all"
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#22D3EE] flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-[#22D3EE] transition-colors">
        {featured.title}
      </h4>
      <p className="text-[#94a3b8] text-xs leading-relaxed">{featured.description}</p>
      <div className="flex items-center gap-1 mt-4 text-[#22D3EE] text-xs font-medium">
        Explore
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
