import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oai.co"),
  title: {
    default: "OAI.co — The AI Operating System for Middle Market Companies",
    template: "%s | OAI.co",
  },
  description:
    "Operational OS™ helps SMB and middle market companies turn scattered tools, workflows, and decisions into one intelligent operating layer powered by secure AI agents.",
  keywords: ["AI operating system", "AI agents", "operational AI", "middle market AI", "workflow automation", "agentic AI"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oai.co",
    siteName: "OAI.co",
    title: "OAI.co — The AI Operating System for Middle Market Companies",
    description:
      "Operational OS™ helps SMB and middle market companies turn scattered tools, workflows, and decisions into one intelligent operating layer powered by secure AI agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OAI.co — The AI Operating System for Middle Market Companies",
    description:
      "Design, build, and operate agentic AI systems that connect people, processes, data, and decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
