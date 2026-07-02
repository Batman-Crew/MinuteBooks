import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minute Books — Cloud Accounting, GST, POS & Payroll Software",
  description:
    "Minute Books is a next-generation cloud accounting platform for Indian businesses — POS, inventory, GST filing, invoicing, payroll, and more. Accounting made simple.",
  keywords: [
    "cloud accounting software",
    "GST software",
    "POS software India",
    "inventory management",
    "payroll software",
    "invoicing software",
    "business management platform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorGlow />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
