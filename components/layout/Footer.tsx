import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] border-t border-[#D7DEE8]/10">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#0891b2] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2">
              Build the operating system your company will run on next.
            </h2>
            <p className="text-blue-100 text-base">
              Talk to an Operational OS™ specialist about your business.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-8 py-4 bg-white text-[#1D4ED8] font-bold rounded-lg hover:bg-[#F8FAFC] transition-colors shadow-xl text-sm"
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
              className="inline-block mb-4 font-bold text-xl tracking-[0.1em]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #22D3EE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OAI
            </Link>
            <p className="text-[#475569] text-sm leading-relaxed mb-6">
              The AI Operating System for Middle Market Companies.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#475569]">
                <a href="mailto:info@dev.co" className="hover:text-[#22D3EE] transition-colors">
                  info@dev.co
                </a>
              </p>
              <p className="text-[#475569]">
                <a href="tel:+12062102954" className="hover:text-[#22D3EE] transition-colors">
                  +1 (206) 210-2954
                </a>
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#475569] hover:text-white text-sm transition-colors"
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
        <div className="mt-16 pt-8 border-t border-[#D7DEE8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © {new Date().getFullYear()} OAI.co. All rights reserved. Operational OS™ is a trademark of OAI.co.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/company/about" className="text-[#475569] hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/company/about" className="text-[#475569] hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
