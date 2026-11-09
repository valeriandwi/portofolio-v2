import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL as string),
  authors: {
    name: "Valerian Dwi Purnomo",
  },
  title: "Valerian Dwi Purnomo: Frontend Developer",
  description:
    "Valerian Dwi Purnomo, Frontend Developer in Jakarta building enterprise-scale React and Next.js applications.",
  keywords: [
    "frontend development",
    "React developer",
    "Next.js",
    "web development tutorials",
    "UI/UX design",
    "JavaScript frameworks",
    "Chakra UI",
    "Zustand state management",
    "web performance optimization",
    "responsive design",
    "JavaScript best practices",
    "Valerian Dwi Purnomo",
  ],
  verification: { google: process.env.VERIFICATION_CODE_GOOGLE_SEARCH },
  icons: [
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
    },
    { url: "/favicon.ico", rel: "icon" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        {/* sections start hidden and are revealed by script, so show them when script is off */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.card{--p:1}`}</style>
        </noscript>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
