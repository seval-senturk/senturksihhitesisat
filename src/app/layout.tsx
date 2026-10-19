import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLdScript } from "@/components/json-ld";
import { getStructuredData } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: siteConfig.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body suppressHydrationWarning className={montserrat.variable}>
        <JsonLdScript data={getStructuredData()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
