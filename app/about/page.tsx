import type { Metadata } from "next";
import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Reseebo, the smart receipt organizer and warranty tracker. Discover how we help you manage receipts offline with AI-powered scanning.",
  openGraph: {
    title: `About - ${siteConfig.name}`,
    description:
      "Learn more about Reseebo, the smart receipt organizer and warranty tracker. Discover how we help you manage receipts offline with AI-powered scanning.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - About`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About - ${siteConfig.name}`,
    description:
      "Learn more about Reseebo, the smart receipt organizer and warranty tracker.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Reseebo</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. More details about Reseebo will be
              added here soon.
            </p>
            <p>
              Reseebo is your smart receipt organizer and warranty tracker,
              designed to help you manage your receipts and warranties with ease.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

