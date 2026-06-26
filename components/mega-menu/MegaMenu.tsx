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
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute left-0 right-0 border-b border-[#1e1e1e] bg-[#0a0a0a]/98 backdrop-blur-sm"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
        {"intro" in menu && (
          <p className="text-[#555555] text-sm mb-8 max-w-xl leading-relaxed">{menu.intro}</p>
        )}

        {/* Industry grid layout */}
        {"links" in menu && !("columns" in menu) && menuKey === "industries" && (
          <div className="flex gap-12">
            <div className="flex-1 grid grid-cols-3 gap-1">
              {(menu as { intro: string; links: { label: string; href: string }[]; featured?: { title: string; description: string; href: string } }).links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="px-3 py-2 text-[13px] text-[#555555] hover:text-[#f0f0f0] transition-colors"
                >
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
          <div className="grid grid-cols-2 gap-1 max-w-xs">
            {(menu as { links: { label: string; href: string }[] }).links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-3 py-2 text-[13px] text-[#555555] hover:text-[#f0f0f0] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Column layout */}
        {"columns" in menu && (
          <div className="flex gap-12">
            <div className="flex-1 grid gap-8" style={{ gridTemplateColumns: `repeat(${(menu as { columns: unknown[] }).columns.length}, 1fr)` }}>
              {(menu as { columns: { title: string; links: { label: string; href: string }[] }[] }).columns.map((col) => (
                <div key={col.title}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">
                    {col.title}
                  </h3>
                  <ul className="space-y-1">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block py-1.5 text-[13px] text-[#555555] hover:text-[#f0f0f0] transition-colors"
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
      className="group w-64 flex-shrink-0 border border-[#1e1e1e] p-5 hover:border-[#333333] transition-colors"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-3">Featured</p>
      <h4 className="text-[#f0f0f0] text-sm font-medium mb-2 group-hover:opacity-80 transition-opacity">
        {featured.title}
      </h4>
      <p className="text-[#555555] text-xs leading-relaxed mb-4">{featured.description}</p>
      <span className="text-[#888888] text-xs group-hover:text-[#f0f0f0] transition-colors">
        Explore →
      </span>
    </Link>
  );
}
