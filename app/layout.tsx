import { openSans } from "@/app/fonts";
import Footer from "@/components/footer/Footer";
import QueryProvider from "@/providers/query-provider";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Streple | Borderless Payments & Social Trading App",
    template: "Streple | %s",
    absolute: "Streple | Borderless Payments & Social Trading App",
  },
  description:
    "Streple is a borderless FinTech app that lets you send money worldwide, manage digital assets, and copy verified traders in a secure, EU VASP-certified platform.",
  keywords: [
    "borderless payment app",
    "global money transfer",
    "send money across borders",
    "copy trading app",
    "social trading platform",
    "copy verified traders",
    "EU VASP-certified fintech",
    "digital assets",
    "cross-border finance app",
    "one account for global payments",
    "tokenized asset platform",
    "pro trader network",
  ],
  openGraph: {
    title: "Streple | Send Money Worldwide & Copy Verified Traders",
    description:
      "Send money globally, manage digital assets, and copy verified traders securely with Streple, an EU VASP-certified, borderless finance app.",
    url: "https://streple.com",
    siteName: "Streple",
    images: [
      {
        url: "https://streple.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Streple - Borderless Finance & Social Trading App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streple | Borderless Payments & Social Trading",
    description:
      "Streple lets beginners and pros send money internationally, own crypto & tokenized assets, and copy top traders — all in one secure platform.",
    images: ["https://streple.com/opengraph-image.png"],
    creator: "@StrepleNetwork",
  },
  metadataBase: new URL("https://streple.com"),
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
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Analytics />
      <QueryProvider>
        <body className={`${openSans.className} antialiased`}>
          {children}
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
