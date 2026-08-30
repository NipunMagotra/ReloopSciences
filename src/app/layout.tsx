import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, getOrganizationSchema, getWebSiteSchema } from "@/components/seo/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c2a19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reloopsciences.com"),
  title: {
    default: "Reloop Sciences — Circular Economy for Laboratory Plastics in India",
    template: "%s | Reloop Sciences",
  },
  description:
    "Reloop Sciences is building a traceable circular economy ecosystem in India, recovering and recycling non-hazardous laboratory plastics into high-grade circular materials.",
  applicationName: "Reloop Sciences",
  keywords: [
    "laboratory plastic recycling India",
    "circular economy life sciences",
    "sustainable laboratory waste",
    "non-hazardous laboratory plastics",
    "circular lab plastics",
    "polypropylene lab recycling",
    "sustainable lab infrastructure India",
    "laboratory material recovery",
  ],
  authors: [{ name: "Reloop Sciences", url: "https://reloopsciences.com" }],
  creator: "Reloop Sciences",
  publisher: "Reloop Sciences",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reloopsciences.com",
    siteName: "Reloop Sciences",
    title: "Reloop Sciences — Circular Economy for Laboratory Plastics in India",
    description:
      "A traceable closed-loop ecosystem transforming non-hazardous laboratory plastics into circular materials across India.",
    images: [
      {
        url: "/images/hero-visual.png",
        width: 1200,
        height: 630,
        alt: "Reloop Sciences — Circular Economy for Laboratory Plastics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reloop Sciences — Circular Economy for Laboratory Plastics in India",
    description:
      "A traceable closed-loop ecosystem transforming non-hazardous laboratory plastics into circular materials across India.",
    images: ["/images/hero-visual.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiScriptUrl =
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ||
    (process.env.NEXT_PUBLIC_UMAMI_URL
      ? `${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`
      : "https://analytics.umami.is/script.js");

  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        {umamiWebsiteId && (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
