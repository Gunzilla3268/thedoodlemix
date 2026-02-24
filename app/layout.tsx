import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "The Doodle Mix | Family-Raised Doodles in Arizona",
    template: "%s | The Doodle Mix",
  },
  description:
    "Family-raised Golden Doodles and Double Doodles in Queen Creek, Arizona. Health-tested, socialized puppies for loving families. First-come, first-served.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Doodle Mix",
    title: "The Doodle Mix | Family-Raised Doodles in Arizona",
    description:
      "Family-raised Golden Doodles and Double Doodles in Queen Creek, Arizona. Health-tested, socialized puppies for loving families.",
    images: [{ url: "/images/hero-puppy.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#8B6914",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
