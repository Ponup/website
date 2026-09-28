import type { Metadata } from "next";
import { SITE_URL } from "@/constants/site";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/SiteChrome";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ponup — Context, ready when it matters",
    template: "%s — Ponup",
  },
  description:
    "Open-source context engineering and content management for people and AI agents.",
  openGraph: {
    title: "Ponup — One source of truth. Every intelligence.",
    description:
      "Organize knowledge for humans. Deliver precise context to AI. Self-host with MIT or use Ponup Cloud.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
