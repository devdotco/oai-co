import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OAI.co — Build Your AI Operating System",
  description: "Talk to an Operational OS™ specialist about deploying AI across your middle market business.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 pb-20 pt-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto w-full">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#333333] mb-8">
          Contact
        </p>
        <h1 className="max-w-3xl text-5xl lg:text-7xl font-light leading-none tracking-tight text-[#f0f0f0] mb-10">
          Let's build your AI OS.
        </h1>

        <div className="border-t border-[#1e1e1e] pt-12 grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <p className="text-sm text-[#555555] leading-relaxed mb-10">
              Tell us about your business. An Operational OS™ specialist will follow up within one business day.
            </p>
            <form className="space-y-5" action="https://formspree.io/f/placeholder" method="POST">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] block mb-2">First Name</label>
                  <input type="text" name="firstName" required className="w-full bg-transparent border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] block mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full bg-transparent border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] block mb-2">Business Email</label>
                <input type="email" name="email" required className="w-full bg-transparent border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] block mb-2">Company</label>
                <input type="text" name="company" required className="w-full bg-transparent border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] block mb-2">What are you trying to solve?</label>
                <textarea name="message" rows={4} className="w-full bg-transparent border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors resize-none" placeholder="Describe your operational challenges or AI goals..." />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-mono text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Send Message →
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">Seattle, WA</p>
              <p className="text-sm text-[#555555]">1420 5th Ave, Suite 2200<br />Seattle, WA 98101</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">West Palm Beach, FL</p>
              <p className="text-sm text-[#555555]">1700 Palm Beach Lakes Blvd<br />West Palm Beach, FL 33401</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#333333] mb-4">Direct</p>
              <a href="tel:+12062102954" className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors block">+1 (206) 210-2954</a>
              <a href="mailto:info@dev.co" className="text-sm text-[#555555] hover:text-[#f0f0f0] transition-colors block mt-1">info@dev.co</a>
            </div>
            <div className="border-t border-[#1e1e1e] pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#333333] mb-3">Response time</p>
              <p className="text-sm text-[#555555]">We respond to all inquiries within one business day. For urgent matters, call directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
