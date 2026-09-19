import type { Metadata, Viewport } from "next";
import { portfolio } from "./content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.hero.description,
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.hero.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09070f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
