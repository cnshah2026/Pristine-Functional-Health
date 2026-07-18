import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  absoluteUrl,
  organizationJsonLd,
  siteDescription,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Pristine Functional Health — Online functional health consultations",
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: "Megha Shah" }],
  creator: "Pristine Functional Health",
  publisher: "Pristine Functional Health",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  verification: {
    google: "fg7Q1JuL4zCt_c-G1D4xl0Y6L3d7Apz2GAozCVAAN5s",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pristine Functional Health — Online functional health consultations",
    description: siteDescription,
    siteName: "Pristine Functional Health",
    url: siteUrl,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/pristine-logo-mark.png"),
        width: 512,
        height: 512,
        alt: "Pristine Functional Health logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine Functional Health — Online functional health consultations",
    description: siteDescription,
    images: [absoluteUrl("/pristine-logo-mark.png")],
  },
  icons: {
    icon: [{ url: "/pristine-logo-mark.png", type: "image/png" }],
    shortcut: [{ url: "/pristine-logo-mark.png", type: "image/png" }],
    apple: [{ url: "/pristine-logo-mark.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('pristine-theme');
                  if (t === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SiteNav />
          <main className="relative">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
