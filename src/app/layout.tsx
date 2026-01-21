import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
// NEW: Import Analytics package
import { Analytics } from "@vercel/analytics/react"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kamyar Kian | Human-Centered Data Systems",
  description:
    "Bridging Algorithm Design and Human Psychology. Architecting Agentic AI systems for the 2026 era.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-firoozei selection:text-black`}
      >
        {children}

        {/* NEW: Activate Analytics Component here */}
        <Analytics />
        
      </body>
    </html>
  );
}