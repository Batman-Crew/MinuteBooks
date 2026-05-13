import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minute Books — IT & Software Development",
  description:
    "Freelance IT & software development services. Web apps, mobile apps, AI integration, and more. Based in Bangalore, serving worldwide.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "freelance developer",
    "IT services",
    "Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
