import type { Metadata } from "next";
import "./globals.css";
import { inter, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: "Kamyar Kian",
  description: "Project Lighthouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#181c22] text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
