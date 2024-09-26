import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL as string),
  authors: {
    name: "Valerian Dwi Purnomo",
  },
  title: "Valerian Dwi Purnomo",
  description:
    "I'm a Frontend Wizard 🚀. Constantly pushing the boundaries of what's possible, I love diving into the latest technologies like React ⚛️.",
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
  icons: { icon: "favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className=" !scrollbar-track-black scrollbar-thin scrollbar-thumb-teal-500 scrollbar-corner-teal-500"
    >
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
