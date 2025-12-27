import type { Metadata } from "next";
import "./globals.css"; 

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}