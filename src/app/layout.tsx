import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://exceducation.vercel.app";

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
    title: "Excel Education — Best Coaching in Beanibazar, Sylhet",
    description:
      "Expert coaching for Class 8, SSC & HSC. GPA 5 results, experienced teachers, small batches.",
    url: BASE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Education — Best Coaching in Beanibazar, Sylhet",
    description:
      "Expert coaching for Class 8, SSC & HSC. GPA 5 results, experienced teachers, small batches.",
  },
  metadataBase: new URL(BASE),
  alternates: { canonical: BASE },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Excel Education",
  description:
    "Private tutoring institute for Class 8, SSC & HSC students in Beanibazar, Sylhet, Bangladesh.",
  url: BASE,
  telephone: "+8801XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beanibazar",
    addressRegion: "Sylhet",
    addressCountry: "BD",
  },
  areaServed: {
    "@type": "Place",
    name: "Beanibazar, Sylhet, Bangladesh",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
