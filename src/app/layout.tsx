import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kamyar Kian | Human-Centered Data Science",
  description: "Personal website of Kamyar Kian. Exploring the intersection of Data, Economics, and Psychology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-amber-500 selection:text-black">
        {/* Navigation Bar (Appears on all pages) */}
        <Navbar />
        
        {/* Main Page Content */}
        {children}
      </body>
    </html>
  );
}