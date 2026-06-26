import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e]">
      {/* CTA Banner */}
      <div className="border-b border-[#1e1e1e] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-4">
              Get started
            </p>
            <h2 className="text-2xl lg:text-3xl font-light text-[#f0f0f0] leading-tight">
              Build the operating system your company will run on next.
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
          >
            Build Your AI OS →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-6 font-mono text-sm font-medium tracking-[0.2em] text-[#f0f0f0] hover:opacity-60 transition-opacity"
            >
              OAI
            </Link>
            <p className="text-[#555555] text-sm leading-relaxed mb-6">
              The AI Operating System for Middle Market Companies.
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <a href="mailto:info@dev.co" className="text-[#555555] hover:text-[#f0f0f0] transition-colors">
                  info@dev.co
                </a>
              </p>
              <p>
                <a href="tel:+12062102954" className="text-[#555555] hover:text-[#f0f0f0] transition-colors">
                  +1 (206) 210-2954
                </a>
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#555555] hover:text-[#f0f0f0] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1e1e1e] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333333] text-xs font-mono">
            © {new Date().getFullYear()} OAI.co. Operational OS™ is a trademark of OAI.co.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/company/about" className="text-[#333333] hover:text-[#f0f0f0] text-xs font-mono transition-colors">
              Privacy
            </Link>
            <Link href="/company/about" className="text-[#333333] hover:text-[#f0f0f0] text-xs font-mono transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
