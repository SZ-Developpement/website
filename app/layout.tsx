import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SZ Dev",
  description:
    "SZ-Dev est un collectif de développeurs passionnés spécialisés dans la conception d'applications web, mobiles et d'APIs performantes.",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  keywords: [
    "développement web",
    "Next.js",
    "React",
    "mobile",
    "API",
    "TypeScript",
  ],
  openGraph: {
    title: "SZ Dev",
    description: "Nous construisons des produits digitaux qui durent.",
    type: "website",
    siteName: "SZ-Dev",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
