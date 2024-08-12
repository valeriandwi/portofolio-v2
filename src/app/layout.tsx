import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  authors: {
    name: "Valerian Dwi Purnomo",
  },
  title: "Valerian Dwi Purnomo",
  description:
    "I'm a Frontend Wizard 🚀. Constantly pushing the boundaries of what's possible, I love diving into the latest technologies like React ⚛️.",
  keywords: ["daily web coding", "frontend dev"],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
