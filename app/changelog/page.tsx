import type { Metadata } from "next";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Stay updated with the latest changes, new features, and improvements to Reseebo. See what's new in our receipt organizer and warranty tracker.",
  openGraph: {
    title: `Changelog - ${siteConfig.name}`,
    description:
      "Stay updated with the latest changes, new features, and improvements to Reseebo.",
    url: `${siteConfig.url}/changelog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Changelog`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Changelog - ${siteConfig.name}`,
    description:
      "Stay updated with the latest changes, new features, and improvements to Reseebo.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/changelog`,
  },
};

export default function ChangelogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Changelog</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. Product updates and changelog will be
              displayed here soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

