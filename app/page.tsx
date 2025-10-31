import type { Metadata } from "next";

import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/config/site";

import Business from "../components/sections/business/default";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Features from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Users from "../components/sections/users/default";
import { LayoutLines } from "../components/ui/layout-lines";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    absolute: `${siteConfig.name} - ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="bg-background text-foreground min-h-screen w-full">
        <LayoutLines />
        <Navbar />
        <Hero />
        <Features />
        <Business />
        <Users />
        <FAQ />
        <Items />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
