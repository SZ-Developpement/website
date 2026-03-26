import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SZ Développement",
  description: "SZ-Developpement est un collectif de développeurs passionnés spécialisés dans la conception d'applications web, mobiles et d'APIs performantes.",
  icons: {
    icon: "/icons/sz-icon.svg",
    apple: "/icons/sz-icon.svg",
  },
  keywords: ["développement web", "Next.js", "React", "mobile", "API", "TypeScript"],
  openGraph: {
    title: "SZ Développement",
    description: "Nous construisons des produits digitaux qui durent.",
    type: "website",
    siteName: "SZ-Developpement",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}