import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { inter, jetbrainsMono } from "./fonts";

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
<<<<<<< HEAD
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white selection:bg-amber-500 selection:text-black font-sans`}
      >
        <Navbar />
=======
      {/* TEST: Changing bg-black to bg-red-600 to verify Tailwind connection */}
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-red-600 text-white selection:bg-amber-500 selection:text-black`}
      >
        
        <Navbar />
        
>>>>>>> 0500c07 (feat(branding): add Lighthouse K favicon and layout updates)
        {children}
        
      </body>
    </html>
  );
}
