import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Excel Education — Best Coaching in Beanibazar, Sylhet",
    template: "%s | Excel Education",
  },
  description:
    "Top-rated private tutoring for Class 8, SSC & HSC students in Beanibazar, Sylhet. Experienced teachers, proven GPA 5 results, small batches. Book a free demo class.",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Excel Education",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://exceducation.vercel.app"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
